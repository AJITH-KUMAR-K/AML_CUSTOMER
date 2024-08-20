using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Text;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

namespace AML_Projects
{
    public partial class Exel_export_sanction : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(Session["username"] as string))
            {
                Response.Redirect("~/Login.aspx");
            }
            else
            {
                string UserName = Session["username"].ToString();
                string BranchId = Session["branch_id"].ToString();
                this.hdvUserID.Value = UserName;
                this.hdBranchId.Value = BranchId;
                DataSet ds = new DataSet();
            //    aml_customer_services.Icust_servicesClient obj = new aml_customer_services.Icust_servicesClient();
             Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();

                ds = obj.GetDetails("proc_aml_customer", "AML", "AML_EXCEL", "AUTH", "", UserName);
                if (ds.Tables[0].Rows.Count <= 0)
                {
                   
                    Response.Redirect("~/Err_Page.aspx");

                }


            }
        }
        [WebMethod(EnableSession = true)]
        public static string Confirm(string data)
        {
            string s = "";
            
            //aml_customer_services.Icust_servicesClient obj = new aml_customer_services.Icust_servicesClient();
           Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();

            DataSet ds = new DataSet();
            ds = obj.GetDetails("proc_aml_customer", "AML", "AML_EXCEL", "EXCELUPLD", "", data);
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    s = ds.Tables[0].Rows[0][0].ToString();
                }
            }
            catch (Exception e)
            {
                s = e.Message;
            }

            return s;
        }

        [WebMethod(EnableSession = true)]
        public static string Confirm2(string data)
        {
            string s = "";

           // aml_customer_services.Icust_servicesClient obj = new aml_customer_services.Icust_servicesClient();
            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();

            DataSet ds = new DataSet();
            ds = obj.GetDetails("proc_aml_customer", "AML", "AML_EXCEL", "BLACKIST", "", data);
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    s = ds.Tables[0].Rows[0][0].ToString();
                }
            }
            catch (Exception e)
            {
                s = e.Message;
            }

            return s;
        }
    }
}