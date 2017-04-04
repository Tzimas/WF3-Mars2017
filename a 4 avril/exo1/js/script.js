// Attendre le chargement du DOM
$(document).ready(function(){
    // console.log('DOM ok')

    // Fonction animate () :
    $('section:first button').click(function(){
        // console.log('click');

        // Changer la hauteur et la largeur de l'article :
        $('section:first article').animate({
            height: '30rem',
            width:'20rem'

        });
    });



    // Fonction animate() valeurs dynamique :
    $('section:nth-child(2) button').click(function(){

        $('section:nth-child(2) article').animate({
            left: '+=5rem', // Attention il faut d'abord mettre la balise en position relative ds le CSS.
            top: '+=2rem'
        });
    });



    // Fonction animate(): toggle /show/hide :
    $('section:nth-child(3) button').click(function(){
        $('section:nth-child(3) article').animate({
            width: 'toggle'
        });
    });
 

    // Fonction animate() avec durée et callBack:
    $('section:last button').click(function(){

        $('section:last article').animate({
            width: '20rem',
            height: '20rem'
        }, 2000, function(){
            // SUPPRIMER la balise
            $(this).hide();
        });
    });

   

}); //Fin de la fonction chargement.