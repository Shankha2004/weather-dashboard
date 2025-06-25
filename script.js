document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector(".fa-magnifying-glass");
    const input = document.getElementById("searchbox");

    icon.addEventListener("click", function () {
        const city = input.value.trim();
        if (city) {
            getWeather(city);
        } else {
            alert("Please enter a city name");
        }
    });
});


function getWeather(city) {
    const apiKey = "yout_api_key"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("temp-value").textContent = data.main.temp;
                document.getElementById("description-text").textContent = data.weather[0].description;
                document.getElementById("wind-value").textContent = data.wind.speed;
                document.getElementById("humidity-value").textContent = data.main.humidity;
            } else {
                alert("City not found!");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong!");
        });

        
}


