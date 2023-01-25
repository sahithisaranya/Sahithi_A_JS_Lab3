import { WeatherAPI } from "./weather-api.js";

class WeatherApp{
    init(){
        this.addEventHandlers();
    }

    addEventHandlers(){
        console.log("addEventHandlers called");
        const searchBoxElement=document.querySelector(".search-box");
        searchBoxElement.param1=this;
        searchBoxElement.addEventListener("keypress",this.handleEvent);
    }

    handleEvent(event){
        if(event.key=="Enter" || event.keyCode==13){
            const eventTarget=event.target;
            const city=eventTarget.value;
            const weatherAPPObj=eventTarget.param1;
            const weatherAPI=new WeatherAPI(city);
            weatherAPI.invokeAPI().then((response)=>{
                weatherAPPObj.updateControls(response);
            })
        }
    }

    updateControls(weatherJSON){
        console.log("updateControls called");

        //update city and country
        const cityElement=document.querySelector(".location .city")
        cityElement.innerHTML=`${weatherJSON.name}, ${weatherJSON.sys.country}`;

        //update date
        const dateElement=document.querySelector(".location .date")
        const now=new Date();
        const dateStr=now.toLocaleDateString("en-US", {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })

        dateElement.innerHTML=`${dateStr}`;

        //display weather like mist, cloudy, snowy etc
        const weatherElement=document.querySelector(".current .weather");
        weatherElement.innerText=weatherJSON.weather[0].main;

        //display temperature current
        const tempElement=document.querySelector(".current .temp")
        tempElement.innerHTML=`${weatherJSON.main.temp}°c`;

        //display high-low
        const highLowElement=document.querySelector(".current .hi-low")
        highLowElement.innerHTML=`${weatherJSON.main.temp_max}°c / ${weatherJSON.main.temp_min}°c`;

    }
}
export {WeatherApp}