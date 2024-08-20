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
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace TMS_App.Treasury
{
    public partial class Holiday : System.Web.UI.Page
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
                hdPag.Value = Request.QueryString["pag"];
            }
        }
        public class getFI
        {
            public string ID { get; set; }

            public string FIname { get; set; }

        }
        [WebMethod(EnableSession = true)]
        public static List<getFI> getFinancialInst(string input)
        {
            TMS_Service.TMS_ServiceClient obj = new TMS_Service.TMS_ServiceClient();
            List<getFI> Trswork = new List<getFI>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillingData("TREASURY", input, "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            Trswork.Add(new getFI()
                            {
                                ID = dr[0].ToString(),
                                FIname = dr[1].ToString()
                            });
                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return Trswork;
        }

        public class getbank
        {
            public string Bid { get; set; }

            public string bName { get; set; }
        }

        [WebMethod(EnableSession = true)]

        public static List<getbank> getBankName()
        {
            TMS_Service.TMS_ServiceClient obj = new TMS_Service.TMS_ServiceClient();
            List<getbank> bankname = new List<getbank>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillingData("TREASURY", "", "");
            try
            {
                if(ds.Tables.Count >0)
                {
                    if(ds.Tables[0].Rows.Count > 0)
                    {
                        foreach(DataRow dr in ds.Tables[0].Rows)
                        {
                            bankname.Add(new getbank()
                            {
                                Bid=dr[0].ToString(),
                                bName=dr[1].ToString()
                            });
                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return bankname;
        }
        [WebMethod(EnableSession = true)]
        public static string AddHoliday(string input)
        {
            string result = "";
            TMS_Service.TMS_ServiceClient obj = new TMS_Service.TMS_ServiceClient();
           result = obj.TreasuryConfirm("CONFIRMHOLIDAY", "", input);
            return result;
        }
    }
}