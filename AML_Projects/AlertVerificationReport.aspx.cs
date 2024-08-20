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
    public partial class AlertVerificationReport : System.Web.UI.Page
    {
        string usr, brid;
        protected void Page_Load(object sender, EventArgs e)
        {
            usr = Session["username"].ToString();
            this.hdvUserID.Value = usr;
            brid = Session["branch_id"].ToString();
            this.hdvBranchID.Value = brid;
            string FirmID = Session["firm_id"].ToString();
            this.hdvFirmID.Value = FirmID;
        }

        [WebMethod(EnableSession = true)]
        public static string getFillData(string data, string flag)
        {
            string header = "";
            try
            {
                DataSet ds, ds1 = new DataSet();

                Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();

                ds = obj.GetDetails("proc_aml_customer", flag, data, "", "", "");

               
                header = DataTableToHTMLTable(ds.Tables[0]);



                
            }

            catch (Exception e)
            {
                header = e.ToString();
            }

            return header.ToString();
        }


        private static string DataTableToHTMLTable(DataTable inTable)
        {

            DataTable dt = inTable;

            // Create a StringBuilder object to store the table header.
            StringBuilder header = new StringBuilder();

            // Add the table header to the StringBuilder object.
            header.Append("<thead class='bg-primary text-white' style='text-align:center';><tr>");
            header.AppendFormat("<th data-sortable='true'>S.no</th>");
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

    }
}