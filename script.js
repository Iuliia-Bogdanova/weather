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
            document.querySelector('.feels_like').innerText = "feels like " + Math.round(weather.main.feels_like)  + " ° ";
            document.querySelector('.weather').innerText = weather.weather[0].description;
            document.querySelector('.humidity').innerText = "humidity " + weather.main.humidity + " % ";
            document.querySelector('.visibility').innerText = "visibility " + weather.visibility + " m ";
        })
        .catch(err => console.log(err));
}