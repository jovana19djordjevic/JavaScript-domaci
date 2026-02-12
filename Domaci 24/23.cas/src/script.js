import axios from "axios";
import { getUserLocation } from "./components/location.js";
import {
	getCurrentWhetherForLocation,
	getWhetherInFuture,
} from "./components/whetherApi.js";
import { getFunctionForecast } from "./components/whetherApi.js";
import { getDateInFuture } from "./helpers/dateHelper.js";
import { getgeoLocationForCoords } from "./components/openWeatherApi.js";

let location = localStorage.getItem("location") || getUserLocation();

localStorage.setItem("location", location);

document.querySelector("#changeLocation").addEventListener("click", () => {
	location = getUserLocation();

	localStorage.setItem("location", location);
	updateLocation(getUserLocation());
});

document
	.querySelector("#showWhetherForMyLocation")
	.addEventListener("click", async () => {
		if (!navigator.geolocation) {
			return alert("Vas browser ne dozvoljava");
		}
		navigator.geolocation.getCurrentPosition(async (position) => {
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;

			let coords = await getgeoLocationForCoords(lat, lon);

			let cityName = coords.data[0]["name"];

			if (cityName.includes("Municipality")) {
				cityName = cityName.replace("Municipality", "");
			}

			updateLocation(cityName);

			console.log(lat, lon);
		});
	});

//https://api.weatherapi.com/v1/current.json?key=487a3016fcca41a78a9101757260902&q=London&aqi=no

const response = await getCurrentWhetherForLocation(location);
const responseForeCast = await getFunctionForecast(location, 7);

if (response.data.current.is_day) {
	document.querySelector("body").style.background = "grey";
	console.log("day");
}

function showCurrentWeather(data) {
	const container = document.querySelector("#foreCast");

	const div = document.createElement("div");
	div.classList.add("section");

	div.innerHTML = `
    <h2>Trenutno vreme</h2>
    <div class="temp">${response.data.current.temp_c}°C</div>
  `;

	container.append(div);
}
const days = responseForeCast.data.forecast.forecastday;

function getForeCastDays(days) {
	const container = document.querySelector("#foreCast");

	const foreCastSection = document.createElement("div");
	foreCastSection.classList = "section";
	foreCastSection.innerHTML = `<h2>Sledeca 3 dana</h2>`;

	const daysWrapper = document.createElement("div");
	daysWrapper.classList = "days";

	days.slice(0, 3).forEach((forecast) => {
		const card = document.createElement("div");
		card.classList.add("day");
		card.innerHTML = `<p>${forecast.date}</p>
						<p>${forecast.day.maxtemp_c}°C</p>
						<p>${forecast.day.mintemp_c}°C</p>`;

		daysWrapper.append(card);
	});

	foreCastSection.append(daysWrapper);
	container.append(foreCastSection);
}

const dateFormatted = getDateInFuture(30);

const futureWhether = await getWhetherInFuture(location, dateFormatted);

console.log(futureWhether);

function updateLocation(newLocation) {
	location = newLocation;
	localStorage.setItem("location", newLocation);
}

function showLongTerm(data) {
	const container = document.querySelector("#foreCast");
	const day = data.forecast.forecastday[0].day;

	const section = document.createElement("div");
	section.classList.add("section");

	section.innerHTML = `
    <h2>Dugoročna prognoza (+30 dana)</h2>
    <p>Datum: ${dateFormatted}</p>
    <p>Maks: ${day.maxtemp_c}°C • Min: ${day.mintemp_c}°C</p>
    
  `;

	container.append(section);
}
showCurrentWeather(response.data);
getForeCastDays(days);
showLongTerm(data, dateFormatted);
