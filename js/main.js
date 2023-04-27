import { createRecipeDOM } from './pages/createRecipeDOM.js';
import mainSearch from './search/mainSearch.js';
import recipes from '../data/recipes.js';

// Récupére l'élément de section des recettes dans le DOM
const recipesSection = document.querySelector('#recipes');

// boucler le tableau de recettes et ajouter chaque recette à  recipesSection en utilisant la fonction createRecipeDOM
recipes.forEach((recipe) => {
    recipesSection.appendChild(createRecipeDOM(recipe));
});

//  nouvelle instance de la classe ddl, en passant un tableau de recettes recipes et recipesSection en tant qu'arguments
window.mainSearch = new mainSearch(recipes, recipesSection);
