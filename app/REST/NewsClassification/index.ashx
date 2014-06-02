<%@ WebHandler Language="C#" Class="index" %>

using System;
using System.Web;

public class index : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        context.Response.AddHeader("Pragma", "no-cache");
        context.Response.AddHeader("Cache-Control", "private, no-cache");
        context.Response.AddHeader("Access-Control-Allow-Headers", "X-File-Name,X-File-Type,X-File-Size");
        context.Response.AddHeader("Access-Control-Allow-Origin", "*");


        var query = context.Request.QueryString["query"];


        Random random = new Random();
        
        context.Response.Write(random.NextDouble().ToString());
        
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}