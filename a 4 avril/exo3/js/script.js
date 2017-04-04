// Attendre le chargement du DOM
$(document).ready(function(){
    // console.log('DOM ok')

    // Capter le click sur les balises h3 :
    $('h3').click(function(){

        $('.open').not(this)
        .next().slideUp()
        .prev().removeClass('open')
        .children('.fa').toggleClass('fa-times').toggleClass('fa-arrow-right');

        
        // Faire un toggle de la class open sur la balise h3 :
        $(this).toggleClass('open');

        // Afficher dans la console le balise suivante :
        $(this).next().slideToggle();

        // // Afficher dans la console la balise .fa
        // console.log($(this).children('.fa'));

        // Sélectionner le balise .fa pour supprimer la class .fa-arrow-right :
        $(this).children('.fa').toggleClass('fa-arrow-right').toggleClass('fa-times');

    });

   

}); //Fin de la fonction chargement.