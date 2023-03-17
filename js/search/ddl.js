import {createRecipeDOM} from '../pages/createRecipeDOM.js';
import DropDownList from "../utils/DropDownList.js";
import tags from "../utils/tags.js";

export default class ddl {
    recipes; // Tableau d'objets recettes.
    recipesSection; // Élément HTML pour afficher les recettes filtrées ou non.
    filterBytags = []; // Tableau des tags sélectionnés pour filtrer les recettes.
    searchByTags; // Élément HTML pour la recherche par tags.
    
    // Le constructeur prend deux arguments, "recipes" et "recipesSection", 
    // qui sont un tableau d'objets recettes et un élément HTML où les recettes filtrées seront affichées.
    // On initialise "filterByTags" et "searchByTags" et on appelle les fonctions "tags" et "DropDownList".
    // On récupère l'élément avec son ID.
    constructor(recipes, recipesSection) {
        this.recipes = recipes;
        this.recipesSection = recipesSection;
        tags(this.filterBytags);
        DropDownList(recipes);
        this.searchByTags = document.getElementById('tags_search');
    }
    
    // La méthode "search" filtre les recettes en fonction des tags sélectionnés. 
    // Elle crée un nouveau tableau appelé "filteredRecipes" en checkant chaque recette de "recipes" 
    // et en vérifiant si elle contient l'un des tags sélectionnés. 
    // S'il n'y a pas de tags sélectionnés, elle renvoie toutes les recettes. 
    // Si une recette contient au moins un tag sélectionné, elle retourne la recette. 
    // La fonction met ensuite à jour l'élément HTML avec les recettes filtrées.
    search() {
        const filteredRecipes = this.recipes.filter(recipe => {
            const existingTag = recipe.name
                || recipe.description           
                || recipe.ingredients.find(ingredient => ingredient);
                
            if (existingTag && this.filterBytags === []) {
                return recipe;
            }

            if (existingTag && this.isFilteredByTag(recipe)) {
                return recipe;
            }
           
            return false;
        });

      
       //on affiche les recttes 
            this.recipesSection.innerHTML = '';
            filteredRecipes.forEach(recipe => {
                this.recipesSection.appendChild(createRecipeDOM(recipe));
            });
        
        DropDownList(filteredRecipes);
    }
  
    isFilteredByTag(recipe) {
        let isRecipeFiltered = true;
      
        this.filterBytags.forEach(tag => {
          if (tag.tagCategory === 'ingredient') {
            // Vérifie si au moins un ingrédient correspond au  tag et le converti en minuscule 
           // some() est utilisé pour vérifier si au moins un élément des tableaux ingredients ou ustensils correspond  tag.
           // Elle prend une fonction de callback  en argument, elle est exécutée pour chaque élément du tableau jusqu'à ce qu'elle retoune true,
           // ou jusqu'à ce que la fin du tableau soit atteinte.
            const isMatchingIngredient = recipe.ingredients.some(
              ingredient => ingredient.ingredient.toLowerCase() === tag.name
            );
            if (!isMatchingIngredient) {
              // Si aucun ingrédient ne correspond au tag,  alors false
              isRecipeFiltered = false;
            }
          } else if (tag.tagCategory === 'appliance') {
            if (recipe.appliance.toLowerCase() !== tag.name) {
              // Si l'appareil ne correspond pas au tag,  alors false
              isRecipeFiltered = false;
            }
          }//voir pour faire avec description car on trouve des choses dans la description aussi 
           else if (tag.tagCategory === 'ustensil') {
            // Vérifie si au moins un ustensile correspond au nom du tag
            const isMatchingUstensil = recipe.ustensils.some(
              ustensil => ustensil.toLowerCase() === tag.name
            );
            if (!isMatchingUstensil) {
              // Si aucun ustensile ne correspond au tag,  alors False
              isRecipeFiltered = false;
            }
          }
          
        });
        
        return isRecipeFiltered;
      }
      

//"addTagFilter" prend deux arguments, "name" et "tagCategory", et ajoute un nouvel objet name tag au tableau "filterBytags". 
// Si le tag existe déjà, il ne l'ajoute pas à nouveau. 
// Elle appelle ensuite la méthode "search" avec la valeur actuelle de "searchByTags".
addTagFilter(name, tagCategory) {
    if (this.filterBytags.find(tag => tag.name === name)) 
        return;
    this.filterBytags.push({name, tagCategory});  
    this.search(this.searchByTags.value);     
    tags(this.filterBytags);
}

// "removeTagFilter" prend "tagName" en argument et supprime l'objet name tag du tableau "filterBytags".
// Elle appelle ensuite la méthode "search" avec la valeur actuelle de "searchByTags".
removeTagFilter(tagName) {
    this.filterBytags = this.filterBytags.filter(tag => tag.name !== tagName);  
    this.search(this.searchByTags.value);     
    tags(this.filterBytags);
}

               
}