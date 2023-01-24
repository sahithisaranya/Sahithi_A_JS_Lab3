import {WeatherAPI}from "./weather-api.js";


function testBuildURL(){
    const weatherAPI=new WeatherAPI("Mumbai");
    weatherAPI.buildURL();
}


function testInvokeAPI(){
    const weatherAPI=new WeatherAPI("Los Angeles");
    const response=weatherAPI.invokeAPI();
}
testBuildURL();
testInvokeAPI();