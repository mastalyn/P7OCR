import { createRecipeDOM } from './pages/createRecipeDOM.js';
import recipes from '../data/recipes.js';

const recipesSection = document.querySelector('#recipes');

recipes.forEach((recipe) => {
    recipesSection.appendChild(createRecipeDOM(recipe));
});


