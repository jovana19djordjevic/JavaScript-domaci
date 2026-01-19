let params = new URLSearchParams(window.location.search);

let recipeId = params.get(`id`);

let recipeElement = document.querySelector("#recipe");
let recipeSelect = document.querySelector("#recipeSelect");

fetch("https://dummyjson.com/recipes/" + recipeId)
	.then((response) => response.json())
	.then(function (data) {
		let recipeName = document.createElement("h1");
		recipeName.innerText = data.name;

		recipeElement.append(recipeName);
	});

fetch("https://dummyjson.com/recipes/tags")
	.then((response) => response.json())
	.then(function (data) {
		for (let reci of data) {
			let recipeOption = document.createElement("option");
			recipeOption.value = reci;
			recipeOption.innerText = reci;

			recipeSelect.appendChild(recipeOption);
		}
	});

recipeSelect.addEventListener("change", function () {
	let selectedTag = recipeSelect.value;

	window.location.href = "index.html?tag=" + selectedTag;
});
