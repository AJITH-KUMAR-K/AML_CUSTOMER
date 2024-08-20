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
using System.Diagnostics;


namespace AML_Projects
{
    public partial class AML_Sanction_Report : System.Web.UI.Page
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
                //aml_customer_services.Icust_servicesClient obj = new aml_customer_services.Icust_servicesClient();
                Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();

                ds = obj.GetDetails("proc_aml_customer", "AML", "AML_EXCEL", "AUTH", "", UserName);
                if (ds.Tables[0].Rows.Count <= 0)
                {
                    Response.Redirect("~/Err_Page.aspx");
                   

                }
            }
        }
        [WebMethod(EnableSession = true)]

        public static string Reportview(string input)
        {
            DataSet ds, ds1 = new DataSet();
            //aml_customer_services.Icust_servicesClient obj = new aml_customer_services.Icust_servicesClient();
            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();

            string s, header;
            ds = obj.GetDetails("proc_aml_customer", "AML", "AML_EXCEL", "EXCELReport", "", input);



            if (ds.Tables[0].Rows.Count > 0)

            {

                s = ds.Tables[0].Rows[0][0].ToString();
                header = AML_Sanction_Report.DataTableToHTMLTable(ds.Tables[0]);
               

            }

            else


            {
                header = "111";

            }

            
            return header;


            // DataTableToHTMLTable(ds.Tables[0]);
        }
        [WebMethod(EnableSession = true)]
        public static string Reportview1(string input)
        {
            DataSet ds, ds1 = new DataSet();
            //CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            //aml_customer_services.Icust_servicesClient obj = new aml_customer_services.Icust_servicesClient();
            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
            
            string s, header;
            //ds = obj.CommonSelect("AML_EXCEL_UPLOAD", "A", input, "");//lblTitle      
            ds = obj.GetDetails("proc_aml_customer", "AML", "AML_EXCEL", "TrrReport", "", input);



            if (ds.Tables[0].Rows.Count > 0)

            {

                s = ds.Tables[0].Rows[0][0].ToString();
                header = AML_Sanction_Report.DataTableToHTMLTable(ds.Tables[0]);
                //if (s == "111")
                //{

            }

            else


            {
                header = "111";

            }

            //    return s;
            //}



            return header;


            // DataTableToHTMLTable(ds.Tables[0]);
        }

        [WebMethod(EnableSession = true)]
        public static string Reportview2(string input)
        {
            DataSet ds, ds1 = new DataSet();
            //CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            //aml_customer_services.Icust_servicesClient obj = new aml_customer_services.Icust_servicesClient();
            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();

            string s, header;
            //ds = obj.CommonSelect("AML_EXCEL_UPLOAD", "A", input, "");//lblTitle      
            ds = obj.GetDetails("proc_aml_customer", "AML", "AML_EXCEL", "BLReport", "", input);



            if (ds.Tables[0].Rows.Count > 0)

            {

                s = ds.Tables[0].Rows[0][0].ToString();
                header = AML_Sanction_Report.DataTableToHTMLTable(ds.Tables[0]);
                //if (s == "111")
                //{

            }

            else


            {
                header = "111";

            }

            //    return s;
            //}



            return header;


            // DataTableToHTMLTable(ds.Tables[0]);
        }


        private static string DataTableToHTMLTable(DataTable inTable)
        {

            DataTable dt = inTable;

            // Create a StringBuilder object to store the table header.
            StringBuilder header = new StringBuilder();

            // Add the table header to the StringBuilder object.
            header.Append("<thead class='bg-primary text-white' style='text-align:center';><tr>");
            header.AppendFormat("<th data-sortable='true'>S.NO</th>");
            foreach (DataColumn column in dt.Columns)
            {

                header.AppendFormat("<th data-sortable='true'>{0}</th>", column.ColumnName);
            }
            header.Append("</tr></thead>");

            // Create a StringBuilder object to store the table body.
            StringBuilder body = new StringBuilder();

            // Add the table body to the StringBuilder object.
            int i = 1;
            foreach (DataRow row in dt.Rows)
            {
                body.Append("<tr>");
                body.AppendFormat("<td>{0}</td>", i++);
                foreach (DataColumn column in dt.Columns)
                {
                    object value = row[column.ColumnName];

                    body.AppendFormat("<td>{0}</td>", value);

                }
                body.Append("</tr>");
            }

            // Return the table.
            return header.ToString() + body.ToString();

        }

        public class dddate
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        [WebMethod(EnableSession = true)]
        public static List<dddate> getdate(string input)
        {
            List<dddate> Getdate = new List<dddate>();
            DataSet ds, ds1 = new DataSet();
            //DataTable ds = new DataTable();

            //CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            //aml_customer_services.Icust_servicesClient obj = new aml_customer_services.Icust_servicesClient();
           Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();

            ds = obj.GetDetails("proc_aml_customer", "AML", "AML_EXCEL", "QTDate", "", input);
            //ds = obj.CommonSelect("cust", "STATE", input, "");
            try
            {

                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)


                            Getdate.Add(new dddate()
                            {
                                id = dr[0].ToString(),
                                name = dr[1].ToString()
                            });
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return Getdate;
        }


        [WebMethod(EnableSession = true)]
        public static string Reportview3(string input)
        {
            DataSet ds, ds1 = new DataSet();
            //CommonService.CommonServiceClient obj = new CommonService.CommonServiceClient();
            //aml_customer_services.Icust_servicesClient obj = new aml_customer_services.Icust_servicesClient();
            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();

            string s, header;
            //ds = obj.CommonSelect("AML_EXCEL_UPLOAD", "A", input, "");//lblTitle      
            ds = obj.GetDetails("proc_aml_customer", "AML", "AML_EXCEL", "QTReport", "", input);



            if (ds.Tables[0].Rows.Count > 0)

            {

                s = ds.Tables[0].Rows[0][0].ToString();
                header = AML_Sanction_Report.DataTableToHTMLTable(ds.Tables[0]);
                //if (s == "111")
                //{

            }

            else


            {
                header = "111";

            }

            //    return s;
            //}



            return header;


            // DataTableToHTMLTable(ds.Tables[0]);
        }



    }
}