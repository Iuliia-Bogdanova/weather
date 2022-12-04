document.addEventListener("DOMContentLoaded", function (event) {
    getWeather('Izhevsk');
});

function getWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d6e481919bcce169184f16536bb64bd8&units=metric')
        .then(response => response.json())
        .then(weather => {
            console.log(weather);
            document.querySelector('.city')
            .innerText = weather.name;
            document.querySelector('.date')
            .innerText = new Date;
            document.querySelector('.tempValue').innerText = Math.round(weather.main.temp) + " ° ";
            document.querySelector('.weather').innerText = weather.weather[0].description;
            document.querySelector('.humidity').innerText = weather.main.humidity + " % ";
        })
        .catch(err => console.log(err));
}