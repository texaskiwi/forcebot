using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Stock
/// </summary>
public class Stock
{
     
    public String Name{ get; set; }
    public String Symbol { get; set; }
    public string Id { get; set; }
    public Decimal LastPrice { get; set; }
    public Decimal ChangeInPriceToday { get; set; }
	public Stock()
	{
		
        
	}
}