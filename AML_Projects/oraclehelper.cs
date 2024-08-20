using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.CSharp;
using System.Collections;
using System.Data;
using System.Diagnostics;
using System.Data.OracleClient;
namespace Helper.Oracle
{
    public class OracleHelper
    {
        private string strConnectionString = "";
        public OracleHelper()
        {
            strConnectionString = "user id=mana0809;password=mana0809;data source=uatdbNW";
        }
        public int ExecuteNonQuery(string query)
        {
            OracleConnection cnn = new OracleConnection(strConnectionString);
            OracleCommand cmd = new OracleCommand(query, cnn);
            if ((query.StartsWith("INSERT") | query.StartsWith("insert") | query.StartsWith("UPDATE") | query.StartsWith("update") | query.StartsWith("DELETE") | query.StartsWith("delete") | query.StartsWith("exec")))
            {
                cmd.CommandType = CommandType.Text;
            }
            else
            {
                cmd.CommandType = CommandType.StoredProcedure;
            }
            int retval = 0;
            try
            {
                cnn.Open();
                retval = cmd.ExecuteNonQuery();
            }
            catch (Exception exp)
            {
                throw exp;

            }
            finally
            {
                if ((cnn.State == ConnectionState.Open))
                {
                    cnn.Close();
                }
                cnn.Dispose();
                cmd.Dispose();
            }
            return retval;
        }

        public int ExecuteNonQuery(string query, OracleParameter[] parameters_value)
        {
            OracleConnection cnn = new OracleConnection(strConnectionString);
            OracleCommand cmd = new OracleCommand(query, cnn);
            try
            {
                if ((query.StartsWith("INSERT") | query.StartsWith("insert") | query.StartsWith("UPDATE") | query.StartsWith("update") | query.StartsWith("DELETE") | query.StartsWith("delete")))
                {
                    cmd.CommandType = CommandType.Text;
                }
                else
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                }
                int i = 0;
                for (i = 0; i <= parameters_value.Length - 1; i++)
                {
                    cmd.Parameters.Add(parameters_value[i]);
                }
                cnn.Open();
                int retval = 0;
                retval = cmd.ExecuteNonQuery();
                cnn.Close();
                return retval;

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if ((cnn.State == ConnectionState.Open))
                {
                    cnn.Close();
                }
                cmd.Dispose();
                cnn.Dispose();
            }

        }
        public object ExecuteScalar(string query)
        {
            OracleConnection cnn = new OracleConnection(strConnectionString);
            OracleCommand cmd = new OracleCommand(query, cnn);
            object retval = new object();
            try
            {
                if ((query.StartsWith("SELECT") | query.StartsWith("select")))
                {
                    cmd.CommandType = CommandType.Text;
                }
                else
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                }
                cnn.Open();
                retval = cmd.ExecuteNonQuery();

            }
            catch (Exception ex)
            {
            }
            finally
            {
                if ((cnn.State == ConnectionState.Open))
                {
                    cnn.Close();
                }
                cmd.Dispose();
                cnn.Dispose();
                //retval.Dispose()
            }
            return retval;
        }
        public object ExecuteScalar(string query, OracleParameter[] parameters_value)
        {
            OracleConnection cnn = new OracleConnection(strConnectionString);
            object retval = new object();
            OracleCommand cmd = new OracleCommand(query, cnn);
            try
            {
                if ((query.StartsWith("SELECT") | query.StartsWith("select")))
                {
                    cmd.CommandType = CommandType.Text;
                }
                else
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                }
                int i = 0;
                for (i = 0; i <= parameters_value.Length - 1; i++)
                {
                    cmd.Parameters.Add(parameters_value[i]);
                }
                cnn.Open();
                retval = cmd.ExecuteScalar();

            }
            catch (Exception ex)
            {
            }
            finally
            {
                if ((cnn.State == ConnectionState.Open))
                {
                    cnn.Close();
                }
                cmd.Dispose();
                cnn.Dispose();
                //retval.dispose()
            }
            return retval;
        }
        public OracleDataReader ExecuteReader(string query)
        {
            OracleConnection cnn = new OracleConnection(strConnectionString);
            OracleCommand cmd = new OracleCommand(query, cnn);
            OracleDataReader retval = default(OracleDataReader);
            try
            {
                if ((query.StartsWith("SELECT") | query.StartsWith("select")))
                {
                    cmd.CommandType = CommandType.Text;
                    cnn.Open();
                    retval = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                }
                else
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cnn.Open();
                    retval = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                }
                return retval;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if ((cnn.State == ConnectionState.Open))
                {
                    cnn.Close();
                }
                cmd.Dispose();
                cnn.Dispose();
            }
            //retval.Dispose()
        }
        public OracleDataReader ExecuteReader(string query, OracleParameter[] parameters_value)
        {
            OracleConnection cnn = new OracleConnection(strConnectionString);
            OracleCommand cmd = new OracleCommand(query, cnn);
            try
            {
                if ((query.StartsWith("SELECT") | query.StartsWith("select")))
                {
                    cmd.CommandType = CommandType.Text;
                }
                else
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                }
                int i = 0;
                for (i = 0; i <= parameters_value.Length - 1; i++)
                {
                    cmd.Parameters.Add(parameters_value[i]);
                }
                cnn.Open();
                return cmd.ExecuteReader(CommandBehavior.CloseConnection);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if ((cnn.State == ConnectionState.Open))
                {
                    cnn.Close();
                }
                cmd.Dispose();
                cnn.Dispose();
            }
        }
        public DataSet ExecuteDataSet(string query)
        {
            OracleConnection cnn = new OracleConnection(strConnectionString);
            OracleCommand cmd = new OracleCommand(query, cnn);
            DataSet ds = new DataSet();
            OracleDataAdapter da = new OracleDataAdapter();
            try
            {
                if ((query.StartsWith("SELECT") | query.StartsWith("select")))
                {
                    cmd.CommandType = CommandType.Text;
                }
                else
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                }

                da.SelectCommand = cmd;

                da.Fill(ds);

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if ((cnn.State == ConnectionState.Open))
                {
                    cnn.Close();
                }
                cmd.Dispose();
                cnn.Dispose();
                da.Dispose();
                //ds.Dispose()
            }
            return ds;
        }
        public DataSet ExecuteDataSet(string query, OracleParameter[] parameters_value)
        {
            OracleConnection cnn = new OracleConnection(strConnectionString);
            OracleCommand cmd = new OracleCommand(query, cnn);
            OracleDataAdapter da = new OracleDataAdapter();
            DataSet ds = new DataSet();
            try
            {
                if ((query.StartsWith("SELECT") | query.StartsWith("select")))
                {
                    cmd.CommandType = CommandType.Text;
                }
                else
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                }
                int i = 0;
                for (i = 0; i <= parameters_value.Length - 1; i++)
                {
                    cmd.Parameters.Add(parameters_value[i]);
                }

                da.SelectCommand = cmd;
                da.Fill(ds);

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if ((cnn.State == ConnectionState.Open))
                {
                    cnn.Close();
                }
                cmd.Dispose();
                cnn.Dispose();
                da.Dispose();
                //ds.Dispose()
            }
            return ds;
        }
        public DataSet ExecuteMDataSet(string[] query, string[] tables)
        {

            OracleConnection cnn = new OracleConnection(strConnectionString);
            DataSet ds = new DataSet();
            OracleDataAdapter da = new OracleDataAdapter();
            try
            {
                int i = 0;
                for (i = 0; i <= query.GetUpperBound(0); i++)
                {
                    OracleCommand cmd = new OracleCommand(query[i], cnn);
                    cmd.CommandType = CommandType.Text;
                    da.SelectCommand = cmd;
                    da.Fill(ds, tables[i]);
                    cmd.Dispose();
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if ((cnn.State == ConnectionState.Open))
                {
                    cnn.Close();
                }
                cnn.Dispose();
                da.Dispose();
                // ds.Dispose()
            }
            return ds;
        }
        public void dispose()
        {
            //Finalize();
        }
    }
}