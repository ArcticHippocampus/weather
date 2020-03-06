const weather = document.getElementById('weather-state');
const temperature = document.getElementById('temp');
const feels = document.getElementById('feels-like');
const city = document.getElementById('lokalizacja');
const submitBtn = document.getElementById('submit');
const searchBox = document.getElementById('searchinput');
const img = document.querySelector('img');
let keyword = [];





function rightSearch(){
let search = searchBox.value;
fetch('https://api.openweathermap.org/data/2.5/weather?q='+ search + '&APPID=995e325e5959ba5c700518b15a9562d7')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    
    let file = data
    alert(file.weather[0].main)
    temperature.innerHTML = file.main.temp + ' F'
    city.innerHTML = file.name 
    feels.innerHTML = file.main.feels_like + ' F'
    weather.innerHTML = file.weather[0].description
    keyword.push(file.weather[0].main)
    alert(keyword)
  });
 
}



function leftSearch(){
  img.src = ''
  fetch('https://api.giphy.com/v1/gifs/search?api_key=bb2006d9d3454578be1a99cfad65913d&q='+keyword[0])
  
  .then((response) => {
    return response.json();
  })
  .then((giphy) => { 
    console.log(giphy)
    img.src = giphy.data[0].images.original.url
    keyword = [];
    });
    
  }
  























function allSearch() {
rightSearch();
leftSearch();
keyword = [];

}

submitBtn.addEventListener("click", allSearch);






