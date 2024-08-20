using System.Collections.Generic;
using System.Linq;
using System.Web.Services;
using System.Web.Configuration;
using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Data.SqlClient;
using Helper.Oracle;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;
namespace Ma_AppSuite.Treasury
{
    public partial class LoanRePayment : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string usr, bid, fimid;
            if (string.IsNullOrEmpty(Session["username"] as string))
            {
                Response.Redirect("~/Login.aspx");
            }
            else
            {
                usr = Session["username"].ToString();
                bid = Session["branch_id"].ToString();
                fimid = Session["firm_id"].ToString();
                this.hdUserId.Value = usr;
                this.hdBrid.Value = bid;
                this.hdFirmId.Value = fimid;
                hdPag.Value = Request.QueryString["pag"];
            }

        }
        
     
        [WebMethod(EnableSession = true)]
        public static string getfunddata(string typ, string val1)
        {
            DataSet ds = new DataSet();
            string str = "";

            TreasuryService.TreasuryClient obj1 = new TreasuryService.TreasuryClient();
            ds = obj1.TreasuryFillData("TREASURY", typ, val1);
            if (ds.Tables.Count > 0)
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        str = str + dr[0] + "^" + dr[1] + "^" + dr[2] + "^" + dr[3] + "^" + dr[4] + "Θ";
                    }

                }

            }
            return str;
        }
        public class getFund
        {
            public string Id { get; set; }
            public string Name { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<getFund> getMainLedgr(string QueryString)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<getFund> fundtyp = new List<getFund>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillData("TREASURY", QueryString, "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            fundtyp.Add(new getFund()
                            {
                                Id = dr[0].ToString(),
                                Name = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return fundtyp;
        }
        public class getSubAc
        {
            public string Id { get; set; }
            public string Name { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<getSubAc> getSubLedgr(string QueryString, string input)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<getSubAc> fundtyp = new List<getSubAc>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillData("TREASURY", QueryString, input);
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            fundtyp.Add(new getSubAc()
                            {
                                Id = dr[0].ToString(),
                                Name = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return fundtyp;
        }
        //[WebMethod(EnableSession = true)]
        //public static string GetAmonut(string input, string QuertStr)
        //{
        //    string Result = "";
        //    TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
        //    DataSet ds = new DataSet();
        //    ds = obj.TreasuryFillData("TREASURY", QuertStr, input);
        //    try
        //    {
        //        if (ds.Tables.Count > 0)
        //        {
        //            if (ds.Tables[0].Rows.Count > 0)
        //            {
        //                Result = ds.Tables[0].Rows[0][0].ToString();
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {

        //    }
        //    return Result;
        //}

        [WebMethod(EnableSession = true)]
        public static string AddRepayment(string input,string val)
        {
            string Result = "";
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            Result = obj.TreasuryConfirm("REPAYMENT", val, input);
            return Result;
        }

    }
}