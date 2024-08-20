using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AML_Projects
{
    public partial class scheduler : System.Web.UI.Page
    {
        Helper.Oracle.OracleHelper oh = new Helper.Oracle.OracleHelper();

        protected void Page_Load(object sender, EventArgs e)
        {
            namematchh();
        }

        public void namematchh()
        {

            try
            {
                DataTable dt1 = new DataTable();
                //var queryk = "select c.cust_name from dms.DEPOSIT_PAN_DETAIL t, mana0809.customer c  where c.cust_id = t.cust_id and t.cust_id = '" + updatePanDetailsRequest.custId + "'";
                var queryk = "select D.FIRST_NAME,D.SECOND_NAME,D.LAST_NAME,T.NAME,c.name from TBL_PAN_VALIDATED_CUSTOMER t, MANA0809.CUSTOMER C, DMS.DEPOSIT_PAN_DETAIL D WHERE D.CUST_ID = C.CUST_ID AND T.CUST_ID = C.CUST_ID AND T.PAN_STATUS = 'VALID'";
                // DBService.ITSMClient helper = new DBService.ITSMClient();
                dt1 = oh.ExecuteDataSet(queryk).Tables[0];


                var firstName = dt1.Rows[0][0].ToString();
                var middleName = dt1.Rows[0][1].ToString();
                var lastName = dt1.Rows[0][2].ToString();
                var vname = dt1.Rows[0][3].ToString();
                var custname = dt1.Rows[0][4].ToString();

                double algovalue_first = algoname_match(custname, firstName);
                double algovalue_second = algoname_match(custname, middleName);
                double algovalue_third = algoname_match(custname, lastName);
                double algovalue_four = algoname_match(custname, vname);
                double algovalue_five = algoname_match(custname, custname);
                double max1 = Math.Max(algovalue_first, algovalue_second);

                double max2 = Math.Max(algovalue_first, algovalue_third);
                double max3 = Math.Max(max1, max2);
                double max4 = Math.Max(max3, algovalue_four);

                if (algovalue_first >= 75.00 || algovalue_second >= 75.00 || algovalue_third >= 75.00 || algovalue_four >= 75.00 || algovalue_five >= 75.00)
                {


                }

            }
            catch (Exception ex)
            {
                ex.ToString();
               // WriteToFile("Exception namematchh" + DateTime.Now + " - " + ex.ToString());

            }
        }

        public double algoname_match(string s1, string s2)
        {
            if (s1 == s2)
                return 100.0;
            double finalvalue, finalpercent;

            int len1 = s1.Length;
            int len2 = s2.Length;


            int max_dist = (int)(Math.Floor((double)(
                            (Math.Max(len1, len2) / 2) - 1)));


            int match = 0;


            int[] hash_s1 = new int[s1.Length];
            int[] hash_s2 = new int[s2.Length];


            for (int i = 0; i < len1; i++)
            {


                for (int j = Math.Max(0, i - max_dist);
                    j < Math.Min(len2, i + max_dist + 1); j++)


                    if (s1[i] == s2[j] && hash_s2[j] == 0)
                    {
                        hash_s1[i] = 1;
                        hash_s2[j] = 1;
                        match++;
                        break;
                    }
            }


            if (match == 0)
                return 0.0;


            double t = 0;

            int point = 0;


            for (int i = 0; i < len1; i++)
                if (hash_s1[i] == 1)
                {


                    while (hash_s2[point] == 0)
                        point++;

                    if (s1[i] != s2[point++])
                        t++;
                }

            t /= 2;


            finalvalue = (((double)match) / ((double)len1)
                    + ((double)match) / ((double)len2)
                    + ((double)match - t) / ((double)match)) /
                 3.0;
            finalpercent = (finalvalue * 100);
            return finalpercent;

        }
    }
}