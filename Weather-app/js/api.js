
//api
const apiKey = "fc5986d8ac28020e701ca504f6cdf732";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const  searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather (city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (responce.status == 404) {
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    } 
    else {
        var data = await responce.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Cloud"){
                weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
        }
    
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector('.error').style.display='none';
    }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
checkWeather ();
//dark and light mode

