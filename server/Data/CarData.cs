using Newtonsoft.Json;
using System.Collections.Generic;


namespace server.Data
{
    public class CarData{
        [JsonProperty("id")]
        public uint id {get; set;}
        [JsonProperty("Img")]
        public string? Img {get; set;}
        [JsonProperty("MakeName")]
        public string? MakeName { get; set; }
        [JsonProperty("ModelName")]
        public string? ModelName { get; set; }
        [JsonProperty("CarwaleAbsure")]
        public bool CarwaleAbsure { get; set; }
        [JsonProperty("CertifiedCars")]
        public bool CertifiedCars { get; set; }
        [JsonProperty("QualityReportsAvaliable")]
        public bool QualityReportsAvaliable { get; set; }
        [JsonProperty("PriceLowerBound")]
        public uint PriceLowerBound { get; set; }
        [JsonProperty("PriceUpperBound")]
        public uint PriceUpperBound { get; set; }
        [JsonProperty("Price")]
        public uint Price { get; set; }
    }
}