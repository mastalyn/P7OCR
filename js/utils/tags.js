// Récupère l'élément HTML ayant l'id 'tagsContainer'
const tagsContainer = document.getElementById('tagsContainer')


export default function (tags) {
    // clear le contenu de l'élément 'tagsContainer'
    tagsContainer.innerHTML = ''

    //boucle chaque tag dans un tableau
    tags.forEach(function (tag) {
        // Définit la couleur par défaut sur 'bg-primary'
        let color = 'bg-primary'

        // Si la catégorie de la balise est 'appliance', définir la couleur sur 'bg-success'
        if(tag.tagCategory === 'appliance') color = 'bg-success'
       
        // Si la catégorie de la balise est 'ustensil', définir la couleur sur 'bg-danger'
        if(tag.tagCategory === 'ustensil') color = 'bg-danger'      

        // Ajoute un nouvel élément HTML pour chaque div
        //on recupere l'instance window.ddl et la fonction removeTag pour enlever le tag affiché
        //on affiche la croix de fermeture 
        tagsContainer.innerHTML += `<div class="border-0 ${color} text-white p-1 px-2 rounded me-2 mb-2 text-start">
                                        ${tag.name}
                                        <button onclick="window.mainSearch.removeTagFilter('${tag.name}')"
                                                class="rounded-circle border-0 bg-transparent" 
                                                aria-label="Supprimer le tag ${tag.name}"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_51_0)">
                                                <path d="M14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8ZM12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_51_0">
                                                <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </div>`
    })
}
