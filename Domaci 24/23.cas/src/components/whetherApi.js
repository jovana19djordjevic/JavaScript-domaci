import axios from "axios";

const apiKey = "487a3016fcca41a78a9101757260902";

export async function getCurrentWhetherForLocation(location) {
	try {
		const response = await axios.get(process.env.API_URL + "/v1/current.json", {
			params: {
				key: process.env.API_KEY,
				q: location,
				aqi: "no",
			},
		});
		return response;
	} catch (exception) {
		return alert("Something was wrong");
	}
}

//https://api.weatherapi.com/v1/forecast.json?key=487a3016fcca41a78a9101757260902&q=London&days=7&aqi=no&alerts=no

export async function getFunctionForecast(location, days) {
	try {
		console.log("FORECAST FUNKCIJA START", location);
		const response = await axios.get(
			process.env.API_URL + "/v1/forecast.json",
			{
				params: {
					key: process.env.API_KEY,
					q: location,
					days: days,
					aqi: "no",
					alerts: "no",
				},
			},
		);
		return response;
	} catch (exception) {
		return alert("Something was wrong");
	}
}

//https://api.weatherapi.com/v1/future.json?key=487a3016fcca41a78a9101757260902&q=London&dt=2026-03-30

export async function getWhetherInFuture(location, date) {
	try {
		const response = await axios.get(process.env.API_URL + "/v1/future.json", {
			params: {
				key: process.env.API_KEY,
				dt: date,
				q: location,
			},
		});
		return response;
	} catch (exception) {
		return alert("Something was wrong");
	}
}
