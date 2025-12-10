const apiKey = '003a04db4db142f479fa9aa76d92df10';
const apiUrl1 ='https://api.openweathermap.org/data/2.5/weather?'


const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const weatherNowElement = document.getElementById('weathernow');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    /*const url = `${apiUrl}?id=524901&q=${location}&appid=${apiKey}&units=metric`; */
    const url = `${apiUrl1}q=${location}&appid=${apiKey}&units=metric`;
    

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].main;
            try {
            weatherNowElement.textContent = data.weather[1].main;
                
            } catch (error) {
                
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}