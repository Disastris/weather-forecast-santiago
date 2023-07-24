// API KEY : 46941a0b9b7bb20bbb4b5e4ec5d94134
var APIKey = '46941a0b9b7bb20bbb4b5e4ec5d94134';
var city;
var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

function getApi(){
fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    
    for (var i = 0; i < data.length; i++) {
        //Creating Elements, tablerow, table data, and a(n) anchor
      var createTableRow = document.createElement('tr');
      var tableData = document.createElement('td');
      var link = document.createElement('a');
      
        //Setting the text of link and the href of the link
      link.textContent = data[i].html_url;
      link.href = data[i].html_url;

        //Appending the link to the tabledata and then appending the tabledata to the tablerow
        //The Tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);    
}})
};

fetchButton.addEventListener('click',getApi);

