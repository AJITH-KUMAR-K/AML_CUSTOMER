using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Data;
using System.Data.OleDb;
using System.IO;
using System.Configuration;
using System.Collections;
using System.Net.Mail;

namespace Ma_AppSuite.Treasury
{
    public partial class Loan_Availment : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {


            string usr, brid, fimid;
            if (string.IsNullOrEmpty(Session["username"] as string))
            {
                Response.Redirect("~/Login.aspx");
            }
            else
            {
                usr = Session["username"].ToString();
                this.hdUserId.Value = usr;
                brid = Session["branch_id"].ToString();
                this.hdBranchId.Value = brid;
                fimid = Session["firm_id"].ToString();
                this.hdFirmId.Value = fimid;


            }


        }

        [WebMethod(EnableSession = true)]

        public static string getAccess1(string typ)
        {
            DataSet ds;
            string str = "";

            TreasuryService.Itreasury_appClient obj1 = new TreasuryService.Itreasury_appClient();
          
            ds = obj1.TreasuryFillData("TRESURYLOAN", typ, "", "");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = Convert.ToString(ds.Tables[0].Rows[0][0]);
                }
            }
            catch (Exception e)
            {

            }
            return str;
        }
        public class getDropDownData
        {
            public string id { get; set; }
            public string name { get; set; }
        }



        [WebMethod(EnableSession = true)]
        public static List<getDropDownData> getFillData(string typ, string val1)
        {
            DataSet ds;
            List<getDropDownData> getData = new List<getDropDownData>();
            TreasuryService.Itreasury_appClient obj1 = new TreasuryService.Itreasury_appClient();
            ds = obj1.TreasuryFillData("TRESURYLOAN", typ, val1, "");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        getData.Add(new getDropDownData()
                        {
                            id = dr[0].ToString(),
                            name = dr[1].ToString()
                        });
                    }
                }
            }
            catch (Exception e)
            {

            }
            return getData;
        }


        [WebMethod(EnableSession = true)]
        public static string getgststage(string typ, string val1, string data)
        {
            DataSet ds;
            string str = "";
            TreasuryService.Itreasury_appClient obj1 = new TreasuryService.Itreasury_appClient();
            ds = obj1.TreasuryFillData("TRESURYLOAN", typ, val1, data);
            try
            {

                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = ds.Tables[0].Rows[0][0].ToString() + '^' + ds.Tables[0].Rows[0][1].ToString() + '^' + ds.Tables[0].Rows[1][0].ToString() + '^' + ds.Tables[0].Rows[1][1].ToString();
                }
            }
            catch (Exception e)
            {

            }
            return str;
        }






        [WebMethod(EnableSession = true)]
        public static string getFillDataloan(string typ, string val1, string data)
        {
            DataSet ds;
            string str = "";

            TreasuryService.Itreasury_appClient obj1 = new TreasuryService.Itreasury_appClient();
            ds = obj1.TreasuryFillData("TRESURYLOAN", typ, val1, data);
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = ds.Tables[0].Rows[0][0].ToString();
                }
            }
            catch (Exception e)
            {

            }
            return str;
        }





        [WebMethod(EnableSession = true)]

        public static string getfunddata(string typ, string val1,string data)
        {
            DataSet ds;
            string str = "";

            TreasuryService.Itreasury_appClient obj1 = new TreasuryService.Itreasury_appClient();
            ds = obj1.TreasuryFillData("TRESURYLOAN", typ, val1, data);
            if (ds.Tables.Count > 0)
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        str = str + dr["source_name"] + "^" + dr["fund_name"] + "^" + dr["fi_type_name"] + "^" + dr["fi_name"] + "^" + dr["agreement_entered_date"] + "^" + dr["agreement_from_date"] + "^" + dr["agreement_to_date"] + "^" + dr["loan_limit"] + "Θ";
                    }

                }
                
            }
            return str;
        }







        [WebMethod(EnableSession = true)]

        public static string getreygenrate(string typ, string val1, string data)
        {
            DataSet ds;
            string str = "";

            TreasuryService.Itreasury_appClient obj1 = new TreasuryService.Itreasury_appClient();
            ds = obj1.TreasuryFillData("TRESURYLOAN", typ, val1, data);
            if (ds.Tables.Count > 0)
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        str = str  + dr[0] ;
                    }

                }

            }
            return str;
        }






        [WebMethod(EnableSession = true)]

        public static string getoldloandtl(string typ, string val1, string data)
        {
            DataSet ds;
            string str = "";

            TreasuryService.Itreasury_appClient obj1 = new TreasuryService.Itreasury_appClient();
            ds = obj1.TreasuryFillData("TRESURYLOAN", typ, val1, data);
            if (ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    //str = str + dr["loan_amount"] + "^" + dr["processing_fee"] + "^" + dr["intrest_type"] + "^" + dr["tenure"] + "^" + dr["loan_availed_date"] + "^" + dr["loan_agreement_date"] + "^" + dr["gst_rate"] + "^" + dr["igst"] + "^" + dr["sgst"] + "^" + dr["cgst"] + "Θ";
                    str = str + dr["loan_amount"] + "^" + dr["in_type_name"] + "^" + dr["intrest_rate"] + "^" + dr["tenure"] + "^" + dr["loan_date"] + "^" + dr["maturity_date"] + "^" + dr["payment_name"] + "^" + dr["loan_main_acc"] + "^" + dr["loan_sub_acc"] + "^" + dr["inst_acc_no"] + "^" + dr["inst_sub_acc_no"] + "^" + dr["emp_name"] + "^" + dr["entered_date"] + "Θ";
                }

            }
            return str;
        }


        [WebMethod(EnableSession = true)]
        public static string ConfirmTresury(string typ,string itmDtl,string data)
        {

            TreasuryService.Itreasury_appClient obj1 = new TreasuryService.Itreasury_appClient();
            return obj1.TresuryConfirmations("TREASURYCONFIRM", typ, itmDtl, data);

        }

        //protected void btn_confirm_Click(object sender, EventArgs e)
        //{
        //    ArrayList ar = new ArrayList();
        //    //PurchaseService.PurchaseClient obj = new PurchaseService.PurchaseClient();
        //    TreasuryService.Itreasury_appClient obj = new TreasuryService.Itreasury_appClient();
        //    GHelper.Report.ExcelExport Gobj = new GHelper.Report.ExcelExport();
        //    string connectionString = "";
        //    string result = "", msg = "";
        //    if (fupImports.HasFile)
        //    {
        //        string FileName = Path.GetFileName(fupImports.PostedFile.FileName);
        //        string Extension = Path.GetExtension(fupImports.PostedFile.FileName);
        //        string FolderPath = ConfigurationManager.AppSettings["FolderPath"];
        //        string FilePath = Server.MapPath(FolderPath + FileName);
        //        fupImports.SaveAs(FilePath);

        //        if (Extension == ".xls")
        //        {
        //            if (Environment.GetEnvironmentVariable("PROCESSOR_ARCHITECTURE") == "x86")
        //            {
        //                connectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + FilePath + ";Extended Properties=\"Excel 8.0;HDR=NO;\"";
        //            }
        //            else
        //            {
        //                connectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + FilePath + ";Extended Properties=\"Excel 12.0;HDR=NO;IMEX=2\"";
        //            }
        //        }
        //        else
        //        {
        //            System.Text.StringBuilder cl_script1 = new System.Text.StringBuilder();
        //            cl_script1.Append("alert('uploaded file is not the Excel file with .xls extension');");
        //            Page.ClientScript.RegisterClientScriptBlock(this.GetType(), "clientscript", cl_script1.ToString(), true);
        //            return;
        //        }

        //        OleDbConnection con = new OleDbConnection(connectionString);
        //        OleDbCommand cmd = new OleDbCommand();
        //        cmd.CommandType = System.Data.CommandType.Text;
        //        cmd.Connection = con;
        //        OleDbDataAdapter dAdapter = new OleDbDataAdapter(cmd);
        //        DataTable dtExcelRecords = new DataTable();
        //        con.Open();
        //        DataTable dtExcelSheetName = con.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
        //        string getExcelSheetName = dtExcelSheetName.Rows[0]["Table_Name"].ToString();
        //        cmd.CommandText = "SELECT * FROM [" + getExcelSheetName + "]";
        //        dAdapter.SelectCommand = cmd;
        //        dAdapter.Fill(dtExcelRecords);
        //        con.Close();
        //        if (dtExcelRecords.Rows.Count > 500)
        //        {
        //            System.Text.StringBuilder cl_script1 = new System.Text.StringBuilder();
        //            cl_script1.Append("alert('Only a Maximum of 500 Records can be Uploaded at a Time..!!!');");
        //            Page.ClientScript.RegisterClientScriptBlock(this.GetType(), "clientscript", cl_script1.ToString(), true);
        //            return;
        //        }
        //        dtExcelRecords.Rows.RemoveAt(0);
        //        int n, ln = 1;
        //        foreach (DataRow dr in dtExcelRecords.Rows)
        //        {
        //            if (dr[0] == System.DBNull.Value)
        //            {
        //                break;
        //            }
        //            else
        //            {                        

        //                //for (int i = 3; i <= 38; i++)
        //                //{                            
        //                //        if(!int.TryParse(dr[i].ToString(), out n))
        //                //        {
        //                //            Page.ClientScript.RegisterClientScriptBlock(this.GetType(), "clientscript", "alert('Invalid data. Line No:" + ln + "');window.open('frmAddBudget.aspx?pag=1','_self');", true);
        //                //            return;

        //                //        }                                                        
        //                //}
        //                result = result + dr[0].ToString() + "~" + dr[1].ToString() + "~" + dr[2].ToString() + "~" + hdUserId.Value + "~" + hdBranchId.Value + "~" + hdFirmId.Value + "¥";
        //            }
        //        }
        //        result = hdfunid.Value + "æ" + result;
        //        msg = obj.TresuryConfirmations("TREASURYCONFIRM", "INSETERMLOAN", result, "2");
        //        Page.ClientScript.RegisterClientScriptBlock(this.GetType(), "clientscript", "alert('" + msg + "');window.open('Loan_Availment.aspx?pag=1','_self');", true);
        //        return;
        //    }
        //    else
        //    {
        //        System.Text.StringBuilder cl_script1 = new System.Text.StringBuilder();
        //        cl_script1.Append("alert('Please Uploaded a File');");
        //        Page.ClientScript.RegisterClientScriptBlock(this.GetType(), "clientscript", cl_script1.ToString(), true);
        //        return;
        //    }
        //}








    }
}