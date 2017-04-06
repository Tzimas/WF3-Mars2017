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
                $('input:not([type="submit"]), textarea').focus(function(){

                    // Selectionner la balise précésent pour y ajouter la class openLabel :
                    $(this).prev().addClass('openLabel hideError');

                });

            // Capter le blur sur les inputs et le textarea :
                $('input, textarea').blur(function(){

                    // Vérifier s'il y a pas des caractère dans le input :
                    if( $(this).val().length ==0){
                        // Sélectionner la balise précédentes pour supprimer la class openLabel :
                        $(this).prev().removeClass();
                    };   
                });

            // Supprimer le message d'erreur du select :
                $('select').focus(function(){
                    $(this).prev().addClass('hideError');
                });

            // Supprimer le message d'erreur de la checkbox :
                $('[type=checkbox]').focus(function(){
                    $('form p').addClass('hideError');
                });

             // Fermer la modal
                $('.fa-times').click(function(){
                    $('#modal').fadeOut();
                });


            // Capter le soumission du formulaire :
                $('form').submit(function(evt){

                    // Bloquer le comportement naturel du formulaire:
                    evt.preventDefault();

                    // Définir les variables globales du formulaire :
                    var userName = $('#userName');
                    var userEmail = $('#userEmail');
                    var userSubject = $('#userSubject');
                    var userMessage= $('#userMessage');
                    var checkbox = $('[type="checkbox"]');
                    var formScore=0;

                    // Vérifier que userName est au mini 2 caractères :
                    if(userName.val().length < 2){
                        $('[for="userName"] b').text('minimun 2 caractères'); //AUTRE Version possible : userName.prev.children('b').text('min 2 cara')

                    }else{
                        console.log('userName OK');
                        formScore++;
                    };

                    // Vérifier que userEmail est au mini 5 caractères :
                    if(userEmail.val().length<5){
                        $('[for="userEmail"] b').text('minimun 5 caractères');

                    }else{
                        console.log('userEmail OK');
                        formScore++;
                    };

                    // Vérifier que l'utilisateur est bien Selectionner un sujet :
                    if(userSubject.val() =='null'){
                        $('[for="userSubject"] b').text('Choisir un sujet');

                    }else{
                        console.log('userSubject OK');
                        formScore++;
                    };

                     // Vérifier qu'il est bien un message, min 5commentaires :
                     if(userMessage.val().length<5){
                        $('[for="userMessage"] b').text('minimun 5 caractères');

                    }else{
                        console.log('userMessage OK');
                        formScore++;
                    };

                    // Vérifier si la checkbox est cocher :
                    if(checkbox[0].checked==false){
                        $('form p b').text('Vous devez accepter les conditions générales');

                    } else{
                        console.log('cg=> OK');
                        formScore++;
                    };

                    // Validation final du formulaire :
                    if(formScore==5){
                        console.log('Validé');
                    

                        // Envoi des données dans le fichier PHP
                        // PHP répond => true; continuer le traitement du formulaire :

                            // Ajouter la valeur de userName dans la balise h2 span de la modal :
                            $('#modal span').text(userName.val());

                            // Afficher la modal :
                            $('#modal').fadeIn();
                        
                            // Vider les champs du formulaire :
                            $('form')[0].reset(); 

                            // Supprimer les messages d'erreur :
                            $('form b').text('');

                            // Replacer les labels :
                            $('label').removeClass();

                    };
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



    
}); // Fin de la fonction !