<%@ WebHandler Language="C#" Class="news" Debug="true" %>

using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Diagnostics;
using System.IO;
using System.Web;
using System.Runtime.Serialization.Json;

public class news : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        context.Response.AddHeader("Pragma", "no-cache");
        context.Response.AddHeader("Cache-Control", "private, no-cache");
        context.Response.AddHeader("Access-Control-Allow-Headers", "X-File-Name,X-File-Type,X-File-Size");
        context.Response.AddHeader("Access-Control-Allow-Origin", "*");


        

            String output = "";



            List<News> newsList = new List<News>();

            var itemId = context.Request.QueryString["query"];
            if (itemId == null)
            {
                context.Response.Write(output);
                return;
            }

            var associatedItems = itemId.Split(new Char[]{','});

            Random random = new Random();
            
         
            for(int i=0;i<40;i++)
            {
                DateTime now = DateTime.Now;
                DateTime publishDate = new DateTime(now.Year, now.Month, random.Next(1,29), random.Next(23), random.Next(59), random.Next(59));
                
                News item = new News(){
                     AssociatedStocks = associatedItems,
                     Sentiment = random.Next(100) * 0.1,
                     Summary = HttpUtility.HtmlEncode(NLipsum.Core.LipsumGenerator.Generate(2)),
                     WhenPublished = publishDate,
                     Title =new NLipsum.Core.LipsumGenerator().GenerateSentences(1)[0],
                     Id = Guid.NewGuid().ToString()
                };

                newsList.Add(item); 
                
            }
           


            using (MemoryStream memoryStream = new MemoryStream())
            {
                DataContractJsonSerializer serializer = new DataContractJsonSerializer(typeof(List<News>));
                serializer.WriteObject(memoryStream, newsList);
                memoryStream.Position = 0;
                using (StreamReader streamReader = new StreamReader(memoryStream))
                {
                    output = streamReader.ReadToEnd();
                }
            }

            context.Response.ContentType = "application/json";

            context.Response.Write(output);


        
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}