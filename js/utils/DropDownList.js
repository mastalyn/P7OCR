import onClick from "./onClick.js";
 // Appelle les trois fonctions pour créer les dropDown d'ingrédients, d'appareils et d'ustensiles.
export default function (recipes) {
    createIngredients(recipes)
    createAppliances(recipes)
    createUstensils(recipes)
   
}
// Cette fonction crée une dropDown d'ingrédients.
function createIngredients(recipes) {
      // Récupère l'élément HTML qui contiendra la dropDown.
    const wrapper = document.getElementById('ingredientsOptions')
     // Crée une Map qui contient les ingrédients uniques de tous les objets `recipe` dans le tableau recipes.
    const map = new Map
    recipes.forEach(recipe => recipe.ingredients.forEach(i => map.set(i.ingredient.toLowerCase())))
   
 // Génère du code HTML pour les boutons dans la dropDown.
    let html = ''
   map.forEach((value, ingredient) => html += `<li class="col-4">
                                                    <button onclick="window.mainSearch.addTagFilter('${ingredient}', 'ingredient')" 
                                                            class="border-0 bg-primary text-white m-2 p-1 text-start w-100">
                                                        ${ingredient}
                                                    </button>
                                                </li>`)
     // Définit le code HTML généré comme contenu de l'élément HTML de la dropDown .                                        
    wrapper.innerHTML = html
 // Récupère le bouton qui affichera la liste déroulante.
    const buttonToDisplayList = document.getElementById('ingredientsButton')
     // Ajoute un écouteur d'événements au bouton pour afficher la dropDown lorsqu'il est cliqué.
    buttonToDisplayList.addEventListener('click', (event) => {
        // cache le bouton ingedient
        event.target.classList.add('d-none')

        const input = event.target.parentNode.getElementsByTagName('input')[0]
        // affiche le input recherche
        input.classList.remove('d-none')
         // Affiche la dropDown .
        event.target.parentNode.getElementsByTagName('ul')[0].classList.remove('d-none')  

        input.onkeyup = (event) => {
            const list = event.target.parentNode.getElementsByTagName('ul')[0]
            const li = list.getElementsByTagName('li')
            const filter = event.target.value.toUpperCase()

            for (let i = 0; i < li.length; i++) {
                const button = li[i].getElementsByTagName('button')[0]
                const txtValue = button.textContent || button.innerText
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = ''
                } else {
                    li[i].style.display = 'none'
                }
            }
        }    
 // Ajoute un événement pour masquer la dropDown  lorsque l'utilisateur clique en dehors de celle-ci.
        onClick(
            document.getElementById('ingredientsButton').parentNode,
            () => {
                event.target.classList.remove('d-none')
                event.target.parentNode.getElementsByTagName('input')[0].classList.add('d-none')
                event.target.parentNode.getElementsByTagName('ul')[0].classList.add('d-none')
            }
        )
    })
}
// fonction pour  crée une dropDown  des equipements.
function createAppliances(recipes) {
    const wrapper = document.getElementById('appliancesOptions')

    const map = new Map
    recipes.forEach(recipe => map.set(recipe.appliance.toLowerCase()))

    let html = ''
    map.forEach((value, appliance) => html += `<li class="col-4">
                                                    <button onclick="window.mainSearch.addTagFilter('${appliance}', 'appliance')" 
                                                            class="border-0 bg-success text-white m-2 p-1 text-start w-100">
                                                        ${appliance}
                                                    </button>
                                                </li>`)
    wrapper.innerHTML = html

    const buttonToDisplayList = document.getElementById('appliancesButton')
    buttonToDisplayList.addEventListener('click', (event) => {
      
        event.target.classList.add('d-none')

        const input = event.target.parentNode.getElementsByTagName('input')[0]
       
        input.classList.remove('d-none')
       
       
        event.target.parentNode.getElementsByTagName('ul')[0].classList.remove('d-none')     
      
        input.onkeyup = (event) => {
            const list = event.target.parentNode.getElementsByTagName('ul')[0]
            const li = list.getElementsByTagName('li')
            const filter = event.target.value.toUpperCase()

            for (let i = 0; i < li.length; i++) {
                const button = li[i].getElementsByTagName('button')[0]
                const txtValue = button.textContent || button.innerText
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = ''
                } else {
                    li[i].style.display = 'none'
                }
            }
        }
        onClick(
            document.getElementById('appliancesButton').parentNode,
            () => {
                event.target.classList.remove('d-none')
                event.target.parentNode.getElementsByTagName('input')[0].classList.add('d-none')
                event.target.parentNode.getElementsByTagName('ul')[0].classList.add('d-none')
            }
        )
    })
}
// fonction pour  crée une liste dropDown  d'ustensils.
function createUstensils(recipes) {
    const wrapper = document.getElementById('ustensilsOptions')

    const map = new Map
    recipes.forEach(recipe => recipe.ustensils.forEach(u => map.set(u.toLowerCase())))

    let html = ''
    map.forEach((value, ustensil) => html += `<li class="col-4">
    <button onclick="window.mainSearch.addTagFilter('${ustensil}', 'ustensil')"
            class="border-0 bg-danger text-white m-2 p-1 text-start w-100">
       ${ustensil}
    </button>
 </li>`)
    wrapper.innerHTML = html

    const buttonToDisplayList = document.getElementById('ustensilsButton')
    buttonToDisplayList.addEventListener('click', (event) => {       
        event.target.classList.add('d-none')
        const input = event.target.parentNode.getElementsByTagName('input')[0]       
        input.classList.remove('d-none')       
        event.target.parentNode.getElementsByTagName('ul')[0].classList.remove('d-none')      

        input.onkeyup = (event) => {
            const list = event.target.parentNode.getElementsByTagName('ul')[0]
            const li = list.getElementsByTagName('li')
            const filter = event.target.value.toUpperCase()

            for (let i = 0; i < li.length; i++) {
                const button = li[i].getElementsByTagName('button')[0]
                const txtValue = button.textContent || button.innerText
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = ''
                } else {
                    li[i].style.display = 'none'
                }
            }
        }

        onClick(
            document.getElementById('ustensilsButton').parentNode,
            () => {
                event.target.classList.remove('d-none')
                event.target.parentNode.getElementsByTagName('input')[0].classList.add('d-none')
                event.target.parentNode.getElementsByTagName('ul')[0].classList.add('d-none')
            }
        )
    })
}
