// key = "48cba28fbe0ba67197de313e7eca4189"
// url= "http://api.weatherstack.com/"
key ="2ab3fe01c1940330d27c19cda6ab0a0e";
url = "https://api.openweathermap.org/data/2.5/weather?"


const city = document.querySelector(".city");
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const highlow = document.querySelector(".high-low");

const searchbox = document.querySelector(".search-box");


// console.log(temp, city, date, weather, highlow);
async function fetchData(name) {
 const ftch = await fetch(`${url}q=${name}&appid=${key}`);
 const resp = await ftch.json();
 city.innerText = resp.name;
const date1 = new Date()
date.innerText= date1.getDate() + "/" +date1.getMonth()+1 +"/" + date1.getFullYear();
temp.innerText = (parseInt(resp.main.temp) - 273.15).toFixed(2) + "°C";
 weather.innerText = resp.weather[0].main;
highlow.innerText =  (parseInt(resp.main.temp_min) - 273.15).toFixed(2) + "°C/" + (parseInt(resp.main.temp_max) - 273.15).toFixed(2) + "°C";
 console.log(resp);
}

searchbox.onkeypress = (e)=>{
    if(e.keyCode == 13){
      fetchData(e.target.value);
    }
  }


  
let lat;
let lon;
urlnew="https://api.openweathermap.org/data/2.5/weather?";
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log( "Geolocation is not supported by this browser.");
    }
}
  
function showPosition(position) {
   lat = position.coords.latitude;
  lon = position.coords.longitude;
  fetchDataNew(lat,lon);
}
getLocation();




async function fetchDataNew(lat,lon) {
  const ftch = await fetch(`${urlnew}lat=${lat}&lon=${lon}&appid=${key}`);
  const resp = await ftch.json();
  city.innerText = resp.name;
 const date1 = new Date()
 date.innerText= date1.getDate() + "/" +date1.getMonth()+1 +"/" + date1.getFullYear();
 temp.innerText = (parseInt(resp.main.temp) - 273.15).toFixed(2) + "°C";
  weather.innerText = resp.weather[0].main;
 highlow.innerText =  (parseInt(resp.main.temp_min) - 273.15).toFixed(2) + "°C/" + (parseInt(resp.main.temp_max) - 273.15).toFixed(2) + "°C";
//   console.log(resp);
 }

