let params = new URLSearchParams(window.location.search);
let tag = params.get("tag");

let recipesHolder = document.querySelector("#recipes");
let recipeSelect = document.querySelector("#recipeSelect");
fetch("https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc")
	.then((response) => response.json())
	.then(function (data) {
		for (let recipe of data.recipes) {
			appendCookingRecipes(recipe);
		}
	});

fetch("https://dummyjson.com/recipes/tags")
	.then((response) => response.json())
	.then(function (data) {
		for (let reci of data) {
			let recipeOption = document.createElement("option");
			recipeOption.value = reci;
			recipeOption.innerText = reci;
			recipeOption.append(reci);

			recipeSelect.appendChild(recipeOption);
		}
	});

recipeSelect.addEventListener("change", function () {
	let apiUrl = "https://dummyjson.com/recipes/tag/" + this.value;

	fetch(apiUrl)
		.then((response) => response.json())
		.then(function (data) {
			recipesHolder.innerHTML = "";
			for (let recipe of data.recipes) {
				appendCookingRecipes(recipe);
			}
		});
});

function buildINstructionsElement(instructions) {
	let recipeInstruction = document.createElement("ul");

	for (let instruction of instructions) {
		let recipeList = document.createElement("li");
		recipeList.className = "recipeList";
		recipeList.innerHTML = instruction;
		recipeInstruction.appendChild(recipeList);
	}
	return recipeInstruction;
}

function appendCookingRecipes(recipe) {
	let cookingINstructions = buildINstructionsElement(recipe.instructions);

	let singleRecipe = document.createElement("div");

	let recipeTitle = document.createElement("h1");
	recipeTitle.innerText = recipe.name;

	let recipeCuisine = document.createElement("p");
	recipeCuisine.innerText = recipe.cuisine;

	let permalinkElement = document.createElement("a");
	permalinkElement.innerText = "Pogledaj recept";
	permalinkElement.href = "permalink.html?id=" + recipe.id;

	singleRecipe.append(
		recipeTitle,
		recipeCuisine,
		cookingINstructions,
		permalinkElement,
	);

	recipesHolder.append(singleRecipe);
}

if (tag) {
	fetch("https://dummyjson.com/recipes/tag/" + tag)
		.then((response) => response.json())
		.then(function (data) {
			recipesHolder.innerHTML = "";
			for (let recipe of data.recipes) {
				appendCookingRecipes(recipe);
			}
		});
} else {
	fetch("https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc")
		.then((response) => response.json())
		.then(function (data) {
			recipesHolder.innerHTML = "";
			for (let recipe of data.recipes) {
				appendCookingRecipes(recipe);
			}
		});
}
