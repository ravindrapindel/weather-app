key = "48cba28fbe0ba67197de313e7eca4189"
url= "http://api.weatherstack.com/"

const city = document.querySelector(".city");
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const highlow = document.querySelector(".high-low");

const searchbox = document.querySelector(".search-box");


// console.log(temp, city, date, weather, highlow);
async function fetchData(name) {
 const ftch = await fetch(`${url}current?access_key=${key}&query=${name}`);
 const resp = await ftch.json();
 city.innerText = resp.location.name;
 date.innerText=resp.location.localtime;
 temp.innerText = resp.current.temperature + "°C";
 weather.innerText = resp.current.weather_descriptions[0];
 highlow.innerText = "precipitation " + resp.current.precip+ " %";
//  console.log(resp);
}

searchbox.onkeypress = (e)=>{
    if(e.keyCode == 13){
      fetchData(e.target.value);
    }
  }
