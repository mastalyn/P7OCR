import { createRecipeDOM } from "../pages/createRecipeDOM.js";
import DropDownList from "../utils/DropDownList.js";
import tags from "../utils/tags.js";

export default class ddl {
  recipes; // Tableau d'objets recettes.
  recipesSection; // Élément HTML pour afficher les recettes filtrées ou non.
  filterBytags = []; // Tableau des tags sélectionnés pour filtrer les recettes.
  mainSearch; // Élément HTML pour la recherche par tags.

  // Le constructeur prend deux arguments, "recipes" et "recipesSection",
  // qui sont un tableau d'objets recettes et un élément HTML où les recettes filtrées seront affichées.
  // On initialise "filterByTags" et "mainsearch" et on appelle les fonctions "tags" et "DropDownList".
  // On récupère l'élément avec son ID.
  constructor(recipes, recipesSection) {
    this.recipes = recipes;
    this.recipesSection = recipesSection;
    tags(this.filterBytags);
    DropDownList(recipes);
    this.mainsearch = document.getElementById("recipeInput");
    this.mainsearch.onkeyup = (event) => {
      if (event.target.value.length > 2) {
        const t0 = performance.now();
        this.search3(event.target.value);
        const t1 = performance.now();
        console.log(`Call to search took ${t1 - t0} milliseconds.`);
      } else {
        this.search("");
      }
    };
  }

  // La méthode "search" filtre les recettes en fonction des tags sélectionnés.
  // Elle crée un nouveau tableau appelé "filteredRecipes" en checkant chaque recette de "recipes"
  // et en vérifiant si elle contient l'un des tags sélectionnés.
  // S'il n'y a pas de tags sélectionnés, elle renvoie toutes les recettes.
  // Si une recette contient au moins un tag sélectionné, elle retourne la recette.
  // La fonction met ensuite à jour l'élément HTML avec les recettes filtrées.
  search(query) {
    const filteredRecipes = this.recipes.filter((recipe) => {
      const existingTag =
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.find((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(query.toLowerCase())
        );

      if (existingTag && this.filterBytags === []) {
        return recipe;
      }

      if (existingTag && this.isFilteredByTag(recipe)) {
        return recipe;
      }

      return false;
    });

    //on affiche les recttes
    this.recipesSection.innerHTML = "";
    filteredRecipes.forEach((recipe) => {
      this.recipesSection.appendChild(createRecipeDOM(recipe));
    });

    //  DropDownList(filteredRecipes);
  }

  nativeFind(array, callback) {
    const l = array.length;
    for (let i = 0; i < l; i++) {
      if (callback(array[i])) {
        return array[i];
      }
    }
    return null;
  }

  nativeFilter(array, callback) {
    const l = array.length;
    const results = [];
    for (let i = 0; i < l; i++) {
      if (callback(array[i])) {
        results.push(array[i]);
      }
    }
    return results;
  }
  search2(query) {
    const filteredRecipes = this.nativeFilter(this.recipes, (recipe) => {
      const existingTag =
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase()) ||
        this.nativeFind(recipe.ingredients, (ingredient) =>
          ingredient.ingredient.toLowerCase().includes(query.toLowerCase())
        );

      if (existingTag && this.filterBytags === []) {
        return recipe;
      }

      if (existingTag && this.isFilteredByTag(recipe)) {
        return recipe;
      }

      return false;
    });
       //on affiche les recttes
       this.recipesSection.innerHTML = "";
       filteredRecipes.forEach((recipe) => {
         this.recipesSection.appendChild(createRecipeDOM(recipe));
       });
     }
     search3(query) {
      const filteredRecipes = this.nativeFilter(this.recipes, (recipe) => {
        const existingTag =
          recipe.name.toLowerCase().includes(query.toLowerCase()) ||
          recipe.description.toLowerCase().includes(query.toLowerCase()) ||
          this.nativeForEach(recipe.ingredients, (ingredient) =>
            ingredient.ingredient.toLowerCase().includes(query.toLowerCase())
          );
  
        if (existingTag && this.filterBytags === []) {
          return recipe;
        }
  
        if (existingTag && this.isFilteredByTag(recipe)) {
          return recipe;
        }
  
        return false;
      });
         //on affiche les recttes
         this.recipesSection.innerHTML = "";
         filteredRecipes.forEach((recipe) => {
           this.recipesSection.appendChild(createRecipeDOM(recipe));
         });
       }

  nativeForEach(recipe){
  let isRecipeFiltered = true;
  const filterBytagsLength = this.filterBytags.length;

  for (let i = 0; i < filterBytagsLength; i++) {
    const tag = this.filterBytags[i];

    if (tag.tagCategory === "ingredient") {
      const ingredientsLength = recipe.ingredients.length;
      let isMatchingIngredient = false;

      for (let j = 0; j < ingredientsLength; j++) {
        const ingredient = recipe.ingredients[j].ingredient.toLowerCase();

        if (ingredient === tag.name.toLowerCase()) {
          isMatchingIngredient = true;
          break;
        }
      }

      if (!isMatchingIngredient) {
        isRecipeFiltered = false;
        break;
      }
    } else if (tag.tagCategory === "appliance") {
      if (recipe.appliance.toLowerCase() !== tag.name.toLowerCase()) {
        isRecipeFiltered = false;
        break;
      }
    } else if (tag.tagCategory === "ustensil") {
      const ustensilsLength = recipe.ustensils.length;
      let isMatchingUstensil = false;

      for (let k = 0; k < ustensilsLength; k++) {
        const ustensil = recipe.ustensils[k].toLowerCase();

        if (ustensil === tag.name.toLowerCase()) {
          isMatchingUstensil = true;
          break;
        }
      }

      if (!isMatchingUstensil) {
        isRecipeFiltered = false;
        break;
      }
    }
  }

 // return nativeForEach;
}


 

  isFilteredByTag(recipe) {
    let isRecipeFiltered = true;

    this.filterBytags.forEach((tag) => {
      if (tag.tagCategory === "ingredient") {
        // Vérifie si au moins un ingrédient correspond au  tag et le converti en minuscule
        // some() est utilisé pour vérifier si au moins un élément des tableaux ingredients ou ustensils correspond au  tag.
        // Elle prend une fonction de callback  en argument, elle est exécutée pour chaque élément du tableau jusqu'à ce qu'elle retoune true,
        // ou jusqu'à ce que la fin du tableau soit atteinte.
        const isMatchingIngredient = recipe.ingredients.some(
          (ingredient) => ingredient.ingredient.toLowerCase() === tag.name
        );
        if (!isMatchingIngredient) {
          // Si aucun ingrédient ne correspond au tag,  alors false
          isRecipeFiltered = false;
        }
      } else if (tag.tagCategory === "appliance") {
        if (recipe.appliance.toLowerCase() !== tag.name) {
          // Si l'appareil ne correspond pas au tag,  alors false
          isRecipeFiltered = false;
        }
      } else if (tag.tagCategory === "ustensil") {
        // Vérifie si au moins un ustensile correspond au nom du tag
        const isMatchingUstensil = recipe.ustensils.some(
          (ustensil) => ustensil.toLowerCase() === tag.name
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
  // Elle appelle ensuite la méthode "search" avec la valeur actuelle de "mainsearch".
  addTagFilter(name, tagCategory) {
    if (this.filterBytags.find((tag) => tag.name === name)) return;
    this.filterBytags.push({ name, tagCategory });
    this.search(this.mainsearch.value);
    tags(this.filterBytags);
  }

  // "removeTagFilter" prend "tagName" en argument et supprime l'objet name tag du tableau "filterBytags".
  // Elle appelle ensuite la méthode "search" avec la valeur actuelle de "mainsearch".
  removeTagFilter(tagName) {
    this.filterBytags = this.filterBytags.filter((tag) => tag.name !== tagName);
    this.search(this.mainsearch.value);
    tags(this.filterBytags);
  }
}
