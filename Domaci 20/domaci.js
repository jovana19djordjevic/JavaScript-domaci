let mealHolder = document.querySelector("#mealHolder");
const mealDBApi = "https://www.themealdb.com/api/json/v1/1/";

const coctailApi = "https://www.thecocktaildb.com/api/json/v1/1/";

const data = await getMealDBData("categories.php");

let select = document.querySelector("#categoriesFood");

for (let category of data.categories) {
	appendCategory(category);
}

select.addEventListener("change", async () => {
	mealHolder.innerHTML = "";

	const mealData = await getMealDBData("filter.php?c=" + select.value);

	for (let meal of mealData.meals) {
		let mealDiv = showMeal(meal);

		mealDiv.addEventListener("click", async () => {
			let recipes = await getMealDBData("lookup.php?i=" + meal.idMeal);

			if (!mealData.meals) return;

			document.querySelector("#popupRecipe").innerText =
				recipes.meals[0].strInstructions;
			document.querySelector("#popup").style.display = "flex";

			let randomCoctails = document.querySelector("#randomCoctails");
			randomCoctails.innerHTML = "";
			let coctailResponse = await fetch(coctailApi + "random.php");
			let coctailData = await coctailResponse.json();

			let coctailsDiv = document.createElement("div");
			coctailsDiv.classList = "drinkDiv";

			let nameCoctails = document.createElement("h1");
			nameCoctails.innerText = coctailData.drinks[0].strCategory;
			console.log(nameCoctails);

			let titleCoctails = document.createElement("h5");
			titleCoctails.innerText = coctailData.drinks[0].strDrink;
			console.log(titleCoctails);

			let imgCoctails = document.createElement("img");
			imgCoctails.setAttribute("src", coctailData.drinks[0].strDrinkThumb);
			imgCoctails.classList = "imgCoctails";
			console.log(imgCoctails);

			coctailsDiv.append(imgCoctails, nameCoctails, titleCoctails);

			randomCoctails.append(coctailsDiv);

			//strCategory
			//strDrink
			//strDrinkThumb

			console.log(coctailData.drinks[0]);
		});
	}
});

document.querySelector("#closePopup").addEventListener("click", () => {
	document.querySelector("#popup").style.display = "none";
});

function showMeal(meal) {
	let mealDiv = document.createElement("div");
	mealDiv.classList = "singleMeal";

	let mealImg = document.createElement("img");
	mealImg.setAttribute("src", meal.strMealThumb);
	mealImg.classList = "mealImg";

	let mealName = document.createElement("h5");
	mealName.innerText = meal.strMeal;

	mealDiv.append(mealImg, mealName);

	mealHolder.append(mealDiv);

	return mealDiv;
}

function appendCategory(category) {
	let categoryElement = document.createElement("option");
	categoryElement.value = category.strCategory;
	categoryElement.innerText = category.strCategory;

	select.append(categoryElement);
}

async function getMealDBData(endpoint) {
	let response = await fetch(mealDBApi + endpoint);
	return response.json();
}
