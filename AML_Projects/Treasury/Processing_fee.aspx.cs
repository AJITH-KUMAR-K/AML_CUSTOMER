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
    public partial class Processing_fee : System.Web.UI.Page
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
        public class getFi
        {
            public string ID { get; set; }
            public string Name { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static List<getFi>GetFIDtls(string input)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<getFi> Fi = new List<getFi>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillData("TREASURY", input, "");
            try
            {
                if(ds.Tables.Count > 0)
                {
                    if(ds.Tables[0].Rows.Count > 0)
                    {
                        foreach(DataRow dr in ds.Tables[0].Rows)
                        {
                            Fi.Add(new getFi()
                            {
                                ID=dr[0].ToString(),
                                Name=dr[1].ToString()
                            });
                        }
                    }
                }
            }
            catch(Exception ex)
            {

            }
            return Fi;
        }

        public class getSubAc
        {
            public string ID { get; set; }
            public string Name { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static List<getSubAc> GetSubAccount(string input,string QueyStr)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<getSubAc> Sub = new List<getSubAc>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillData("TREASURY",QueyStr,input);
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            Sub.Add(new getSubAc()
                            {
                                ID = dr[0].ToString(),
                                Name = dr[1].ToString()
                            });
                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return Sub;
        }

        [WebMethod(EnableSession = true)]
        public static string GetFITypeDtls(string input,string QryStr)
        {
            string Result = "";
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
                        DataSet ds = new DataSet();
            ds = obj.TreasuryFillData("TREASURY", input, QryStr);
            try
            {
                if(ds.Tables.Count > 0)
                {
                    if(ds.Tables[0].Rows.Count > 0)
                    {
                        Result = ds.Tables[0].Rows[0][0].ToString();
                    }
                }
            }
            catch(Exception ex)
            {

            }
            return Result;
        }

        [WebMethod(EnableSession = true)]
        public static string getgststage(string typ, string data)
        {
            DataSet ds;
            string str ="";
            TreasuryService.TreasuryClient obj1 = new TreasuryService.TreasuryClient();
            ds = obj1.TreasuryFillData("TREASURY",typ,data);
            try
            {

                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = ds.Tables[0].Rows[0][0].ToString() + '^' + ds.Tables[0].Rows[0][1].ToString() + '^' + ds.Tables[0].Rows[1][0].ToString() + '^' + ds.Tables[0].Rows[1][1].ToString();

                    //foreach(DataRow dr in ds.Tables[0].Rows){

                    //str =str + dr[0].ToString() + 'µ' + dr[1].ToString() + 'µ';

                    //}
                }
            }
            catch (Exception ex)
            {

            }
            return str;
        }
        [WebMethod(EnableSession = true)]
        public static string AddProcessingFee(string input)
        {
            string Result = "";
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            Result = obj.TreasuryConfirm("PROCESSINGFEE", "", input);
            return Result;
        }
    }
}