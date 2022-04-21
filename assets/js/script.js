var apiKey = "bea9e28f4f996779db9819daf0338f11";
var cityName=document.getElementById('cityName');
var searchButton=document.getElementById('search-button');
var temp = document.getElementById('temp')


function currentWeather(city)  {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    fetch(apiURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        oneCall(lat, lon)
    })
}



function oneCall(lat, lon)  {
    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
    fetch(apiURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data)

        temp.textContent = "Temp: " + data.current.temp + "F";

var tomoroow = data.daily[1].temp.day;












    })
}

searchButton.addEventListener('click', function(event){
    event.preventDefault();
    var city = cityName.value.trim();
    currentWeather(city);
})