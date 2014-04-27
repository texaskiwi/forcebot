using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for News
/// </summary>
public class News
{
    public string Id { get; set; }
    public String Title { get; set; }
    public String Summary { get; set; }
    public Double Sentiment { get; set; }
    public DateTime WhenPublished { get; set; }
    public String[] AssociatedStocks { get; set; }
	public News()
	{
		 
	}
}