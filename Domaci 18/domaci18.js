let btnSearch = document.querySelector("#btnSearch");

const apiUrl = "https://www.omdbapi.com/";

let apiKey = "b0c27dfc";

fetch(apiUrl + "?apikey=" + apiKey + "&s=The lord of the Rings")
	.then((result) => result.json())
	.then(function (result) {
		console.log(result);
	});

async function callOMDbApi(params) {
	const url = apiUrl + "?apikey=" + apiKey + "&" + params;

	const response = await fetch(url);

	return await response.json();
}

btnSearch.addEventListener("click", async function (e) {
	e.preventDefault();
	let inputSearch = document.querySelector("#searchMovie").value;
	let searchError = document.querySelector("#errorBtn");
	let cardMovies = document.querySelector("#cardsMovies");
	inputSearch = inputSearch.trim();

	searchError.innerHTML = "";
	cardMovies.innerHTML = "";

	if (inputSearch === "") {
		alert("Morate uneti naziv filma");
		return;
	}

	let result = await callOMDbApi("s=" + inputSearch);
	console.log(result);

	if (result.Response === "False") {
		searchError.innerText = result.Error;
	} else {
		for (let movie of result.Search) {
			let cardDiv = document.createElement("div");

			let movieTitle = document.createElement("h2");
			movieTitle.innerText = movie.Title;
			console.log(movieTitle);

			let moviePoster = document.createElement("img");
			moviePoster.setAttribute("src", movie.Poster);
			console.log(moviePoster);

			let movieType = document.createElement("p");
			movieType.innerText = movie.Type;
			console.log(movieType);

			let movieYear = document.createElement("p");
			movieYear.innerText = movie.Year;
			console.log(movieYear);

			cardDiv.append(movieTitle, moviePoster, movieType, movieYear);
			console.log(cardDiv);

			cardMovies.append(cardDiv);
		}
	}
});

//Poster
//:
//"//https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_SX300.jpg"
//Title
//:
//"The Lord of the Rings: The Two Towers"
//Type
//:
//"movie"
//Year
//:
//"2002"
//imdbID
//:
//"tt0167261"
