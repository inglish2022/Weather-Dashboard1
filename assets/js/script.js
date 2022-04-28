var apiKey = "bea9e28f4f996779db9819daf0338f11";
var cityName = document.getElementById('cityName');
var searchButton = document.getElementById('search-button');
var icon = document.getElementById('currentIcon');
var temp = document.getElementById('temp')
var humidity = document.getElementById('humidity');
var wind_speed = document.getElementById('wind-speed');
var uvIndex = document.getElementById('uv-index');
var currentIcon = document.getElementById('currentIcon')
var currentCity = document.getElementById('current-city');
// var searchEl = document.getElementById('search-button');
var day1date = document.getElementById('day-0');
var day1Img = document.getElementById("img-0");
var day1temp = document.getElementById('temp-0');
var day1humidity = document.getElementById('hum-0');
var day1wind_speed = document.getElementById('wind-0');
var day2date = document.getElementById('day-1');
var day2Img = document.getElementById("img-1");
var day2temp = document.getElementById('temp-1');
var day2humidity = document.getElementById('hum-1')
var day2wind_speed = document.getElementById('wind-1')
var day3date = document.getElementById('day-2');
var day3Img = document.getElementById("img-2");
var day3temp = document.getElementById('temp-2');
var day3humidity = document.getElementById('hum-2')
var day3wind_speed = document.getElementById('wind-2')
var day4date = document.getElementById('day-3');
var day4Img = document.getElementById("img-3");
var day4temp = document.getElementById('temp-3');
var day4humidity = document.getElementById('hum-3')
var day4wind_speed = document.getElementById('wind-3')
var day5date = document.getElementById('day-4');
var day5Img = document.getElementById("img-4");
var day5temp = document.getElementById('temp-4');
var day5humidity = document.getElementById('hum-4')
var day5wind_speed = document.getElementById('wind-4')
var cityList = document.getElementById('city-list')



let today = function timeStamp() {
    $('#currentDay').text(`${moment().format('MMMM Do YYYY, h:mm a')}`);
};
today();
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
    // var icon = data.current.weather[0].icon;
    // var iconURL = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
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
            var icon = "https://openweathermap.org/img/wn/" + data.current.weather[0].icon + ".png";
           // var iconTL = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;
            currentIcon.setAttribute('src', icon);

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

            
            // day1Img.textContent = data.daily[1].weather;
            // day1.textContent = new Date((response.list[((i+1)*8)-1].dt)*1000)
            const day1= moment().add(1, 'days');

            console.log("moment test: ", moment().add(1, 'days').format('MMMM DD YYYY'))
            day1date.textContent = moment().add(1, 'days').format('MMMM DD YYYY');
            var icon1 = "https://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + ".png";
            day1Img.setAttribute('src', icon1);
            day1temp.textContent = 'Temp: ' + data.daily[1].temp.day + "F";
            day1wind_speed.textContent = 'Wind: ' + data.daily[1].wind_speed + " mph";
            day1humidity.textContent = 'Humidity: ' + data.daily[1].humidity + "%";

            day2date.textContent = moment().add(2, 'days').format('MMMM DD YYYY');
            var icon2 = "https://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png";
            day2Img.setAttribute('src', icon2);
            day2temp.textContent = 'Temp: ' + data.daily[2].temp.day + "F";
            day2wind_speed.textContent = 'Wind: ' + data.daily[2].wind_speed + " mph";
            day2humidity.textContent = 'Humidity: ' + data.daily[2].humidity + "%";

            day3date.textContent = moment().add(3, 'days').format('MMMM DD YYYY');
            var icon3 = "https://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + ".png";
            day3Img.setAttribute('src', icon2);
            day3temp.textContent = 'Temp: ' + data.daily[3].temp.day + "F";
            day3wind_speed.textContent = 'Wind: ' + data.daily[3].wind_speed + " mph";
            day3humidity.textContent = 'Humidity: ' + data.daily[3].humidity + "%";

            day4date.textContent = moment().add(4, 'days').format('MMMM DD YYYY');
            var icon4 = "https://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + ".png";
            day4Img.setAttribute('src', icon2);
            day4temp.textContent = 'Temp: ' + data.daily[4].temp.day + "F";
            day4wind_speed.textContent = 'Wind: ' + data.daily[4].wind_speed + " mph";
            day4humidity.textContent = 'Humidity: ' + data.daily[4].humidity + "%";

            day5date.textContent = moment().add(5, 'days').format('MMMM DD YYYY');
            var icon5 = "https://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + ".png";
            day5Img.setAttribute('src', icon2); 
            day5temp.textContent = 'Temp: ' + data.daily[5].temp.day + "F";
            day5wind_speed.textContent = 'Wind: ' + data.daily[5].wind_speed + " mph";
            day5humidity.textContent = 'Humidity: ' + data.daily[5].humidity + "%";

            











        })
}

function addToList(c){
                var listEl= $("<li>"+c.toUpperCase()+"</li>");
                $(listEl).attribute("class","list-group-item");
                $(listEl).attribute("data-value",c.toUpperCase());
                $(".list-group").append(listEl);
                
            }
            // var date=new Date(response.dt*1000).toLocaleDateString();
        
// day1Img.setAttribute("src", "the link to the picture from your data");


searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    var city = cityName.value.trim();
    setLocalStorage(city)
    currentWeather(city);
})

function setLocalStorage(city) {
    var history = [localStorage.getItem('history')] || [];
   // console.log("history", history)
    history.push(city)
    localStorage.setItem('history', history);
    buildHistory();
}

function buildHistory(){
    cityList.innerHTML = '';
    var searchHistory = localStorage.getItem('history').split(',');
    console.log('search history', searchHistory)

    searchHistory.forEach(function(searchCity){
        // 1. Create the element
        var liEl = document.createElement('li');
        // 2. Give element content
        liEl.textContent = searchCity;
        liEl.setAttribute('value', searchCity);
        // 3. Append to the page
        cityList.append(liEl)

        //TO DO: Add click listener to list items so the pop up the weather 
        // Hint: call currentWeather using value of button :)
    })

}

buildHistory();