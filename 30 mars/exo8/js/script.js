//  Attendre que la page HTML soit chargée dans le navigateur

    // Sélectionner le document:
    $(document).ready(function(){

        // Le code de la page est à intégrer dans la fonctionde callback
        console.log('le DOM est chargé');

    }); //Fin de la focntion d'attente de  chargement du DOM

    console.log('le DOM n\'est pas chargé');