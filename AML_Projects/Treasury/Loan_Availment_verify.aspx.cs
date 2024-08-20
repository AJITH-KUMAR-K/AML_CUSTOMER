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
    public partial class Loan_Availment_verify : System.Web.UI.Page
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

        public static string getfunddata(string typ, string val1, string data)
        {
            DataSet ds;
            string str = "";

            TreasuryService.Itreasury_appClient obj1 = new TreasuryService.Itreasury_appClient();
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

            TreasuryService.Itreasury_appClient obj1 = new TreasuryService.Itreasury_appClient();
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

            TreasuryService.Itreasury_appClient obj1 = new TreasuryService.Itreasury_appClient();
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
        public static string ConfirmTresury(string typ, string itmDtl, string data)
        {

            TreasuryService.Itreasury_appClient obj1 = new TreasuryService.Itreasury_appClient();
            return obj1.TresuryConfirmations("TREASURYCONFIRM", typ, itmDtl, data);
        }



    }
}