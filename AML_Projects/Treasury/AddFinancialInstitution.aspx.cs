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
    public partial class AddFinancialInstitution : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string usr,bid,fimid;
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
        public class getFiType
        {
            public string TID { get; set; }

            public string TName { get; set; }
        }
        [WebMethod(EnableSession = true)]

        public static List<getFiType> getFinancialType(string QueryString)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<getFiType> getType = new List<getFiType>();
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
                            getType.Add(new getFiType()
                            {
                                TID = dr[0].ToString(),
                                TName = dr[1].ToString()
                            });
                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return getType;
        }
        public class getBnkDtl
        {
            public string BId { get; set; }
            public string BName { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static List<getBnkDtl> getBank(string QueryString)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<getBnkDtl> gtbnk = new List<getBnkDtl>();
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
                            gtbnk.Add(new getBnkDtl()
                            {
                                BId = dr[0].ToString(),
                                BName = dr[1].ToString()
                            });
                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtbnk;
        }
        [WebMethod(EnableSession = true)]
        public static string getBankName(string QueryStr,string input)
        {
            string Result = "";
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillData("TREASURY", QueryStr, input);
            try
            {
                if(ds.Tables.Count >0 )
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
        public class getState
        {
            public string SId { get; set; }

            public string SName { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static List<getState> GetStateDetails(string QueryString)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<getState> gstate = new List<getState>();
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
                            gstate.Add(new getState()
                            {
                                SId = dr[0].ToString(),
                                SName = dr[1].ToString()
                            });
                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gstate;
        }
        public class getDist
        {
            public string DId { get; set; }
            public string DName { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static List<getDist> GetDistrDetails(string QureyStr, string input)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<getDist> getDists = new List<getDist>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillData("TREASURY", QureyStr, input);
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            getDists.Add(new getDist()
                            {
                                DId = dr[0].ToString(),
                                DName = dr[1].ToString()
                            });
                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return getDists;
        }
        public class getPost
        {
            public string PId { get; set; }
            public string PName { get; set; }
        }
        [WebMethod(EnableSession = true)]

        public static List<getPost> GetPostDetails(string QureyStr, string input)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<getPost> gtpst = new List<getPost>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillData("TREASURY", QureyStr, input);
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtpst.Add(new getPost()
                            {
                                PId = dr[0].ToString(),
                                PName = dr[1].ToString()
                            });
                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtpst;
        }
        [WebMethod(EnableSession = true)]
        public static string GetPincode(string QureyStr, string input)
        {
            string Result = "";
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillData("TREASURY", QureyStr, input);
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        Result = ds.Tables[0].Rows[0][0].ToString();
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return Result;

        }
        public class getCntry
        {
            public string Id { get; set; }
            public string Name { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static List<getCntry> GetCountry(string QureyStr)
        {
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            List<getCntry> getCtr = new List<getCntry>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillData("TREASURY", QureyStr, "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            getCtr.Add(new getCntry()
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
            return getCtr;
        }

        [WebMethod(EnableSession = true)]
        public static string AddFinancialInst(string input)
        {
            string Result = "";
            TreasuryService.TreasuryClient obj = new TreasuryService.TreasuryClient();
            Result = obj.TreasuryConfirm("ADDFINANCIALINST", "", input);
            return Result;
        }

    }
}