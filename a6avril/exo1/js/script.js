// Attendre le chargement du DOM
$(document).ready(function(){
    // console.log('Dom OK');

    // Charger le contenu de home.html dans le main :
        $('main').load('views/home.html');

    // Création d'une Fonction pour l'animations des compétences
        function mySkills(paramEq, paramWidth){
            
            // Animation des balises <p> des skills :
            $('h3 + ul').children('li').eq(paramEq).find('p').animate({
                width: paramWidth
            });
        };

    // Créer une fonction pour l'ouverture des modal
        function openModal(){
            // OUvrir le modal au click sur les  boutons
            $('button').click(function(){

                // Afficher le titre du projet :
                console.log($(this).prev().text());

                var modalTitle=$(this).prev().text()
                $('#modal span').text(modalTitle);

                // Afficher l'image du projet :
                console.log($(this).parent().prev().attr('src'));

                var modalImg=$(this).parent().prev().attr('src')
                $('#modal img').attr('src', modalImg).attr('alt', modalTitle);

                // Afficher la modal :
                $('#modal').fadeIn();
            });
            
            // Fermer la modal
            $('.fa-times').click(function(){
                $('#modal').fadeOut();
            });
        };





    // Créer une fonction pour la gestion du formulaire:
        function contactForm(){

            // Capter le focus sur les inputs :
            $('input, textarea').focus(function(){

                console.log();
                // Selectionner la balise précésent pour y ajouter la class openLabel :
                $(this).prev().addClass('openLabel');

            });

            // Capter le blur sur les inputs et le textarea :
            $('input, textarea').blur(function(){

                // Vérifier s'il y a pas des caractère dans le input :
                if( $(this).val().length ==0){
                    // Sélectionner la balise précédentes pour supprimer la class openLabel :
                $(this).prev().removeClass();
                }

                
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

            // Créer une variable pour récupérer la valeur de l'attribut href :
            var viewToLoad=$(this).attr('href');

            // Fermer le BurgerMenu :
            $('nav').slideUp(function(){
                
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

                            // Ouvrir le modal au click sur les boutons
                            openModal();
                        }; 

                         // Vérifier si l'utilisateur est sur la page portfolio.html
                        if(viewToLoad=='contacts.html'){

                            // Ouvrir le modal au click sur les boutons
                            contactForm(); 
                        }; 
                    });       
                });
            });


        // Capter le click


    
}); // Fin de la fonction !