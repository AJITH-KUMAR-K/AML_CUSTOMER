using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Script.Services;
using System.Data;


namespace AML_Projects
{
    /// <summary>
    /// Summary description for ServiceAutoComplete
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    public class ServiceAutoComplete : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string[] GetSearchData(string SearchKey,string QueryFlag,string QueryID)
       {
            TMS_Service.TMS_ServiceClient obj;
            List<string> SearchArray = new List<string>();
            obj = new TMS_Service.TMS_ServiceClient();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillingData(QueryFlag, QueryID, SearchKey);
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            SearchArray.Add(string.Format("{0}ʒ{1}", dr[0], dr[1]));
                        }
                    }
                }

            }
            catch (Exception ex)
            {
            }
            return SearchArray.ToArray();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string[] GetSearchingData(string SearchKey, string QueryFlag, string QueryID)
      {
            ITSM_Service.ITSMClient obj;
            List<string> SearchArray = new List<string>();
            obj = new ITSM_Service.ITSMClient();
            DataSet ds = new DataSet();
            ds = obj.GetDetails("proc_itsm", QueryFlag, QueryID, SearchKey.ToUpper(), "", "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            SearchArray.Add(string.Format("{0}ʒ{1}", dr[0], dr[1]));
                        }
                    }
                }



            }
            catch (Exception ex)
            {
            }
            return SearchArray.ToArray();
        }



    }
}
