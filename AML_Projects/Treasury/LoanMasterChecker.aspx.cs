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
    public partial class LoanMasterChecker : System.Web.UI.Page
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
       

        public  class gtLoan
        {
            public string Id { get; set; }
            public string finme { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static List<gtLoan> getLoan(string QueryString,string input)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<gtLoan> Fund = new List<gtLoan>();
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
                            Fund.Add(new gtLoan()
                            {
                                Id = dr[0].ToString(),
                                finme = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return Fund;
        }
        public class getFI
        {
            public string Id { get; set; }
            public string Name { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static List<getFI> getFIDtls(string QueryString)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<getFI> Fund = new List<getFI>();
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
                            Fund.Add(new getFI()
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
            return Fund;
        }
        public class getFiTbl
        {
            public string srcnm { get; set; }
            public string fnd { get; set; }

            public string fityp { get; set; }
            public string fi { get; set; }
            public string AEdt { get; set; }
            public string Afrmdt { get; set; }
            public string Atodt { get; set; }
            public string Enme { get; set; }
            public string amnt { get; set; }
            public string roi { get; set; }
            public string PersGr { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static List<getFiTbl> ShowLoans(string QueryStr, string input)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<getFiTbl> gtfi = new List<getFiTbl>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillData("TREASURY", QueryStr, input);
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtfi.Add(new getFiTbl()
                            {
                                srcnm = dr[0].ToString(),
                                fnd = dr[1].ToString(),
                                fityp = dr[2].ToString(),
                                fi = dr[3].ToString(),
                                AEdt = dr[4].ToString(),
                                Afrmdt = dr[5].ToString(),
                                Atodt = dr[6].ToString(),
                                Enme = dr[7].ToString(),
                                amnt=dr[8].ToString(),
                                roi=dr[9].ToString() ,
                                PersGr = dr[10].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtfi;
        }
        [WebMethod(EnableSession = true)]
        public static string ApprRejcLoan(string input)
        {
            string Result = "";
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            Result = obj.TreasuryConfirm("CHECKLOAN", "", input);
            return Result;
        }
    }
}