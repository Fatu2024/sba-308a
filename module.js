export async function fetchRecipe(recipeName) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
    if (!response.ok) {
        throw new Error('Could not fetch recipe');
    }
    const data = await response.json();
    return data.meals; // Assuming API response has a 'meals' property containing recipe data
}

export function displayRecipe(recipeData, container) {
    container.innerHTML = ''; // Clear previous content
    if (!recipeData || recipeData.length === 0) {
        container.textContent = 'Recipe not found';
        return;
    }
    recipeData.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipe.strMeal;

        const ingredientsList = document.createElement('ul');
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            if (ingredient) {
                const ingredientItem = document.createElement('li');
                ingredientItem.textContent = ingredient;
                ingredientsList.appendChild(ingredientItem);
            }
        }

        const instructions = document.createElement('p');
        instructions.textContent = recipe.strInstructions;

        recipeCard.appendChild(recipeTitle);
        recipeCard.appendChild(ingredientsList);
        recipeCard.appendChild(instructions);

        container.appendChild(recipeCard);
    });
}
