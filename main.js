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
 city.innerText = resp.location.name;
 date.innerText=resp.location.localtime;
 temp.innerText = resp.current.temperature + "°C";
 weather.innerText = resp.current.weather_descriptions[0];
 highlow.innerText = "precipitation " + resp.current.precip+ " %";
 console.log(resp);
}

searchbox.onkeypress = (e)=>{
    if(e.keyCode == 13){
      fetchData(e.target.value);
    }
  }
