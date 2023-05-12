export function createRecipeDOM(recipe) {
    // Mapper  le tableau d'ingrédients et créer un nouveau tableau de chaînes de car qui contiennent la quantité, l'unité et le nom de chaque ingrédient
    const ingredientsList = recipe.ingredients?.map(ingredient => {
        // Utiliser un opérateur ternaire pour vérifier si les propriétés de quantité et d'unité existent dans l'objet d'ingrédient, si ce n'est pas le cas, les définir sur des chaînes vides
        const quantity = ingredient.quantity ? ingredient.quantity : '';
        const unit = ingredient.unit ? ingredient.unit : '';
        // Retourner une chaîne qui contient le nom de l'ingrédient, la quantité et l'unité  
        return `<div><strong>${ingredient.ingredient}</strong>: ${quantity} ${unit}</div>`;
    }).join(''); // Joindre le tableau de chaînes de car en une seule chaîne séparée par une chaîne vide

    // Créer un nouvel élément article
    const article = document.createElement('article');  
    const img=document.createElement('img');
   
    // Obtenir la description de la recette et définir le nombre de caractères à afficher ici 200
    const recipeDescription = recipe.description;
    const amount = 200;   

    // Raccourcir la description de la recette pour afficher uniquement les 200 premiers caractères et ajouter "..." si la description est plus longue
    const description ='<strong>description: <br></strong>'+( recipeDescription.substring(0, amount)  + (recipeDescription.length > amount ? "..." :""));
         
    // Ajouter plusieurs classes à l'élément article en utilisant classList.add()
   
    article.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');
    

    // Définir le contenu HTML de l'élément article
    // Obtenir le nom de la recette à partir de l'objet de recette
    // Obtenir le temps de préparation de la recette à partir de l'objet de recette
    // Afficher la liste des ingrédients
    // Afficher la description de la recette raccourcie
    article.innerHTML = `
    
        <div class="bg-light rounded-2">
       <img class="card_img">
            <div class="d-flex justify-content-between">
                <h2 class="card__title m-3">
                    ${recipe.name} 
                </h2>
                <span class="card__time m-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/>
                    </svg>
                    ${recipe.time} min 
                    </span>
                </div>
                <div class="row card__description p-3">
                    <div class="col">
                        ${ingredientsList} 
                    </div>
                    <div class="col" >
                        ${description} 
                    </div>
                </div>
            </div>
        `;
        
        
        return article;
}        
