import onClick from "./onClick.js";

export default function (recipes) {
    createIngredients(recipes)
    createAppliances(recipes)
    createUstensils(recipes)
}

function createIngredients(recipes) {
    const wrapper = document.getElementById('ingredientsOptions')

    const map = new Map
    recipes.forEach(recipe => recipe.ingredients.forEach(i => map.set(i.ingredient.toLowerCase())))
   

    let html = ''
    map.forEach((ingredients,ingredient) => html += `<li class="col-4">
                                                    <button 
                                                            class="border-0 bg-primary text-white m-2 p-1 text-start w-100">
                                                        ${ingredient} 
                                                    </button>
                                                </li>`)
                                             
    wrapper.innerHTML = html

    const buttonToDisplayList = document.getElementById('ingredientsButton')
    buttonToDisplayList.addEventListener('click', (event) => {
        // cache le bouton ingedient
        event.target.classList.add('d-none')

        const input = event.target.parentNode.getElementsByTagName('input')[0]
        // affiche le input recherche
        input.classList.remove('d-none')
       

        // affiche la liste
        event.target.parentNode.getElementsByTagName('ul')[0].classList.remove('d-none')

        
      
//navigation entre les boutons en repliant le drop
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

function createAppliances(recipes) {
    const wrapper = document.getElementById('appliancesOptions')

    const map = new Map
    recipes.forEach(recipe => map.set(recipe.appliance.toLowerCase()))

    let html = ''
    map.forEach((appliances, appliance) => html += `<li class="col-4">
                                                    <button 
                                                            class="border-0 bg-success text-white m-2 p-1 text-start w-100">
                                                        ${appliance}
                                                    </button>
                                                </li>`)
    wrapper.innerHTML = html

    const buttonToDisplayList = document.getElementById('appliancesButton')
    buttonToDisplayList.addEventListener('click', (event) => {
        // cache le bouton
        event.target.classList.add('d-none')

        const input = event.target.parentNode.getElementsByTagName('input')[0]
        // affiche le input
        input.classList.remove('d-none')
       
        // affiche la liste
        event.target.parentNode.getElementsByTagName('ul')[0].classList.remove('d-none')

       //navigation entre les boutons en repliant le drop
      

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

function createUstensils(recipes) {
    const wrapper = document.getElementById('ustensilsOptions')

    const map = new Map
    recipes.forEach(recipe => recipe.ustensils.forEach(u => map.set(u.toLowerCase())))

    let html = ''
    map.forEach((ustensils, ustensil) => html += `<li class="col-4">
                                                 <button 
                                                         class="border-0 bg-danger text-white m-2 p-1 text-start w-100">
                                                    ${ustensil}
                                                 </button>
                                              </li>`)
    wrapper.innerHTML = html

    const buttonToDisplayList = document.getElementById('ustensilsButton')
    buttonToDisplayList.addEventListener('click', (event) => {
        // cache le bouton
        event.target.classList.add('d-none')

        const input = event.target.parentNode.getElementsByTagName('input')[0]
        // affiche le input
        input.classList.remove('d-none')
       

        // affiche la liste 
        event.target.parentNode.getElementsByTagName('ul')[0].classList.remove('d-none')

       
//navigation entre les boutons en repliant le drop
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