let playerDiv = document.querySelector("#playersDiv");
const showAllPlayer = document.querySelector("#showAllPlayer");
const playerWraper = document.querySelector("#playerWraper");

const apiUrl = "https://api.balldontlie.io/v1/players";

const apiKey = "76155f10-e497-4576-8ddc-88173d2b0815";

let allPlayers = [];

document.querySelector("#btnCheck").addEventListener("click", async () => {
	const inputSearch = document.querySelector("#inputText").value.trim();

	let searchApi = apiUrl;

	if (inputSearch !== "") {
		searchApi = apiUrl + "?search=" + inputSearch;
	}
	console.log(searchApi);

	const response = await fetch(searchApi, {
		headers: {
			Authorization: apiKey,
		},
	});
	console.log(response.status);

	const data = await response.json();
	allPlayers = data.data;

	playerDiv.innerHTML = "";

	for (let player of data.data) {
		console.log(player);
		let playerCard = document.createElement("div");
		playerCard.classList = "playerCard";

		let firstName = document.createElement("h2");
		firstName.innerText = player.first_name;
		console.log(firstName);

		let lastName = document.createElement("h2");
		lastName.innerText = player.last_name;
		console.log(lastName);

		let clubName = document.createElement("h5");
		clubName.innerText = player.team.abbreviation;
		console.log(clubName);

		let clubCity = document.createElement("h5");
		clubCity.innerText = player.team.city;

		playerCard.append(firstName, lastName, clubName, clubCity);
		playerDiv.append(playerCard);

		playerCard.addEventListener("click", async () => {
			let popup = document.querySelector("#popup");
			let contentPopup = document.querySelector("#contentPopup");

			contentPopup.innerHTML = "";

			const loader = document.querySelector("#loader");
			loader.classList = "loader";
			contentPopup.append(loader);

			let playerImg = document.createElement("img");
			playerImg.src =
				"https://cdn.nba.com/headshots/nba/latest/1040x760/" +
				player.id +
				".png";

			playerImg.classList = "popupImg";

			contentPopup.append(playerImg);
			popup.style.display = "flex";
		});
	}
});

document.querySelector("#close").addEventListener("click", () => {
	document.querySelector("#popup").style.display = "none";
});
