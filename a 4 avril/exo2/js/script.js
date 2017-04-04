// Attendre le chargement du DOM
$(document).ready(function(){
    // console.log('DOM ok')

    // fonction fadeOut() :
    $('section').eq(0).children('button').click(function(){
        $('section').eq(0).children('article').fadeOut('5000'); // la durée en javaScript s'expime toujours en millisecond, soit pour 2s = 2000ms. On peut aussi lui attribuer des mots-clés JavaS comme 'slow'; 'fast',...
    });

    // fonction fadeIn() :
    $('section').eq(1).children('button').click(function(){
        $('section').eq(1).children('article').fadeIn('slow'); // Pour que cette action soit visible, il faut que la balise soit en display none. 
    });

      // fonction fadeToggle() :
    $('section').eq(2).children('button').click(function(){
        $('section').eq(2).children('article').fadeToggle('2000'); // Pour que cette action soit visible, il faut que la balise soit en display none. 
    });

    // Fonction slideUp() :

    $('section').eq(3).children('button').click(function(){
        $('section').eq(3).children('article').slideUp(1000);
    });

    // Fonction slideDown() :

    $('section').eq(4).children('button').click(function(){
        $('section').eq(4).children('article').slideDown(1000);
    });

    // Fonction slideToggle() :

    $('section').eq(5).children('button').click(function(){
        $('section').eq(5).children('article').slideToggle(1000);
    });
 


   

}); //Fin de la fonction chargement.