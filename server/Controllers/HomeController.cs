using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using server.Data;


namespace server.Controllers;

[ApiController]
public class HomeController : Controller
{

    [HttpPost]
    [Route("api/GetData")]
    public IActionResult GetData([FromBody] CarData queryData)
    {
        CarData[] apiData = new CarData[]{
        new CarData(){id=1,MakeName="Maruti Suzuki",ModelName="FRONX",CarwaleAbsure=true,CertifiedCars=true,QualityReportsAvaliable=true,PriceLowerBound=3,PriceUpperBound=5,Price=350000},
        new CarData(){id=2,MakeName="Hyundai",ModelName="Tucson",CarwaleAbsure=true,CertifiedCars=true,QualityReportsAvaliable=false,PriceLowerBound=3,PriceUpperBound=5,Price=400000},
        new CarData(){id=3,MakeName="Mahindra",ModelName="XUV 300",CarwaleAbsure=true,CertifiedCars=false,QualityReportsAvaliable=true,PriceLowerBound=3,PriceUpperBound=5,Price=455000},
        new CarData(){id=4,MakeName="Tata",ModelName="Harrier",CarwaleAbsure=false,CertifiedCars=true,QualityReportsAvaliable=true,PriceLowerBound=3,PriceUpperBound=5,Price=500000},
        new CarData(){id=5,MakeName="Toyota",ModelName="Land Crusier",CarwaleAbsure=false,CertifiedCars=false,QualityReportsAvaliable=true,PriceLowerBound=5,PriceUpperBound=8,Price=550000},
        new CarData(){id=6,MakeName="Renault",ModelName="Clio",CarwaleAbsure=true,CertifiedCars=false,QualityReportsAvaliable=false,PriceLowerBound=5,PriceUpperBound=8,Price=600000},
        new CarData(){id=7,MakeName="Maruti Suzuki",ModelName="FRONX",CarwaleAbsure=false,CertifiedCars=true,QualityReportsAvaliable=false,PriceLowerBound=5,PriceUpperBound=8,Price=650000},
        new CarData(){id=8,MakeName="Hyundai",ModelName="Tucson",CarwaleAbsure=false,CertifiedCars=false,QualityReportsAvaliable=false,PriceLowerBound=5,PriceUpperBound=8,Price=700000},
        new CarData(){id=9,MakeName="Mahindra",ModelName="XUV 300",CarwaleAbsure=false,CertifiedCars=false,QualityReportsAvaliable=false,PriceLowerBound=5,PriceUpperBound=8,Price=800000},
        new CarData(){id=10,MakeName="Tata",ModelName="Harrier",CarwaleAbsure=true,CertifiedCars=true,QualityReportsAvaliable=true,PriceLowerBound=8,PriceUpperBound=12,Price=1000000}
        };

        IEnumerable<CarData> finalData= new List<CarData>(){};
        
            finalData = apiData.Where(data => (queryData.MakeName == "" || data.MakeName == queryData.MakeName) &&
            (queryData.CarwaleAbsure == false || data.CarwaleAbsure == queryData.CarwaleAbsure) &&
            (queryData.CertifiedCars == false || data.CertifiedCars == queryData.CertifiedCars) &&
            (queryData.QualityReportsAvaliable == false|| data.QualityReportsAvaliable == queryData.QualityReportsAvaliable) &&
            ((queryData.PriceLowerBound == 0 && queryData.PriceUpperBound == 0) || (queryData.PriceLowerBound * 100000 <= data.Price  && data.Price <= queryData.PriceUpperBound*100000))
            );


        
        return Content(JsonConvert.SerializeObject(finalData));
    }
}
