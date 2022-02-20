const API_KEY = "67a8a152970a0c6f0ef1d87bef4c563b";

function onGeoOk (take){
    const lat = take.coords.latitude;
    const log = take.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url)                                                      
    .then(response => response.json())                                  
    .then(data => {
        const weather =document.querySelector("#weather span:first-child");
        const city =document.querySelector("#weather span:last-child");
    weather.innerText = data.name; 
    city.innerText = `${data.weather[0].main} / ${data.main.temp}`;})
    }

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  


 
