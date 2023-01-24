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
        console.log(`url generated is ${this.apiUrl}`);
    }

    invokeAPI(){
        this.buildURL();

        fetch(this.apiUrl.toString())
        .then((response)=>{
            return response.json()
        })
        .then(responseAsJSON=>{
            console.log(responseAsJSON)
        })
        .catch((error)=>{
            console.log("Error involing the api");
            console.log(error);
            return;
        })
       
    }
}

export{
    WeatherAPI
}