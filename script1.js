const apiKey = '2d8527c98eac5955e3c229d6333f4164';
const weatherBtn = document.getElementById('weatherBtn');
const cityInput = document.getElementById('cityInput');
const weatherOutput = document.getElementById('weatherOutput');

weatherBtn.addEventListener('click', async () => {
    const city = cityInput.value;
    if (!city) {
        weatherOutput.textContent = 'Please enter a city name.';
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found or API error.');
        }

        const data = await response.json();
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;

        weatherOutput.innerHTML = `
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
        `;
    } catch (error) {
        weatherOutput.textContent = `Error: ${error.message}`;
    }
});
