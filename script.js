let apiKey= '09bf505a2665dd9ad67bb85b6880467e';
let cityName;

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


//Obtener los elementos del DOM
let searchButton= document.getElementById('searchButton');
let weatherData= document.getElementById('weatherData');


//Agregar el evento click al botón "Buscar"
searchButton.addEventListener('click', function (){
    let cityName= document.getElementById('cityEntry').value;
    if (cityName) {
       fetchAPI(cityName);
    }
})

//Fetch API
function fetchAPI (cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        showData(response)
    })
}

//Mostrar los datos en el DOM
function showData(data) {
    weatherData.innerHTML= '';
    const cityName= data.name;
    const country=data.sys.country;
    const temperature= data.main.temp;
    const weather= data.weather[0].description
    const icon=data.weather[0].icon;
    
    console.log(cityName);
    console.log(temperature);
    console.log(weather);

    const cityTitle= document.createElement('h2');
    cityTitle.textContent= `${cityName}, ${country}`;

    const temperatureInfo=document.createElement('p');
    temperatureInfo.textContent= `The temperature is ${Math.floor(temperature-273.15)} ºC`;

    const weatherInfo=document.createElement('p');
    weatherInfo.textContent= `The weather description is: ${weather}`;

    const iconImage=document.createElement('img');
    iconImage.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;

    weatherData.appendChild(cityTitle);
    weatherData.appendChild(temperatureInfo);
    weatherData.appendChild(weatherInfo);
    weatherData.appendChild(iconImage);

    /* Otra forma de hacerlo
    weatherData.innerHTML= `
    <h2>${cityName}, ${country}</h2>
    <p>The temperature is ${Math.floor(temperature-273.15)} ºC</p>
    <p>${weather}</p>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" >`
    */
}

