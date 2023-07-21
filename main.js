// API KEY : 46941a0b9b7bb20bbb4b5e4ec5d94134
var APIKey = '46941a0b9b7bb20bbb4b5e4ec5d94134';
var city;
var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)