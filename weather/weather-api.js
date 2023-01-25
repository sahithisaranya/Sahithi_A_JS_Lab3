const API_KEY="574e8d83a9b84fe2c595cfb461e034a8";
const API_BASE_URL="https://api.openweathermap.org/data/2.5/weather";

class WeatherAPI{
    constructor(city){
        this.city=city;
        this.apiUrl=new URL(API_BASE_URL);
    }

    invokeAPI(){
        console.log("invokeAPI called")
        this.buildURL();

        return fetch(this.apiUrl.toString())
        .then( (response ) => {
          return response.json()
        } )
        .then(  (responseAsJSON) => {
          console.log(responseAsJSON)
          return responseAsJSON;
        })
        .catch( (error) => {
          console.log("Error invoking the API");
          console.log(error);
          return;
        })
       
    }

    buildURL(){
        console.log("buildURL called");
        this.apiUrl.searchParams.append("q",this.city);
        this.apiUrl.searchParams.append("appid",API_KEY);
        this.apiUrl.searchParams.append("units","metric");
        console.log(`url generated is ${this.apiUrl}`);
    }
}

export{WeatherAPI}