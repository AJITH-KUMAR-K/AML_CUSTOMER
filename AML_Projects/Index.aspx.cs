using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Data;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.IO;
using System.Web.Script.Serialization;

namespace AML_Projects
{
    public partial class Index : System.Web.UI.Page
    {
        DataSet ds = new DataSet();
        ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
        protected void Page_Load(object sender, EventArgs e)
        {
            string usr, bid, fimid;
            if (string.IsNullOrEmpty(Session["username"] as string))
            {
                Response.Redirect("SessionExpired.aspx");
            }
            else
            {
                usr = Session["username"].ToString();
                bid = Session["branch_id"].ToString();
                fimid = Session["firm_id"].ToString();
                this.hdUserId.Value = usr;
                this.hdBrid.Value = bid;
                this.hdFirmId.Value = fimid;

                //Summary();
               // PendingDump();
            }
        }    
    }
}