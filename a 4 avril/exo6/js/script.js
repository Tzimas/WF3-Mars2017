// Attendre le chargement du DOM
$(document).ready(function(){

// console.log('Dom OK');

    /*
    Home PAGE
     */
            
        // BurgerMenu :
        $('.homePage h1 + a').click(function(evt){
            // Bloquer le comportement de la balise <a> :
            evt.preventDefault();

            // Appliquer la fonction slideToggle sur la <nav> :
            $('.homePage nav').slideToggle();
        });

        // BurgerMenu navigation :
        $('.homePage nav a').click(function(evt){
            // Bloquer le comportement de la balise <a> :
            evt.preventDefault();

            var linkToOpen=$(this).attr('href');

            // Fermer le BurgerMenu :
            $('.homePage nav').slideUp(function(){

                // Changre de page :
                window.location=linkToOpen;
                
            });
        });


    /*
    ABOUT PAGE
     */
        // Capter le click sur le burger BurgerMenu
        $('.aboutPage h1 + a').click(function(evt){
            // Bloquer le comportement naturel de la balise <a> :
            evt.preventDefault();

            // Sélectionner la nav pour y appliquer une fonction animate :
            $('.aboutPage nav').animate({
                left:'0'
            });
        });

           // BurgerMenu navigation :
        $('.aboutPage nav a').click(function(evt){
            // Bloquer le comportement de la balise <a> :
            evt.preventDefault();

            var linkToOpen=$(this).attr('href');

            // Fermer le BurgerMenu :
            $('.aboutPage nav').animate({
                left:'-100%'
                
            }, function(){
                 // Changre de page :
                window.location=linkToOpen;
            });
        });




}); // Fin de la fonction !