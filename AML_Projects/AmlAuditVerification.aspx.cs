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
    public partial class AmlAuditVerification : System.Web.UI.Page
    {
        public static string usr = "";
        public static string usrName = "";
        public static string brid = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            usr = Session["username"].ToString();
            usrName = Session["user_name"].ToString();
            brid = Session["branch_id"].ToString();
            this.hdBranchId.Value = brid;

            this.hdUserId.Value = usr;
            this.hdUserName.Value = usrName.ToString();

            this.DisplayName.InnerText = usrName;
            this.DisplayEmpCode.InnerText = usr;
        }

        [WebMethod(EnableSession = true)]
        public static string Access(string usr_ID)
        {
            DataSet ds;
            string str = "";

            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
            ds = obj.GetDetails("proc_aml_audit_verify", "11", usr_ID, "", "", "");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {

                    str = Convert.ToString(ds.Tables[0].Rows[0][0]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][1]);


                }

            }
            catch (Exception e)
            {
                str = e.Message;
            }

            return str;
        }
        public class AMLRequest
        {
            public string id { get; set; }
            public string name { get; set; }

        }
        [WebMethod(EnableSession = true)]
        public static List<AMLRequest> DropFillData(string QueryString, string input, string flag)
        {
            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
            List<AMLRequest> gtreq = new List<AMLRequest>();
            DataSet ds = new DataSet();
            string str="";
            //ds = obj.GetDetails("proc_aml_customer", "AML", "AML_VERIFY", flag, QueryString, input);
            ds = obj.GetDetails("proc_aml_audit_verify", flag, "", "", QueryString, input);

            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtreq.Add(new AMLRequest()
                            {
                                id = dr[0].ToString(),
                                name = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {
                str = ex.Message;
            }
            return gtreq;
        }

        [WebMethod(EnableSession = true)]
        public static string getFillData(string QueryString, string data,string flag)
        {
            string header = "";
            try
            {
                DataSet ds, ds1 = new DataSet();

                Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
                //ds= obj.GetDetails("proc_aml_customer", "AML", "AML_VERIFY", "4", QueryString, data);
                ds = obj.GetDetails("proc_aml_audit_verify", flag, "", "", QueryString, data);


                header = AmlAuditVerification.DataTableToHTMLTable(ds.Tables[0]);



                DataTableToHTMLTable(ds.Tables[0]);
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
        [WebMethod(EnableSession = true)]
        public static string getdoc(string input, string flag)
        {
            string filecexist = "";
            DataTable dt1 = new DataTable();
            DataRow[] dr;
            string ExtensionName = "";
            string CustDocName = "";
            byte[] Doc = new byte[0];
            byte[] KYCPhoto = new byte[0];

            DataSet dt, ds = new DataSet();

            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
            //dt = obj.GetDetails("proc_aml_customer", "AML", "AML_VERIFY", flag, input,"");
            dt = obj.GetDetails("proc_aml_audit_verify", flag, "", "", input, "");

            try
            {
                if (dt.Tables[0].Rows.Count > 0)
                {
                    if (dt.Tables[0].Rows[0][0] != DBNull.Value)
                    {

                        Doc = (byte[])dt.Tables[0].Rows[0][0];

                        ExtensionName = GetFileExtensionFromBytes(Doc);

                        if (ExtensionName == ".tif")
                        {
                            Doc = ConvertToJpg(Doc);

                            ExtensionName = ".jpg";
                        }

                        string CustDocNameWithExtension = CustDocName + input + ExtensionName;

                        if (Doc.Length > 0)
                        {
                            filecexist = "1" + "^" + CustDocNameWithExtension;
                            AmlAuditVerification cc = new AmlAuditVerification();
                            cc.DownloadFile(CustDocNameWithExtension, Doc);

                        }
                        else
                        {
                            filecexist = "0";
                        }
                    }

                    //byte[] data_filename = Encoding.ASCII.GetBytes(ss);
                }
                else
                {
                    filecexist = "0";
                }
            }

            catch (Exception e)
            {
                filecexist = "0";
            }
            return filecexist;
        }
        public void DownloadFile(string fn, byte[] s)
        {
            string FileName = fn;

            System.Web.HttpResponse Response = System.Web.HttpContext.Current.Response;
            using (Stream file = File.OpenWrite(Server.MapPath("~/IMAGES/" + fn)))
            {
                file.Write(s, 0, s.Length);
            }
        }

        [WebMethod(EnableSession = true)]
        public static string deleteDownloadFile(string input)
        {
            string fname = input;
            AmlAuditVerification d = new AmlAuditVerification();
            d.filedelete(fname);
            return "File Deleted Successfully";
        }

        public void filedelete(string fname)
        {
            File.Delete(Server.MapPath("~/IMAGES/" + fname));
        }
        static string GetFileExtensionFromBytes(byte[] bytes)
        {
            if (bytes.Length < 4)
                throw new ArgumentException("Byte array should contain at least 4 bytes.");

            if (IsJpeg(bytes))
                return ".jpg";
            else if (IsPng(bytes))
                return ".png";
            else if (IsGif(bytes))
                return ".gif";
            else if (IsPdf(bytes))
                return ".pdf";
            else if (IsTiff(bytes))
                return ".tif";
            // Add more formats as needed

            return ".unknown"; // If the format is not recognized
        }

        static bool IsJpeg(byte[] bytes)
        {
            // JPEG files start with the following bytes: FF D8 FF
            return bytes[0] == 0xFF && bytes[1] == 0xD8 && bytes[2] == 0xFF;
        }

        static bool IsPng(byte[] bytes)
        {
            // PNG files start with the following bytes: 89 50 4E 47 0D 0A 1A 0A
            return bytes[0] == 0x89 && bytes[1] == 0x50 && bytes[2] == 0x4E && bytes[3] == 0x47;
        }

        static bool IsGif(byte[] bytes)
        {
            // GIF files start with the following bytes: 47 49 46 38
            return bytes[0] == 0x47 && bytes[1] == 0x49 && bytes[2] == 0x46 && bytes[3] == 0x38;
        }

        static bool IsPdf(byte[] bytes)
        {
            // PDF files start with the following bytes: 25 50 44 46 (hexadecimal) => %PDF (ASCII)
            return bytes[0] == 0x25 && bytes[1] == 0x50 && bytes[2] == 0x44 && bytes[3] == 0x46;
        }

        static bool IsTiff(byte[] bytes)
        {
            // TIFF files start with the following bytes: 49 49 2A 00 (Intel) or 4D 4D 00 2A (Motorola)
            return bytes[0] == 0x49 && bytes[1] == 0x49 && bytes[2] == 0x2A && bytes[3] == 0x00;
        }



        public static byte[] ConvertToJpg(byte[] bytes)
        {
            using (var ms = new MemoryStream(bytes))
            {
                var image = new Bitmap(ms);
                var ms2 = new MemoryStream();
                image.Save(ms2, ImageFormat.Jpeg);
                return ms2.ToArray();
            }
        }
        [WebMethod(EnableSession = true)]

        public static string CustFillData(string input, string data,string flag)
        {
            DataSet ds;
            string str = "";

            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
            //ds = obj.GetDetails("proc_aml_customer", "AML", "AML_VERIFY", "9", input, data);
            ds = obj.GetDetails("proc_aml_audit_verify", "9", flag, "", input, data);

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = Convert.ToString(ds.Tables[0].Rows[0][0]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][1]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][2]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][3]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][4]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][5]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][6]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][7]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][8]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][9]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][10]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][11]) + "~" +
                           Convert.ToString(ds.Tables[0].Rows[0][12]) + "~" +
                            Convert.ToString(ds.Tables[0].Rows[0][13]) + "~" +
                             Convert.ToString(ds.Tables[0].Rows[0][14]) + "~" +
                              Convert.ToString(ds.Tables[0].Rows[0][15]) + "~" +
                            Convert.ToString(ds.Tables[0].Rows[0][16]) + "~" +
                             Convert.ToString(ds.Tables[0].Rows[0][17]) + "~" +
                              Convert.ToString(ds.Tables[0].Rows[0][18]) + "~" +
                            Convert.ToString(ds.Tables[0].Rows[0][19]) + "~" +
                             Convert.ToString(ds.Tables[0].Rows[0][20]) ;

                }
            }
            catch (Exception e)
            {
                str = e.Message;
            }
            return str;
        }

        [WebMethod(EnableSession = true)]

        public static string CustFillDatal2l3(string input, string data,string flag)
        {
            DataSet ds;
            string str = "";

            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
            //ds = obj.GetDetails("proc_aml_customer", "AML", "AML_VERIFY", "9", input, data);
            ds = obj.GetDetails("proc_aml_audit_verify", "9", flag, "", input, data);

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = Convert.ToString(ds.Tables[0].Rows[0][0]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][1]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][2]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][3]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][4]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][5]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][6]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][7]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][8]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][9]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][10]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][11]) + "~" +
                           Convert.ToString(ds.Tables[0].Rows[0][12]) + "~" +
                            Convert.ToString(ds.Tables[0].Rows[0][13]) + "~" +
                             Convert.ToString(ds.Tables[0].Rows[0][14]) + "~" +
                              Convert.ToString(ds.Tables[0].Rows[0][15]) + "~" +
                            Convert.ToString(ds.Tables[0].Rows[0][16]) + "~" +
                             Convert.ToString(ds.Tables[0].Rows[0][17]) + "~" +
                             Convert.ToString(ds.Tables[0].Rows[0][18]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][19]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][20]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][21]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][22]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][23]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][24]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][25]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][26]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][27]) + "~" +
                          Convert.ToString(ds.Tables[0].Rows[0][28]);
                }
            }
            catch (Exception e)
            {
                str = e.Message;
            }
            return str;
        }

        [WebMethod(EnableSession = true)]

        public static string fetchFillData(string input,string flag)
        {
            DataSet ds;
            string str = "";

            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
            //ds = obj.GetDetails("proc_aml_customer", "AML", "AML_VERIFY", "9", input, data);
            ds = obj.GetDetails("proc_aml_audit_verify", flag, input, "", "", "");

            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = Convert.ToString(ds.Tables[0].Rows[0][0]);

                }
            }
            catch (Exception e)
            {
                str = e.Message;
            }
            return str;
        }

        [WebMethod(EnableSession = true)]

        public static string SaveData(string input, string Data1, string flag, string Data2, string flag2)
        {
            DataSet ds;
            string str = "";

            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
            ds = obj.GetDetails("proc_aml_audit_verify", flag, Data1, input, Data2, flag2);


            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = Convert.ToString(ds.Tables[0].Rows[0][0]);

                }
            }
            catch (Exception e)
            {
                str = e.Message;
            }
            return str;
        }

        [WebMethod(EnableSession = true)]

        public static string ReAssign( string flag, string Data2, string flag2)
        {
            DataSet ds;
            string str = "";

            Aml_Customer_Services.Icust_servicesClient obj = new Aml_Customer_Services.Icust_servicesClient();
            ds = obj.GetDetails("proc_aml_audit_verify", flag, Data2, flag2, "", "");


            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = Convert.ToString(ds.Tables[0].Rows[0][0]);

                }
            }
            catch (Exception e)
            {
                str = e.Message;
            }
            return str;
        }

    }
}