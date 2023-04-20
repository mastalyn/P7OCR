export default (el, callback) => {

    //  vérifie si l'élément cible de l'événement (click) est l'élément spécifié ou non
    function check(event, el, callback) {
        let target = event.target; // Récupère l'élément cible de l'événement

        // cherche dans le DOM en partant de l'élément à cibler et  vérifier si l'élément demandé a été atteint
        do {
            // Si l'élément spécifié est atteint, on ne fait rien
            if (target === el) return;
            target = target.parentNode;
        } while (target);
       // on appelle la fonction de callBack
        
        callback();
    }

    

    // Ajoute un écouteur d'événements pour les clics  l'ensemble du doc
    document.addEventListener('click', (event) => check(event, el, callback));

}
