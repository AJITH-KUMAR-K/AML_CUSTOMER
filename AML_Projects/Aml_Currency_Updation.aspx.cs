using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.IO;
using System.Drawing;
using System.Drawing.Imaging;
using System.Diagnostics;
using System.Web.Services;
using System.Data;


namespace AML_Projects
{
    public partial class Aml_Currency_Updation : System.Web.UI.Page
    {


 
        protected void Page_Load(object sender, EventArgs e)
        {


            if (string.IsNullOrEmpty(Session["username"] as string))
            {
                Response.Redirect("~/Login.aspx");
            }
            else
            {
               
                DataSet ds = new DataSet();
                string UserName = Session["username"].ToString();
                string BranchId = Session["branch_id"].ToString();
                string FirmID = Session["firm_id"].ToString();
                hdvUserID.Value = UserName;
                hdBranchId.Value = BranchId;
                Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
         
                //ds = obj.GetDetails("proc_aml_customer", "AML", "AML_CURRENCY", "branch_details", "", BranchId);
                //if (ds.Tables[0].Rows.Count <= 0)
                //{
                //    Response.Redirect("~/WebFormerror.aspx");
                //    //Response.Write("You are not authorized to view this page");
                //    //return;
                //}
            }

            //if (!IsPostBack)
           
            //{
            //    ContentPlaceHolder1_entityName.Text = "Manappuram Finance Ltd";
            //}
        }


        [WebMethod(EnableSession = true)]

        public static string display_details(string Query, string indata)

        {
            DataSet ds;
            string str = "";
         
            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
            ds = obj.GetDetails("proc_aml_customer", "AML", "AML_CURRENCY", Query, "", indata);
        
            if (ds.Tables.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    //str = str + dr[0] + "^" + dr[1] + "^" + dr[2] + "^" + dr[3] + "^" + dr[4] + "^" + dr[5] + "^" + dr[6] + "^" + dr[7] + "^" + dr[8];
                    str = str + dr[0] + "^" + dr[1] + "^" + dr[2] + "^" + dr[3]+ "^" + dr[4] + "^" + dr[5] +"^"+ dr[6] + "^" + dr[7] + "^" + dr[8] + "^" + dr[9];

                }

            }
            return str;
        }


        [WebMethod(EnableSession = true)]

        public static string cust_details(string Query, string indata)

        {
            DataSet ds;
            string str = "";

            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
            ds = obj.GetDetails("proc_aml_customer", "AML", "AML_CURRENCY", Query, "", indata);

            if (ds.Tables.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                  
                    str = str + dr[0];

                }

            }
            return str;
        }

    


    }
}









