// Attendre le chargement du DOM
$(document).ready(function(){
    // console.log('Dom OK');

    // Charger le contenu de home.html dans le main :
    // $('main').load('views/home.html');

    // Création d'une Fonction pour l'animations des compétences
    function mySkills(paramEq, paramWidth){
        
        // Animation des balises <p> des skills :
        $('h3 + ul').children('li').eq(paramEq).find('p').animate({
            width: paramWidth
        });
    };

    // Créer une fonction pour l'ouverture des modal
    function openModal(){
        $('button').click(function(){
            $('#modal').fadeIn();
        });
        
        // Fermer la modal
        $('.fa-times').click(function(){
            $('#modal').fadeOut();
        });
    };

    /*
    BurgerMenu :
     */
            
        // BurgerMenu :
        $('h1 + a').click(function(evt){
            // Bloquer le comportement de la balise <a> :
            evt.preventDefault();

            // Appliquer la fonction slideToggle sur la <nav> :
            $('nav').slideToggle();
        });

        // BurgerMenu navigation :
        $('nav a').click(function(evt){
            // Bloquer le comportement naturel de la balise <a> :
            evt.preventDefault();

            // Masquer le <main> :
            $('main').fadeOut();

            var viewToLoad=$(this).attr('href');

            // Fermer le BurgerMenu :
            $('nav').slideUp(function(){

                // Changer de page :
                console.log('Vous voulez afficher la vue :' + viewToLoad);
                
                // Charger la bonne vue puis afficher le <main> (callBack) :
                $('main').load('views/'+ viewToLoad, function(){

                    $('main').fadeIn(function(){

                        // Vérifier si l'utilisateur veut voir la page about.html
                        if(viewToLoad == 'about.html')

                        // Appeler la fonction mySkills :
                        mySkills(0, '84%');
                        mySkills(1, '55%');
                        mySkills(2, '10%');
                    });

                    // Vérifier si l'utilisateur est sur la page portfolio.html
                    if(viewToLoad=='portfolio.html'){

                        // Appeler la fonction pour ouvrir le modal
                        openModal();
                    } 
                });       
            });
        });


        // Capter le click


    
}); // Fin de la fonction !