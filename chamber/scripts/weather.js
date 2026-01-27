const apiKey = "f29e5ca6e04b85da655fad65eca2eb15";
const city = "Santander,CO";

async function getWeather() {
    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
        );
        const data = await response.json();

        const iconCode = data.weather[0].icon;
        document.getElementById("weather-icon").src =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("weather-icon").alt =
            data.weather[0].description;

        document.getElementById("temp").textContent = data.main.temp.toFixed(1);
        document.getElementById("description").textContent = data.weather[0].description;
        document.getElementById("high").textContent = data.main.temp_max.toFixed(1);
        document.getElementById("low").textContent = data.main.temp_min.toFixed(1);
        document.getElementById("humidity").textContent = data.main.humidity;

        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);

        document.getElementById("sunrise").textContent =
            sunrise.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        document.getElementById("sunset").textContent =
            sunset.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`
        );
        const forecastData = await forecastResponse.json();

        const forecastList = document.getElementById("forecast-list");
        forecastList.innerHTML = "";

        let dayCount = 0;

        forecastData.list.forEach(item => {
            if (item.dt_txt.includes("12:00:00") && dayCount < 3) {
                const li = document.createElement("li");

                const date = new Date(item.dt_txt);
                let label = "";

                if (dayCount === 0) label = "Today";
                else if (dayCount === 1) label = "Tomorrow";
                else label = date.toLocaleDateString("en-US", { weekday: "long" });

                li.textContent = `${label}: ${item.main.temp.toFixed(1)} °F`;
                forecastList.appendChild(li);

                dayCount++;
            }
        });

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

getWeather();