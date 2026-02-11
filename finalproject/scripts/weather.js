const apiKey = "f29e5ca6e04b85da655fad65eca2eb15";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Bogota&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
        throw new Error("Weather data not available");
        }

        const data = await response.json();

        document.querySelector("#temp").textContent = data.main.temp;
        document.querySelector("#humidity").textContent = data.main.humidity;
        document.querySelector("#description").textContent = data.weather[0].description;

        const icon = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        document.querySelector("#weatherIcon").src = iconUrl;
        document.querySelector("#weatherIcon").alt = data.weather[0].description;

    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

getWeather();