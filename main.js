var data;
var api_key = "Tragen Sie hier Ihren Key ein";
var lat = 49.017255;
var lon = 8.390352;
var host = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + api_key;

$.getJSON(host, data, success);

function success(data) {
    document.getElementById("town").innerText = "Wetter in " + data.name;
    document.getElementById("temp").innerText = (data.main.temp - 273.5).toFixed(2) + "°C";
    document.getElementById("icon").src = "icons/" + data.weather[0].icon + ".png";
}

