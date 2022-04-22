var apiKey = "bea9e28f4f996779db9819daf0338f11";
var cityName = document.getElementById('cityName');
var searchButton = document.getElementById('search-button');
var temp = document.getElementById('temp')
var humidity = document.getElementById('humidity');
var wind_speed = document.getElementById('wind-speed');
var uvIndex = document.getElementById('uv-index');
// var forecastContainerEl = document.getElementById('forecast-panel')
// var searchEl = document.getElementById('search-button');

let today = function timeStamp (){
    $('#currentDay').text(`${moment().format('MMMM Do YYYY, h:mm a')}`);
    };
    today();
//setInterval function to update every second so the today function keeps updating
    setInterval(today, 1000);


function currentWeather(city) {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            var lat = data.coord.lat;
            var lon = data.coord.lon;
            oneCall(lat, lon)
        })
}



function oneCall(lat, lon) {
    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            temp.textContent = "Temp: " + data.current.temp + "F";
            humidity.textContent = "Humidity: " + data.current.humidity + '%';
            wind_speed.textContent = "Wind Speed: " + data.current.wind_speed + " mph";
            uvIndex.textContent = "" + data.current.uvi;

            if (data.current.uvi < 3) {
                $("#uv-index").removeClass("moderate severe");
                $("#uv-index").addClass("favorable");
            } else if (data.current.uvi < 6) {
                $("#uv-index").removeClass("favorable severe");
                $("#uv-index").addClass("moderate");
            } else {
                $("#uv-index").removeClass("favorable moderate");
                $("#uv-index").addClass("severe");
            }

            var tomorrow = data.daily[1].temp.day;
            temp.textContent = 'Temp' + data.daily.temp.day + "F";
            humidity.textContent = 'Humidity' + data.daily.humidity + "%";
            
            












        })
}



searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    var city = cityName.value.trim();
    currentWeather(city);
})