<%@ WebHandler Language="C#" Class="portfolio" Debug="true" %>

using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.IO;
using System.Web;
using System.Runtime.Serialization.Json;

public class portfolio : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        context.Response.AddHeader("Pragma", "no-cache");
        context.Response.AddHeader("Cache-Control", "private, no-cache");
        context.Response.AddHeader("Access-Control-Allow-Headers", "X-File-Name,X-File-Type,X-File-Size");
        context.Response.AddHeader("Access-Control-Allow-Origin", "*");


        using (SqlConnection sqlConnection = new SqlConnection("server=AETHER\\SQLEXPRESS;" +
                                       "Trusted_Connection=yes;" +
                                       "database=forcebot; " +
                                       "connection timeout=30"))
        {
            string query = "SELECT * FROM stock";
            sqlConnection.Open();
            SqlCommand queryCommand = new SqlCommand(query, sqlConnection);
            SqlDataReader sqlReader = queryCommand.ExecuteReader();


            String output = "";



            List<Stock> stockList = new List<Stock>();

            DataTable dataTable = new DataTable();
            dataTable.Load(sqlReader);

            foreach (DataRow row in dataTable.Rows)
            {
                String name = row["name"].ToString();
                String symbol = row["symbol"].ToString();
                String id = row["stock_id"].ToString();

                Stock stock = new Stock() { Name = name, Symbol = symbol, Id = id };
                stockList.Add(stock);




            };
            sqlConnection.Close();


            using (MemoryStream memoryStream = new MemoryStream())
            {
                DataContractJsonSerializer serializer = new DataContractJsonSerializer(typeof(List<Stock>));
                serializer.WriteObject(memoryStream, stockList);
                memoryStream.Position = 0;
                using (StreamReader streamReader = new StreamReader(memoryStream))
                {
                    output = streamReader.ReadToEnd();
                }
            }

            context.Response.ContentType = "application/json";

            context.Response.Write(output);


        };
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}