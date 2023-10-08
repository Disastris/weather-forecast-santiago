// API KEY : 46941a0b9b7bb20bbb4b5e4ec5d94134
var APIKey = '46941a0b9b7bb20bbb4b5e4ec5d94134';
var city;
var fetchButton = document.getElementById('fetch-button');
var tableBody = document.getElementById('repo-table');

// // This is to display the current date
// var todayEl = dayjs();
// var currentDateEl = document.getElementById("currentDate");
// currentDateEl.innerHTML = todayEl.format(" (MM/DD/YYYY)");

// This is the fetch function and all its glory
function getApi(){
    city = document.querySelector('#fetch-input').value
    var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
var lat = data.coord.lat
var lon = data.coord.lon
var queryURLNew = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`

fetch(queryURLNew).then(res=> res.json()).then(

  data2 => {console.log(data2)
  
      document.getElementById("fetch-weather").innerHTML=
  `
  <h3>City: ${city} (${data2.list[0].dt_txt.substring(0,10)})</h3>
  <p>Temp:${data2.list[0].main.temp}</p>
  
  `
for(var i =5; i<40; i+=8){

  document.getElementById('forecast-weather').innerHTML+=
  `
  <img src=' https://openweathermap.org/img/wn/${data2.list[0].weather[0].icon}@2x.png'/>
  <h3>Date: ${data2.list[i].dt_txt.substring(0, 10)}</h3>
  <p>Temp:${data2.list[i].main.temp}</p>
  <p>Wind: ${data2.list[i].wind.speed}</p>
  `
}

}
)

    // for (var i = 0; i < data.length; i++) {
    //     //Creating Elements, tablerow, table data, and a(n) anchor
    //   var createTableRow = document.createElement('tr');
    //   var tableData = document.createElement('td');
    //   var link = document.createElement('a');
      
    //     //Setting the text of link and the href of the link
    //   link.textContent = data[i].html_url;
    //   link.href = data[i].html_url;

    //     //Appending the link to the tabledata and then appending the tabledata to the tablerow
    //     //The Tablerow then gets appended to the tablebody
    //     tableData.appendChild(link);
    //     createTableRow.appendChild(tableData);
    //     tableBody.appendChild(createTableRow);    

})
};

fetchButton.addEventListener('click',getApi);

