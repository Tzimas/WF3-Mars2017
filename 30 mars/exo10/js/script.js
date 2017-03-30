// Capter l'évènement ready pour y ajouter une fonction de callback(attendre le chargement du DOM)

$(document).ready(function(){

    // Capter l'évènement focus sur le textarea
    $('textarea').focus(function(){

        console.log('Minimum 10 caractères');

    });

    // Capter l'évènement blur sur le textarea : 
    $('textarea').blur(function(){

        console.log('L\'utilisateur est sortie du focus');

    });

    // Capter l'évènement scroll sur le header:
    $('header').scroll(function(){

        console.log('scroll');
    });

    // Capter l'évènement hover sur le main:
    $('main').hover(function(){

        console.log('hover');
    });

    // Capter l'évènement clic sur la balise a
    $('a').click(function(evt){

        // Empêcher le comportement natutelle de la balise a:
        evt.preventDefault();

        console.log('Click sur la balise a')
    });

    // Capter la soumission du formulaire :
    $('form').submit(function(evt){

        // Bloquer le comportement naturel du formulaire:
        evt.preventDefault();
        console.log('Vérifier les inputs/textarea avant de les envoyer au fichier de traitement PHP');
    });




}); //Fin de la fonction attente