function displayRecipe (response){
	new Typewriter("#recipe", {
		strings: response.data.answer,
		autoStart: true,
		cursor: null,
		delay: 1,
	});
}

function generateRecipe(event) {
	event.preventDefault();

	let recipeIngredients = document.querySelector("#recipe-ingredients");

	let apiKey = "bc4649524ebb028af8032a47bt4c53o0";
	let context = "You are a talented recipe writer. You love to create simple recipes for toddlers. Your mission is to write recipes with a clear list of ingredients and the quantities of the ingredients should be in gram and millilitres. The method of the recipes should be written simply with clear steps to follow. All recipes should avoid soy and dairy and be suitable for toddlers. Please write the recipe in basic HTML and be sure to follow the user instructions.";
	let prompt = `User instructions: Generate a recipe suitable for a toddler. The recipe must include the ingredients ${recipeIngredients.value}. It should not contain any soy, soya, dairy, milk or butter. `;
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

	let recipeElement = document.querySelector("#recipe");
	recipeElement.classList.remove("hidden");
	recipeElement.innerHTML = `<span class="blink">🌽Generating your soy and dairy-free recipe with ${recipeIngredients.value}...🍉</span>`;

	console.log("Generating Poem");
	console.log(`Prompt: ${prompt}`);
	console.log(`Context: ${context}`);

	axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
