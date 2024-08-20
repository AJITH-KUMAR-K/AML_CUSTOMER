using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Text;
using System.Security.Cryptography;
using System.Data;

namespace AML_Projects

{
    public partial class SessionCheck : System.Web.UI.Page
    {
        Helper.Oracle.OracleHelper oh = new Helper.Oracle.OracleHelper();
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public void Page_Init(object o, EventArgs e)
        {
            Response.Cache.SetCacheability(HttpCacheability.NoCache);

            Response.Cache.SetExpires(DateTime.UtcNow.AddHours(-1));

            Response.Cache.SetNoStore();

            string ipshow = GetUserIP();

            DataTable dtUsrDtls1 = new DataTable();

            dtUsrDtls1 = oh.ExecuteDataSet("select t.sessionid from LOGIN_SESSION t where t.ipaddress='" + ipshow + "' and t.curr_date in (select max(a.curr_date) curr_date from  LOGIN_SESSION a where a.ipaddress='" + ipshow + "' ) ").Tables[0];



            //string userid = "374792";
            //HttpContext.Current.Session["sessionkey"] = "908DC2AFF18EA20D10B63C36A04F2D25910C85C57705A9A156A146B24776F916CE8A9E00159820FE2AEC916F90F2FB4AF0C05A58DF7893B20B2AC6F952DD549C";

            string userid = "";
            if (dtUsrDtls1.Rows.Count > 0)
            {
                userid = Decrypt(HttpUtility.UrlDecode(Request.QueryString["key"]), dtUsrDtls1.Rows[0][0].ToString());
                HttpContext.Current.Session["sessionkey"] = dtUsrDtls1.Rows[0][0].ToString();
            }
            else
            {
                userid = Decrypt(HttpUtility.UrlDecode(Request.QueryString["key"]), "J1MAORUPPHANAMN");
            }



            HttpContext.Current.Session["username"] = userid;
            DataTable dtUsrDtls = new DataTable();
            dtUsrDtls = oh.ExecuteDataSet("SELECT A.BRANCH_ID,B.BRANCH_NAME,A.EMP_NAME,A.ACCESS_ID,A.FIRM_ID FROM BRANCH_MASTER B,EMP_MASTER A WHERE A.BRANCH_ID=B.BRANCH_ID AND A.STATUS_ID=1 AND A.EMP_CODE=" + userid + "").Tables[0];
            HttpContext.Current.Session["branch_id"] = dtUsrDtls.Rows[0][0];
            HttpContext.Current.Session["branch_name"] = dtUsrDtls.Rows[0][1];
            HttpContext.Current.Session["user_name"] = dtUsrDtls.Rows[0][2];

            HttpContext.Current.Session["access_id"] = dtUsrDtls.Rows[0][3];
            HttpContext.Current.Session["firm_id"] = dtUsrDtls.Rows[0][4];
            HttpContext.Current.Session["system_ip"] = ipshow;
            Response.Redirect("index.aspx");



            //string userid = "19675";
            ////string userid = Decrypt(HttpUtility.UrlDecode(Request.QueryString["key"]));
            //HttpContext.Current.Session["username"] = userid;
            //DataTable dtUsrDtls = new DataTable();
            //dtUsrDtls = oh.ExecuteDataSet("SELECT A.BRANCH_ID,B.BRANCH_NAME,A.EMP_NAME,A.ACCESS_ID,A.FIRM_ID FROM BRANCH_MASTER B,EMP_MASTER A WHERE A.BRANCH_ID=B.BRANCH_ID AND A.STATUS_ID=1 AND A.EMP_CODE=" + userid + "").Tables[0];
            //HttpContext.Current.Session["branch_id"] = dtUsrDtls.Rows[0][0];
            //HttpContext.Current.Session["branch_name"] = dtUsrDtls.Rows[0][1];
            //HttpContext.Current.Session["user_name"] = dtUsrDtls.Rows[0][2];

            //HttpContext.Current.Session["access_id"] = dtUsrDtls.Rows[0][3];
            //HttpContext.Current.Session["firm_id"] = dtUsrDtls.Rows[0][4];
            ////HttpContext.Current.Session["emp_branch_id"] = dtUsrDtls.Rows[0][3];
            ////HttpContext.Current.Session["role_id"] = dtUsrDtls.Rows[0][5];
            ////HttpContext.Current.Session["firm_name"] = dtUsrDtls.Rows[0][7];
            ////HttpContext.Current.Session["message"] = dtUsrDtls.Rows[0][8];
            ////HttpContext.Current.Session["title"] = dtUsrDtls.Rows[0][9];
            ////Response.Redirect("sea.aspx");
            //Response.Redirect("index.aspx");
        }
        private string Decrypt(string cipherText, string EncryptionKey)
        {
            //string EncryptionKey = "MAKV2SPBNI99212";
            //string EncryptionKey = "J1MAORUPPHANAMN";
            cipherText = cipherText.Replace(" ", "+");
            byte[] cipherBytes = Convert.FromBase64String(cipherText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                        cs.Close();
                    }
                    cipherText = Encoding.Unicode.GetString(ms.ToArray());
                }
            }
            return cipherText;
        }

        private string GetUserIP()
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