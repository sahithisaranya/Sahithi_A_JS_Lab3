const API_KEY="574e8d83a9b84fe2c595cfb461e034a8";
const API_BASE_URL="https://api.openweathermap.org/data/2.5/weather";

class WeatherAPI{
    constructor(city){
        this.city=city;
        this.apiUrl=new URL(API_BASE_URL);
    }

    buildURL(){
        this.apiUrl.searchParams.append("q",this.city);
        this.apiUrl.searchParams.append("appid",API_KEY);
        this.apiUrl.searchParams.append("units","metric");
        console.log(`URL is ${this.apiUrl}`);
    }
}

export{
    WeatherAPI
}