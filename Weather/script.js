const API_KEY = "8bfc18ffda404dfd9dc100720251708";
const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city");
const result = document.getElementById("result");

async function getWeather(city) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("City not found");
  return res.json();
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  result.textContent = "Loading...";
  try {
    const data = await getWeather(city);
    const temp = data.current.temp_c;
    const desc = data.current.condition.text;
    const humidity = data.current.humidity;

    result.innerHTML = `
      <div><strong>${data.location.name}, ${data.location.country}</strong></div>
      <div>Temperature: ${temp} °C</div>
      <div>Condition: ${desc}</div>
      <div>Humidity: ${humidity}%</div>
    `;
  } catch (err) {
    result.textContent = "Error: " + err.message;
  }
});