import { createRecipeDOM } from './pages/createRecipeDOM.js';
import ddl from './search/ddl.js';
import recipes from '../data/recipes.js';


const recipesSection = document.querySelector('#recipes');

recipes.forEach((recipe) => {
    recipesSection.appendChild(createRecipeDOM(recipe));
});

window.search = new ddl(recipes, recipesSection)