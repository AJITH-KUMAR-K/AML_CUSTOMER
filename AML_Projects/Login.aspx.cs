using System.Web;
using System.Web.UI;
using System.Text;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Security.Cryptography;
using Microsoft.Reporting.WebForms;
using System.Data;
using System.IO;
using System.Web.Services;
using System.Web.Script.Services;
using System;
using System.Net;

namespace AML_Projects
{
    public partial class Login : System.Web.UI.Page
    {
        Helper.Oracle.OracleHelper oh = new Helper.Oracle.OracleHelper();
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string checkUser(string typ, string val)
        {
            try
            {
                System.Net.ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls;
                Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
                // ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();

                DataTable dt = new DataTable();
                  //string indata = username + '~' + password; 
                string indata =  typ + '~' + val; 
                string s;
                //string res = obj.testmethod("1", indata);
                s = obj.getdata_login("2", indata);
                Login lg = new Login();
                string ipshow = lg.GetUserIP();
                //dT.Rows[0][0].ToString() + 'µ' + dT.Rows[0][1].ToString() + 'µ' + dT.Rows[0][2].ToString() + 'µ' + dT.Rows[0][3].ToString() + 'µ' + dT.Rows[0][4].ToString()

                if (s != null && s != "0")
                {
                    if (s == "2~0µ0µ0µ0µ0")
                    {
                        return "block";
                    }
                    else
                    {
                        string[] res = s.Split('~');
                        int r1 = Convert.ToInt32(res[0]);
                        if (r1 == 1)
                        {
                            string[] ss = res[1].Split('µ');
                            if (typ == ss[5])
                            {
                                // HttpContext.Current.Session["branch_id"] = Convert.ToInt32(res[1]);

                                HttpContext.Current.Session["branch_id"] = Convert.ToInt32(ss[0]);
                                HttpContext.Current.Session["branch_name"] = ss[1].ToString();
                                HttpContext.Current.Session["user_name"] = ss[2].ToString();
                                HttpContext.Current.Session["access_id"] = Convert.ToInt32(ss[3]);
                                HttpContext.Current.Session["firm_id"] = Convert.ToInt32(ss[4]);
                                HttpContext.Current.Session["system_ip"] = ipshow;
                                HttpContext.Current.Session["username"] = ss[5];// username;//Convert.ToInt32(ss[4]);

                                return "Valid";
                            }
                            else { return "Invalid"; }
                        }
                        else
                        {
                            return "Invalid";

                        }
                    }
                }
                else
                {
                    return "Invalid";

                }

            }
            catch(Exception e)
            {
                string str = e.Message;
                return str;
            }

        }

        public  string GetUserIP()
        {
            try
            {
                string ipList = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

                if (!string.IsNullOrEmpty(ipList))
                {
                    return ipList.Split(',')[0];
                }

                return Request.ServerVariables["REMOTE_ADDR"];
            }
            catch (Exception e)
            {
                oh.ExecuteNonQuery("insert into TBL_BRS_ERRORLOG(error,en_date) values('" + e.Message + "',sysdate)");
                return e.Message;
            }

        }

    }
}