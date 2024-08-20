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

namespace AML_Projects
{
    public partial class Main : System.Web.UI.MasterPage
    {
        //ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
        Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
        protected void Page_Load(object sender, EventArgs e)
        {
            //HttpContext.Current.Session["username"] = "19675";
            //if (string.IsNullOrEmpty(Session["username"] as string))
            //{
            //    Response.Redirect("SessionExpired.aspx");
            //}
            string user = Session["username"].ToString();
            String mid = "";
            if (string.IsNullOrEmpty(Request.QueryString["mid"] as string))
            {
                mid="";
            }
            else
            {
                mid = Request.QueryString["mid"];
            }
            string str = "";
            DataTable dt = new DataTable();
            //dt = obj.TestService("19675");
            DataSet ds = new DataSet();
            //ds= obj.GetDetails("proc_ITSM", "ITSM", "EMPNAMEselect", user, "", "");
            ds = obj.GetDetails("proc_aml_customer", "AML", "EMPNAMEselect", user, "", "");
            if (ds.Tables[0].Rows.Count > 0)
                {
                    str = ds.Tables[0].Rows[0][0].ToString();
                }
           
            string result = str;
            uname.InnerHtml = result;
            uname1.InnerHtml = result;
            //lbltime.InnerHtml = DateTime.Now.ToString("hh:mm:ss tt");
            //uname.InnerHtml = dtusername.Rows[0][2].ToString();
            //obj = new ITSM_Service.ITSMClient();
            obj = new Aml_Customer_Services.Icust_servicesClient();
            DataTable dt1 = new DataTable();
            
            dt1 = obj.GetDetails("proc_aml_customer", "AML", "MENUACCESS", user, "MAIN_MENU", mid).Tables[0];
            if (dt1.Rows.Count > 0)
            {
                rpt_mainmenu.DataSource = dt1;
                rpt_mainmenu.DataBind();
            }
            //Image1.ImageUrl = "ShowImage.ashx?id=" + user;
            //Image2.ImageUrl = "ShowImage.ashx?id=" + user;
            //Image3.ImageUrl = "ShowImage.ashx?id=" + user;
        }

        protected void rpt_mainmenu_ItemDataBound(object sender, RepeaterItemEventArgs e)
        {

            if (e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
            {
                //string MenuId = (e.Item.FindControl("MenuId") as HiddenField).Value;
                int MenuId = Convert.ToInt32(DataBinder.Eval(e.Item.DataItem, "ID"));
                Repeater rpt_submenu = e.Item.FindControl("rpt_submenu") as Repeater;
                string user = Session["username"].ToString();
                DataTable dt = new DataTable();
                dt = obj.GetDetails("proc_aml_customer", "AML", "MENUACCESS", user, "SUBMENU", Convert.ToString(MenuId)).Tables[0];
                if (dt.Rows.Count > 0)
                {
                    rpt_submenu.DataSource = dt;
                    rpt_submenu.DataBind();
                }

            }
        }
        //protected void rpt_submenu_ItemDataBound(object sender, RepeaterItemEventArgs e)
        //{
        //    if (e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
        //    {
        //        //string MenuId = (e.Item.FindControl("MenuId") as HiddenField).Value;
        //        int MenuId = Convert.ToInt32(DataBinder.Eval(e.Item.DataItem, "ID"));
        //        Repeater rpt_submenusecond = e.Item.FindControl("rpt_submenusecond") as Repeater;
        //        string user = Session["username"].ToString();
        //        DataTable dt = new DataTable();
        //        dt = obj.TreasuryFillData("MENUACCESS", user, "SUBMENU1", Convert.ToString(MenuId)).Tables[0];
        //        if (dt.Rows.Count > 0)
        //        {
        //            rpt_submenusecond.DataSource = dt;
        //            rpt_submenusecond.DataBind();
        //        }

        //    }

        //}
    }
}