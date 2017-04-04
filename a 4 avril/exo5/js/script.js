// Attendre le chargement du DOM
$(document).ready(function(){
    // console.log('DOM ok')

    // OuvrirBurgerMenu Classique :

    $('.fa-bars').click(function(){
        $('nav ul').fadeIn(500);
    });

    // Fermer le Burger Menu :
    // Selection les balises <a>, on capte le clique, on retire sa nature, puis on referme le burger menu :
    $('a').click(function(evt){
        evt.preventDefault();
        $("nav ul"). fadeOut(500);
    });

   

}); //Fin de la fonction chargement. 