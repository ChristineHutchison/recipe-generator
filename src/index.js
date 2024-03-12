function generateRecipe(event) {
	event.preventDefault();

	let recipeElement = document.querySelector("#recipe");

	new Typewriter("#recipe", {
		strings: `<h2><strong>Pumpkin Pie</strong></h2>
					<h2>Ingredients:</h2>
					<ul>
						<li>1/2 Cup Brown Sugar, firmly packed</li>
						<li>1/4 Cup White Sugar</li>
						<li>1 Teaspoon Ground Cinnamon</li>
						<li>1/2 Teaspoon Ground Ginger</li>
						<li>1/4 Teaspoon Ground Nutmeg or Allspice</li>
						<li>1/4 Teaspoon Ground Cloves</li>
						<li>1/2 Teaspoon Salt</li>
						<li>2 Large Eggs</li>
						<li>
							15 oz. of pumpkin puree (a little shy of 2 cups) — I like to use
							Happy Belly Organic Pumpkin Puree
						</li>
						<li>1 Teaspoon Vanilla Extract</li>
						<li>
							1 Cup Regular Coconut Milk (I like So Delicious Coconut Milk)
						</li>
						<li>1 Wholly Wholesome Organic Traditional 9″ frozen pie shell</li>
					</ul>
					<h2>Directions:</h2>
					<ul>
						<li>Preheat your oven to 425ºF.</li>
						<li>
							Combine the sugars, cinnamon, ginger, nutmeg or allspice, cloves
							and salt in a small bowl.
						</li>
						<li>
							In a large bowl, beat the eggs. Beat in the sugar mixture,
							pumpkin, and vanilla until smooth. Fold in the coconut milk.
						</li>
						<li>
							Pour the filling into the unbaked pie crust and bake for 15
							minutes. Reduce the temperature to 350ºF and continue to bake for
							50 to 60 minutes, or until a knife inserted comes out clean. It
							may be a bit wobbly still, but it will firm-up as it cools.
						</li>
						<li>
							Allow the pie to cool on a wire rack for 2 hours (Be patient! This
							is important). Serve or refrigerate until ready to serve.
						</li>
					</ul>`,
		autoStart: true,
		cursor: null,
		delay: 20,
	});
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
