async function start() {
    const weatherPromise = await fetch("https://apiweather.gov/gridpoints/MFL/110,50/forecast")
    const weatherData = await weatherPromise.json()

    const ourTemperature = weatherData.properties.periods[0].temperature
    document.querySelector("#temperature-output").textContent = ourTemperature
    
}

start()