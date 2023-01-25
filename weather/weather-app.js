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
        const weatherElement=document.querySelector(".current .weather");
        weatherElement.innerText=weatherJSON.weather[0].main;
    }
}
export {WeatherApp}