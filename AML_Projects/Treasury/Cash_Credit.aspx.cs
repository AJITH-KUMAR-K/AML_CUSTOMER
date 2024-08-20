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
using Microsoft.Reporting.WebForms;

namespace TMS_App
{
    public partial class Cash_Credit : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string usr;
            if (string.IsNullOrEmpty(Session["username"] as string))
            {
                Response.Redirect("~/Login.aspx");
            }
            else
            {
                usr = Session["username"].ToString();
                this.hdUserId.Value = usr;          
               // hdfundid.Value ="24";

            }
        }


        [WebMethod(EnableSession = true)]

        public static string getAccess1(string typ)
        {
            DataSet ds;
            string str = "";

            TMS_Service.TMS_ServiceClient obj1 = new TMS_Service.TMS_ServiceClient();

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
            TMS_Service.TMS_ServiceClient obj1 = new TMS_Service.TMS_ServiceClient();
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

        public static string getfunddata(string typ, string val1, string data)
        {
            DataSet ds;
            string str = "";

            TMS_Service.TMS_ServiceClient obj1 = new TMS_Service.TMS_ServiceClient();
            ds = obj1.TreasuryFillData("TRESURYLOAN", typ, val1, data);
            if (ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    str = str + dr["source_name"] + "^" + dr["fund_name"] + "^" + dr["fi_type_name"] + "^" + dr["fi_name"] + "^" + dr["agreement_entered_date"] + "^" + dr["agreement_from_date"] + "^" + dr["agreement_to_date"] + "^" + dr["loan_limit"] + "Θ";
                }

            }
            return str;
        }

        [WebMethod(EnableSession = true)]

        public static string getoldloandtl(string typ, string val1, string data)
        {
            DataSet ds;
            string str = "";

            TMS_Service.TMS_ServiceClient obj1 = new TMS_Service.TMS_ServiceClient();
            ds = obj1.TreasuryFillData("TRESURYLOAN", typ, val1, data);
            if (ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    //str = str + dr["loan_amount"] + "^" + dr["processing_fee"] + "^" + dr["in_type_name"] + "^" + dr["tenure"] + "^" + dr["loan_availed_date"] + "^" + dr["loan_agreement_date"] + "^" + dr["gst_rate"] + "^" + dr["igst"] + "^" + dr["sgst"] + "^" + dr["cgst"] + "^" + dr["Loan_acc_name"] + "^" + dr["Processing_Fee_Acct_name"] + "^" + dr["Bank_Acco"] + "Θ";

                    str = str + dr["loan_amount"] + "^" + dr["in_type_name"] + "^" + dr["intrest_rate"] + "^" + dr["tenure"] + "^" + dr["loan_date"] + "^" + dr["maturity_date"] + "^" + dr["payment_name"] + "^" + dr["loan_main_acc"] + "^" + dr["loan_sub_acc"] + "^" + dr["inst_acc_no"] + "^" + dr["inst_sub_acc_no"] + "^" + dr["emp_name"] + "^" + dr["entered_date"] + "Θ";
                }

            }
            return str;
        }


        [WebMethod(EnableSession = true)]

        public static string getpaymodefill(string typ, string val1, string data)
        {
            DataSet ds;
            string str = "";

            TMS_Service.TMS_ServiceClient obj1 = new TMS_Service.TMS_ServiceClient();
            ds = obj1.TreasuryFillData("TRESURYLOAN", typ, val1, data);
            if (ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    str = str + dr["principle"] + "^" + dr["int_amt"] + "^" + dr["penalty_amt"] + "^" + dr["penalty_status"] + "^" + dr["INT_TO_DT"] + "^" + dr["pay_dt"] + "^" + dr["payment_name"] + "Θ";
                }

            }
            return str;
        }




        [WebMethod(EnableSession = true)]
        public static string getFillDataloan(string typ, string val1, string data)
        {
            DataSet ds;
            string str = "";

            TMS_Service.TMS_ServiceClient obj1 = new TMS_Service.TMS_ServiceClient();
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

        public static string getstatement(string typ, string val1, string data)
        {
            DataSet ds;
            string str = "";

            TMS_Service.TMS_ServiceClient obj1 = new TMS_Service.TMS_ServiceClient();
            ds = obj1.TreasuryFillData("TRESURYLOAN", typ, val1, data);
            if (ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)  
                {
                    str = str + dr["AMOUNT"] + "^" + dr["TRA_DT"] + "^" + dr["DESCR"] + "^" + dr["DEBIT"] + "^" + dr["CREDIT"] + "^" + dr["LOAN_BAL"] + "^" + dr["TRANS_ID"] +"Θ";
                }

            }
            return str;
        }


        [WebMethod(EnableSession = true)]
        public static string ConfirmTresury(string typ, string itmDtl, string data)
        {

            TMS_Service.TMS_ServiceClient obj1 = new TMS_Service.TMS_ServiceClient();
            return obj1.TresuryConfirmations("TREASURYCONFIRM", typ, itmDtl, data);
        }



        protected void btn_Statement_Click(object sender, EventArgs e)
        {           
                DataSet ds = new DataSet();
                TMS_Service.TMS_ServiceClient obj1 = new TMS_Service.TMS_ServiceClient();
                ReportViewer1.LocalReport.DataSources.Clear();
                ReportViewer1.Visible = true;
                ReportViewer1.LocalReport.EnableExternalImages = true;
                ReportViewer1.LocalReport.ReportPath = Server.MapPath("statement.rdlc");
                ds = obj1.TreasuryFillData("TRESURYLOAN", "SELCCSTATEMENT", "", hdfundid.Value);
                ReportDataSource dsPoMaster = new ReportDataSource("dtreport", ds.Tables[0]);
                ReportViewer1.LocalReport.DataSources.Clear();
                ReportViewer1.LocalReport.DataSources.Add(dsPoMaster);

            ds = obj1.TreasuryFillData("TRESURYLOAN", "SELCCSTMTPARAMETER", "", hdUserId.Value);
            ReportParameter Date = new ReportParameter("date", ds.Tables[0].Rows[0][0].ToString());
            this.ReportViewer1.LocalReport.SetParameters(Date);
            //ReportParameter Name = new ReportParameter("name", ds.Tables[0].Rows[0][1].ToString());
            //this.ReportViewer1.LocalReport.SetParameters(Name);
            ReportParameter Time = new ReportParameter("time", ds.Tables[0].Rows[0][2].ToString());
            this.ReportViewer1.LocalReport.SetParameters(Time);

            ReportParameter Year = new ReportParameter("header1", "value7");
            this.ReportViewer1.LocalReport.SetParameters(Year);
            ReportParameter Accno = new ReportParameter("acc_no", "value8");
            this.ReportViewer1.LocalReport.SetParameters(Accno);

            ds = obj1.TreasuryFillData("TRESURYLOAN", "SELCCLOANDEL", "", hdfundid.Value);
            ReportParameter LoanId = new ReportParameter("loan_id", ds.Tables[0].Rows[0][0].ToString());
            this.ReportViewer1.LocalReport.SetParameters(LoanId);
            ReportParameter LoanBal = new ReportParameter("loan_bal", ds.Tables[0].Rows[0][1].ToString());
            this.ReportViewer1.LocalReport.SetParameters(LoanBal);

            //ReportViewer1.LocalReport.("", 1);
            ReportViewer1.SizeToReportContent = true;
            ReportViewer1.LocalReport.Refresh();

        }

    }

}
