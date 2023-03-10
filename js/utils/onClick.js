export default (el, callback) => {
    function check(event, el, callback) {
        let target = event.target //evenement cible
        do {
            // garde la fenetre ouverte si on click à l'interieur
            if (target === el) return;
            target = target.parentNode;
        } while (target);

        // click à l'exterieur ferme
        controller.abort()
        callback()
    }
//définir des écouteurs d’événements dessus.
//création d'un controleur   avec la methode abort  et la propriété signal 
    let controller = new AbortController() //nouvel objet pour avorter la requete
    document.addEventListener('click', (event) => check(event, el, callback), {signal: controller.signal})//emet l'evenement abort true
}