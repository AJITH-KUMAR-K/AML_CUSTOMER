using System.Collections.Generic;
using System.Linq;
using System.Web.Services;
using System.Web.Configuration;
using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Data.SqlClient;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace AML_Projects
{
    public partial class ServiceRequest : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string usr, bid, fimid, username;
            if (string.IsNullOrEmpty(Session["username"] as string))
            {
                Response.Redirect("SessionExpired.aspx");
            }
            else
            {
                username = Session["user_name"].ToString();
                usr = Session["username"].ToString();
                bid = Session["branch_id"].ToString();
                fimid = Session["firm_id"].ToString();
                this.hdUserId.Value = usr;
                this.hdBrid.Value = bid;
                this.hdFirmId.Value = fimid;
                this.hduname.Value = username;
                //hdPag.Value = Request.QueryString["pag"];
            }
        }


        // -------------------mail------------------

        [WebMethod]
        public static string saveprofile(string Empcod, string Input)
        {

            try
            {
                //solution_infini_flag.mana.SMSTool sms = new solution_infini_flag.mana.SMSTool();
                //BALCon op = new BALCon();
                DataTable dT, dT3, dT4, dT5 = new DataTable();
                string AH_Mob = "";
                string msgid = "";




                SmtpClient server = new SmtpClient("smtp.office365.com");
                server.Port = 587;
                server.EnableSsl = true;
                server.UseDefaultCredentials = false;
                server.Credentials = new System.Net.NetworkCredential("helpdesk@manappuram.com", "SDemail@123", "smtp.office365.com");
                server.Timeout = 5000;
                server.TargetName = "STARTTLS/smtp.office365.com";
                server.DeliveryMethod = SmtpDeliveryMethod.Network;
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress("helpdesk@manappuram.com");


                //  ----------------------------------------------mail body creation----------------------------------------------

                //string bdy = "Dear Area Head, </br></br>Customer Mr." + HttpContext.Current.Session["cusname"].ToString() + " (" + HttpContext.Current.Session["cid"].ToString() + ") from " + dT5.Rows[0][4].ToString() + ". Branch submitted a mobile number modification request. Kindly process same at the earliest.</br></br>Sales Team HO";
                //string bdy = input;
                mail.Subject = "A ticket has been raised in your employee code please check";
                mail.IsBodyHtml = true;
                mail.Body = Input;
                System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls | System.Net.SecurityProtocolType.Tls11 | System.Net.SecurityProtocolType.Tls12;
                mail.To.Add(Empcod.Trim() + "@manappuram.com");
                mail.IsBodyHtml = true;
                server.Send(mail);


            }
            catch (Exception ex)
            {

            }
            return "success";
        }







        //-----------------------mail-----------------




        //------------------mail for approval-------------


        [WebMethod]
        public static string sendmailapproval(string Ticketno)
        {

            DataSet ds;
            string str = "";
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            ds = obj.GetDetails("proc_ITSM", "ITSM", "apprvPerMil", Ticketno, "", "");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = ds.Tables[0].Rows[0][0].ToString();
                }
            }
            catch (Exception e)
            {

            }





            try
            {
                //solution_infini_flag.mana.SMSTool sms = new solution_infini_flag.mana.SMSTool();
                //BALCon op = new BALCon();
                DataTable dT, dT3, dT4, dT5 = new DataTable();
                string AH_Mob = "";
                string msgid = "";




                SmtpClient server = new SmtpClient("smtp.office365.com");
                server.Port = 587;
                server.EnableSsl = true;
                server.UseDefaultCredentials = false;
                server.Credentials = new System.Net.NetworkCredential("helpdesk@manappuram.com", "SDemail@123", "smtp.office365.com");
                server.Timeout = 5000;
                server.TargetName = "STARTTLS/smtp.office365.com";
                server.DeliveryMethod = SmtpDeliveryMethod.Network;
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress("helpdesk@manappuram.com");


                //  -------------------oo--------------mail body creation--------------oo--------------------------------

                //string bdy = "Dear Area Head, </br></br>Customer Mr." + HttpContext.Current.Session["cusname"].ToString() + " (" + HttpContext.Current.Session["cid"].ToString() + ") from " + dT5.Rows[0][4].ToString() + ". Branch submitted a mobile number modification request. Kindly process same at the earliest.</br></br>Sales Team HO";
                //string bdy = input;
                mail.Subject = "A Ticket Has Been Raised In Your Employee Code Please Check";
                mail.IsBodyHtml = true;
                mail.Body = "A Ticket:" + Ticketno + " Has Been Raised In Your Employee Code.You Can Check Ticket Details Through. ApplicationPortal-->ITSM-->Ticket Management-->My Tickets";
                System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls | System.Net.SecurityProtocolType.Tls11 | System.Net.SecurityProtocolType.Tls12;
                mail.To.Add(str.Trim() + "@manappuram.com");
                mail.IsBodyHtml = true;
                server.Send(mail);


            }
            catch (Exception ex)
            {

            }
            return "success";
        }





        //------------------mail for approval--------------











        public class getSt
        {
            public string Id { get; set; }
            public string Name { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<getSt> Getstatusup(string QueryString)
        {
            ITSM_Service.ITSMClient ob = new ITSM_Service.ITSMClient();

            List<getSt> Status = new List<getSt>();
            DataSet ds = new DataSet();
            ds = ob.GetDetails("proc_ITSM", "ITSM", "GetStatus", "", "", "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            Status.Add(new getSt()
                            {
                                Id = dr[0].ToString(),
                                Name = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return Status;
        }
        //---------user asset---------

        public class getUsrAsst
        {
            public string Id { get; set; }
            public string Name { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<getUsrAsst> GetusrAssets(string QueryString)
        {
            ITSM_Service.ITSMClient ob = new ITSM_Service.ITSMClient();

            List<getUsrAsst> Status = new List<getUsrAsst>();
            DataSet ds = new DataSet();
            ds = ob.GetDetails("proc_ITSM", "ITSM", "UserAsset", QueryString, "", "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            Status.Add(new getUsrAsst()
                            {
                                Id = dr[0].ToString(),
                                Name = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return Status;
        }
        //---------------Asset details------------------------
        [WebMethod(EnableSession = true)]
        public static string SelectedAsstDTL(string QueryString)
        {
            DataSet ds;
            string str = "";
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            ds = obj.GetDetails("proc_ITSM", "ITSM", "SelectAsstDetails", QueryString, "", "");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = ds.Tables[0].Rows[0][0].ToString() + "^" + Convert.ToString(ds.Tables[0].Rows[0][1]) + "^" + Convert.ToString(ds.Tables[0].Rows[0][2]);
                }
            }
            catch (Exception e)
            {

            }
            return str;
        }

        //-------------------------------------------------------------
        public class getSourceup
        {
            public string SId { get; set; }
            public string SName { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<getSourceup> getSourceData(string QueryString)
        {
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            List<getSourceup> gtsource = new List<getSourceup>();
            DataSet ds = new DataSet();
            ds = obj.GetDetails("proc_ITSM", "ITSM", "GetSource", "", "", "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtsource.Add(new getSourceup()
                            {
                                SId = dr[0].ToString(),
                                SName = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtsource;
        }


        public class getreqtype
        {
            public string ReqId { get; set; }
            public string ReqName { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<getreqtype> getRequesttype(string QueryString)
        {
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            List<getreqtype> gtreq = new List<getreqtype>();
            DataSet ds = new DataSet();
            ds = obj.GetDetails("proc_ITSM", "ITSM", QueryString, "", "", "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtreq.Add(new getreqtype()
                            {
                                ReqId = dr[0].ToString(),
                                ReqName = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtreq;
        }


        public class getreqtypesub
        {
            public string ReqId { get; set; }
            public string ReqName { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<getreqtypesub> getRequesttypesub(string QueryString, string subQueryString)
        {
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            List<getreqtypesub> gtreq = new List<getreqtypesub>();
            DataSet ds = new DataSet();
            ds = obj.GetDetails("proc_ITSM", "ITSM", QueryString, subQueryString, "", "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtreq.Add(new getreqtypesub()
                            {
                                ReqId = dr[0].ToString(),
                                ReqName = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtreq;
        }




        public class geimct
        {
            public string ImpctId { get; set; }
            public string ImpctName { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<geimct> getImpact(string QueryString)
        {
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            List<geimct> gtimt = new List<geimct>();
            DataSet ds = new DataSet();
            ds = obj.GetDetails("proc_ITSM", "ITSM", "GetImpact", "", "", "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtimt.Add(new geimct()
                            {
                                ImpctId = dr[0].ToString(),
                                ImpctName = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtimt;
        }


        public class getsev
        {
            public string SevId { get; set; }
            public string SevName { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<getsev> getSeverity(string QueryString)
        {
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            List<getsev> gtser = new List<getsev>();
            DataSet ds = new DataSet();
            ds = obj.GetDetails("proc_ITSM", "ITSM", "GetSeverity", "", "", "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtser.Add(new getsev()
                            {
                                SevId = dr[0].ToString(),
                                SevName = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtser;
        }
        public class geturgency
        {
            public string PrioId { get; set; }
            public string PrioName { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<geturgency> getUrgencyprio(string QueryString)
        {
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            List<geturgency> gtur = new List<geturgency>();
            DataSet ds = new DataSet();
            ds = obj.GetDetails("proc_ITSM", "ITSM", "GetUrgency", "", "", "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtur.Add(new geturgency()
                            {
                                PrioId = dr[0].ToString(),
                                PrioName = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtur;
        }

        public class getINCat
        {
            public string INCId { get; set; }
            public string INCName { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<getINCat> getINCategory(string QueryString)
        {
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            List<getINCat> gtinc = new List<getINCat>();
            DataSet ds = new DataSet();
            ds = obj.GetDetails("proc_ITSM", "ITSM", "GetINCategory", "", "", "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtinc.Add(new getINCat()
                            {
                                INCId = dr[0].ToString(),
                                INCName = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtinc;
        }

        public class getsubc
        {
            public string INSubId { get; set; }
            public string INSubName { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<getsubc> getSubCategory(string QueryString, string input)
        {
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            List<getsubc> gtSUB = new List<getsubc>();
            DataSet ds = new DataSet();
            ds = obj.GetDetails("proc_ITSM", "ITSM", "GetINsubCategory", input, "", "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtSUB.Add(new getsubc()
                            {
                                INSubId = dr[0].ToString(),
                                INSubName = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtSUB;
        }



        [WebMethod(EnableSession = true)]
        public static string getFillempdetails(string QueryString, string input)
        {
            DataSet ds;
            string str = "";
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            ds = obj.GetDetails("proc_ITSM", "ITSM", QueryString, input, "", "");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = ds.Tables[0].Rows[0][0].ToString() + "^" + Convert.ToString(ds.Tables[0].Rows[0][1]) + "^" + Convert.ToString(ds.Tables[0].Rows[0][2]) + "^" + ds.Tables[0].Rows[0][3].ToString();
                }
            }
            catch (Exception e)
            {

            }
            return str;
        }

        [WebMethod(EnableSession = true)]
        public static string getbranchdt(string QueryString, string input)
        {
            DataSet ds;
            string str = "";
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            ds = obj.GetDetails("proc_ITSM", "ITSM", QueryString, input, "", "");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = ds.Tables[0].Rows[0][0].ToString() + "^" + Convert.ToString(ds.Tables[0].Rows[0][1]) + "^" + Convert.ToString(ds.Tables[0].Rows[0][2]) + "^" + Convert.ToString(ds.Tables[0].Rows[0][3]) + "^" + Convert.ToString(ds.Tables[0].Rows[0][4]) + "^" + Convert.ToString(ds.Tables[0].Rows[0][5]);
                }
            }
            catch (Exception e)
            {

            }
            return str;
        }

        [WebMethod(EnableSession = true)]
        public static string getticketid(string QueryString)
        {
            DataSet ds;
            string str = "";
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            ds = obj.GetDetails("proc_ITSM", "ITSM", QueryString, "", "", "");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = ds.Tables[0].Rows[0][0].ToString();
                }
            }
            catch (Exception e)
            {

            }
            return str;
        }



        [WebMethod(EnableSession = true)]
        public static string SrApprove(string QueryString, string InputString)
        {
            DataSet ds;
            string str = "";
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            ds = obj.GetDetails("PROC_ITSM_approve", "ITSM", QueryString, InputString, "", "");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = ds.Tables[0].Rows[0][0].ToString();
                }
            }
            catch (Exception e)
            {

            }
            return str;
        }





        [WebMethod(EnableSession = true)]
        public static string Addincidentorsr(string input)
        {
            DataSet ds;
            string str = "";
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            ds = obj.GetDetails("proc_ITSM", "ITSM", "ADDINCIDENT", input, "", "");
            if (ds.Tables[0].Rows.Count > 0)
            {
                str = ds.Tables[0].Rows[0][0].ToString();
            }
            return str;
        }

        [WebMethod(EnableSession = true)]
        public static string AddSR(string input)
        {
            DataSet ds;
            string str = "";
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            ds = obj.GetDetails("proc_ITSM", "ITSM", "ADDSR", input, "", "");
            if (ds.Tables[0].Rows.Count > 0)
            {
                str = ds.Tables[0].Rows[0][0].ToString();
            }
            return str;
        }


        [WebMethod(EnableSession = true)]
        public static string AddSrNoAttach(string input, string User)
        {
            DataSet ds;
            string str = "";
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            ds = obj.GetDetails("proc_ITSM", "ITSM", "insertSRtickNoAtt", input, "", "");
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    str = ds.Tables[0].Rows[0][0].ToString();
                }
            }
            catch (Exception e)
            {



            }
            //  return str;

            //try
            //{
            //    //solution_infini_flag.mana.SMSTool sms = new solution_infini_flag.mana.SMSTool();
            //    //BALCon op = new BALCon();
            //    DataTable dT, dT3, dT4, dT5 = new DataTable();
            //    string AH_Mob = "";
            //    string msgid = "";




            //    SmtpClient server = new SmtpClient("smtp.office365.com");
            //    server.Port = 587;
            //    server.EnableSsl = true;
            //    server.UseDefaultCredentials = false;
            //    server.Credentials = new System.Net.NetworkCredential("helpdesk@manappuram.com", "SDemail@123", "smtp.office365.com");
            //    server.Timeout = 5000;
            //    server.TargetName = "STARTTLS/smtp.office365.com";
            //    server.DeliveryMethod = SmtpDeliveryMethod.Network;
            //    MailMessage mail = new MailMessage();
            //    mail.From = new MailAddress("helpdesk@manappuram.com");


            //    //  -------------------oo--------------mail body creation--------------oo--------------------------------

            //    //string bdy = "Dear Area Head, </br></br>Customer Mr." + HttpContext.Current.Session["cusname"].ToString() + " (" + HttpContext.Current.Session["cid"].ToString() + ") from " + dT5.Rows[0][4].ToString() + ". Branch submitted a mobile number modification request. Kindly process same at the earliest.</br></br>Sales Team HO";
            //    //string bdy = input;
            //    mail.Subject = "A Ticket Has Been Raised In Your Employee Code Please Check";
            //    mail.IsBodyHtml = true;
            //    mail.Body = "A Ticket:" + str + " Has Been rised in your employee code.You Can Check Ticket Details Through ApplicationPortal-->ITSM-->My Tickets";
            //    System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls | System.Net.SecurityProtocolType.Tls11 | System.Net.SecurityProtocolType.Tls12;
            //    mail.To.Add(User);
            //    mail.IsBodyHtml = true;
            //    server.Send(mail);


            //}
            //catch (Exception ex)
            //{

            //}
            return str;




        }



        //[WebMethod(EnableSession = true)]
        //public static string AddSrNoAttach(string input)


        //{
        //    DataSet ds;
        //    string str = "";
        //    ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
        //    ds = obj.GetDetails("proc_ITSM", "ITSM", "insertSRtickNoAtt", input, "", "");
        //    if (ds.Tables[0].Rows.Count > 0)
        //    {
        //        str = ds.Tables[0].Rows[0][0].ToString();
        //    }
        //    return str;
        //}


        [WebMethod(EnableSession = true)]
        public static string confirmdocument(string val, string upload_file)
        {
            string[] ticketno;
            string result = "";
            string InputString = upload_file.Split(',')[1];
            Byte[] imgByte = Convert.FromBase64String(InputString);
            ITSM_Service.ITSMClient obj1 = new ITSM_Service.ITSMClient();
            result = obj1.DataUpload("proc_itsm_SRupload", val, imgByte);
            ticketno = result.Split('¥');


            //try
            //{
            //    //solution_infini_flag.mana.SMSTool sms = new solution_infini_flag.mana.SMSTool();
            //    //BALCon op = new BALCon();
            //    DataTable dT, dT3, dT4, dT5 = new DataTable();
            //    string AH_Mob = "";
            //    string msgid = "";




            //    SmtpClient server = new SmtpClient("smtp.office365.com");
            //    server.Port = 587;
            //    server.EnableSsl = true;
            //    server.UseDefaultCredentials = false;
            //    server.Credentials = new System.Net.NetworkCredential("helpdesk@manappuram.com", "SDemail@123", "smtp.office365.com");
            //    server.Timeout = 5000;
            //    server.TargetName = "STARTTLS/smtp.office365.com";
            //    server.DeliveryMethod = SmtpDeliveryMethod.Network;
            //    MailMessage mail = new MailMessage();
            //    mail.From = new MailAddress("helpdesk@manappuram.com");


            //    //  -------------------oo--------------mail body creation--------------oo--------------------------------

            //    //string bdy = "Dear Area Head, </br></br>Customer Mr." + HttpContext.Current.Session["cusname"].ToString() + " (" + HttpContext.Current.Session["cid"].ToString() + ") from " + dT5.Rows[0][4].ToString() + ". Branch submitted a mobile number modification request. Kindly process same at the earliest.</br></br>Sales Team HO";
            //    //string bdy = input;
            //    mail.Subject = "A Ticket Has Been Raised In Your Employee Code Please Check";
            //    mail.IsBodyHtml = true;
            //    mail.Body = "A Ticket:" + ticketno[1] + " Has Been rised in your employee code.You Can Check Ticket Details Through. ApplicationPortal-->ITSM-->Ticket Management-->My Tickets";
            //    System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls | System.Net.SecurityProtocolType.Tls11 | System.Net.SecurityProtocolType.Tls12;
            //    mail.To.Add(User);
            //    mail.IsBodyHtml = true;
            //    server.Send(mail);


            //}
            //catch (Exception ex)
            //{

            //}
            return result;






        }
        //public class getSbFund
        //{
        //    public string SbId { get; set; }
        //    public string SbName { get; set; }

        //}

        //[WebMethod(EnableSession = true)]
        //public static List<getSbFund> getSubFund(string QueryString, string input)
        //{
        //    TMS_Service.TMS_ServiceClient obj = new TMS_Service.TMS_ServiceClient();
        //    List<getSbFund> fundtyp = new List<getSbFund>();
        //    DataSet ds = new DataSet();
        //    ds = obj.TreasuryFillingData("TREASURY", QueryString, input);
        //    try
        //    {
        //        if (ds.Tables.Count > 0)
        //        {
        //            if (ds.Tables[0].Rows.Count > 0)
        //            {
        //                foreach (DataRow dr in ds.Tables[0].Rows)
        //                {
        //                    fundtyp.Add(new getSbFund()
        //                    {
        //                        SbId = dr[0].ToString(),
        //                        SbName = dr[1].ToString()
        //                    });

        //                }
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {

        //    }
        //    return fundtyp;
        //}
        public class getType
        {
            public string FtId { get; set; }
            public string FtName { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<getType> getFinancialType(string QueryString)
        {
            TMS_Service.TMS_ServiceClient obj = new TMS_Service.TMS_ServiceClient();
            List<getType> gtftpe = new List<getType>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillingData("TREASURY", QueryString, "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtftpe.Add(new getType()
                            {
                                FtId = dr[0].ToString(),
                                FtName = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtftpe;
        }
        public class getFI
        {
            public string FId { get; set; }
            public string FName { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static List<getFI> getFIDtls(string QueryString, string input)
        {
            TMS_Service.TMS_ServiceClient obj = new TMS_Service.TMS_ServiceClient();
            List<getFI> gtfi = new List<getFI>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillingData("TREASURY", QueryString, input);
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtfi.Add(new getFI()
                            {
                                FId = dr[0].ToString(),
                                FName = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtfi;
        }
        public class getFiTbl
        {
            public string INName { get; set; }

            public string Branchordep { get; set; }
            public string Summary { get; set; }
            //public string FBr { get; set; }

            public string Desc { get; set; }
            public string Repdate { get; set; }
            public string CurrentStatus { get; set; }

        }
        [WebMethod(EnableSession = true)]
        public static List<getFiTbl> getTable(string QueryStr, string input)
        {
            ITSM_Service.ITSMClient obj = new ITSM_Service.ITSMClient();
            List<getFiTbl> gtfi = new List<getFiTbl>();
            DataSet ds = new DataSet();
            ds = obj.GetDetails("proc_ITSM", "ITSM", QueryStr, input, "", "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtfi.Add(new getFiTbl()
                            {
                                INName = dr[0].ToString(),
                                Branchordep = dr[1].ToString(),
                                Summary = dr[2].ToString(),
                                Desc = dr[3].ToString(),
                                Repdate = dr[4].ToString(),
                                CurrentStatus = dr[5].ToString()

                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtfi;
        }


        //[WebMethod(EnableSession = true)]
        //public static string PutdatalDocuments(string ImageData, string InputData)
        //{
        //    string result = "";
        //    string InputString = ImageData.Split(',')[1];
        //    Byte[] imgByte = Convert.FromBase64String(InputString);
        //    ITSM_Service.ITSMClient obj1 = new ITSM_Service.ITSMClient();


        //    result = obj1.DataUpload("proc_itsm_upload", InputData, imgByte);
        //    return result;
        //}

        //public class bankLedger
        //{
        //    public string Id { get; set; }
        //    public string Name { get; set; }
        //}
        //[WebMethod(EnableSession = true)]
        //public static List<bankLedger> getBankLedg(string QueryStr)
        //{
        //    TMS_Service.TMS_ServiceClient obj = new TMS_Service.TMS_ServiceClient();
        //    List<bankLedger> ledg = new List<bankLedger>();
        //    DataSet ds = new DataSet();
        //    ds = obj.TreasuryFillData("TREASURY", QueryStr, "");
        //    try
        //    {
        //        if (ds.Tables.Count > 0)
        //        {
        //            if (ds.Tables[0].Rows.Count > 0)
        //            {
        //                foreach (DataRow dr in ds.Tables[0].Rows)
        //                {
        //                    ledg.Add(new bankLedger()
        //                    {
        //                        Id = dr[0].ToString(),
        //                        Name = dr[1].ToString()
        //                    });
        //                }
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {

        //    }
        //    return ledg;
        //}
        public class AccLedger
        {
            public string Id { get; set; }
            public string Name { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static List<AccLedger> getloanLedg(string QueryStr)
        {
            TMS_Service.TMS_ServiceClient obj = new TMS_Service.TMS_ServiceClient();
            List<AccLedger> Acledg = new List<AccLedger>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillingData("TREASURY", QueryStr, "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            Acledg.Add(new AccLedger()
                            {
                                Id = dr[0].ToString(),
                                Name = dr[1].ToString()
                            });
                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return Acledg;
        }

        public class getPGuante
        {
            public string Id { get; set; }
            public string Name { get; set; }

        }

        [WebMethod(EnableSession = true)]
        public static List<getPGuante> getPernlGurntee(string QueryStr)
        {
            TMS_Service.TMS_ServiceClient obj = new TMS_Service.TMS_ServiceClient();
            List<getPGuante> gtftpe = new List<getPGuante>();
            DataSet ds = new DataSet();
            ds = obj.TreasuryFillingData("TREASURY", QueryStr, "");
            try
            {
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            gtftpe.Add(new getPGuante()
                            {
                                Id = dr[0].ToString(),
                                Name = dr[1].ToString()
                            });

                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return gtftpe;
        }
        public class getResult
        {
            public string msg { get; set; }
        }
        [WebMethod(EnableSession = true)]
        public static getResult AddLoanMaster(string input)
        {
            //string Reslt = "";
            getResult Reslt = new getResult();
            TMS_Service.TMS_ServiceClient obj = new TMS_Service.TMS_ServiceClient();
            Reslt.msg = obj.TreasuryConfirm("ADDLOANMASTER", "", input);
            return Reslt;
        }

    }
}