import { fetchRecipe, displayRecipe } from './module.js';

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const recipeContainer = document.getElementById('recipeContainer');

searchButton.addEventListener('click', async () => {
    const recipeName = searchInput.value.trim();
    try {
        const recipeData = await fetchRecipe(recipeName);
        console.log('Recipe Data:', recipeData); // Add this console log for debugging
        displayRecipe(recipeData, recipeContainer);
    } catch (error) {
        console.error('Error fetching recipe:', error);
    }
});
