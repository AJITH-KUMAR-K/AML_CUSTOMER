using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Script.Services;
using System.Data;
using System.IO;

namespace IT_SM_Tool
{
    /// <summary>
    /// Summary description for ServiceViewDoc
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class ServiceViewDocES : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string DocumentsDownload(string QueryString, string QueryString1, string InputString)
        {
            byte[] s;
            string DocFileName = "";
            DataSet ds = new DataSet();
            ITSM_Service.ITSMClient obj1 = new ITSM_Service.ITSMClient();
            ds = obj1.GetDetails("PROC_ITSM", "ITSM", "AttShow", QueryString, "", "");
            if (ds.Tables.Count > 0)
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    s=(byte[])(ds.Tables[0].Rows[0][0]);
                    DocFileName = ds.Tables[0].Rows[0][1].ToString();
                    ServiceViewDoc d = new ServiceViewDoc();
                    d.DownloadFile(DocFileName, s);
                    return DocFileName;
                }
                else
                {
                    return "NoData";
                }
            }
            return "NoData";
        }

        public void DownloadFile(string fn, byte[] s)
        {
            string FileName = fn;
            System.Web.HttpResponse Response = System.Web.HttpContext.Current.Response;
            using (Stream file = File.OpenWrite(Server.MapPath("~/IMAGES/" + FileName)))
            {
                file.Write(s, 0, s.Length);
            }
        }

        [WebMethod(EnableSession = true)]
        public string deleteDownloadFile(string input)
        {
            string fname = input;
            ServiceViewDoc d = new ServiceViewDoc();
            d.FileDelete(fname);
            return "File Deleted Successfully";
        }
        public void FileDelete(string fname)
        {
            System.IO.File.Delete(Server.MapPath("~/IMAGES/" + fname));
        }
    }

}
