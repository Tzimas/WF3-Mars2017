// Attendre le chargemeent du DOM :
$(document).ready(function(){

    // Fermer la modal :
    $('.fa-times').click(function(){
        $('div').fadeOut();
    });

    // Supprimer les class error :
    $('input, select, textarea').focus(function(){
        $(this).removeClass('error');
    });

    // console.log('Dom ok !'); =>Test

      console.log('Dom ok putin ');
    // Capter la soumission du formulaire :
    $('form').submit(function (evt){
        // Bloquer le comportement naturel :
        evt.preventDefault();
        // console.log('submit');=>Test

        // Définir les variables Globales du formulaire:
            var userName = $('[placeholder="Your name *"]');
            // console.log(userName);=>Test
            var userEmail = $('[placeholder="Your Email *"]');
            // console.log(userEmail);=>Test
            var userSubject = $('select');
            // console.log('userSubject');
            var userMessage= $('textarea');
            // console.log(userMessage);=>Test
            var formScore=0;
            // console.log(formScore);=>Test

        // Vérifier la taille de userName (obligatoire) :
            if(userName.val().length==0){
                console.log ('Vous devez indiquez votre nom');
                // Ajouter la class error sur l'input :
                userName.addClass('error');

            }else{ 
                // console.log('unserName OK');
                // Incrémenter formScore
                formScore++;
            };
        
        // Vérifier l'Email :
            if(userEmail.val().length <4){
                // console.log('entrer un Email valide');
                // Ajouter la class error sur l'input :
                userEmail.addClass('error');

            }else{
                // console.log('Email ok');
                // Incrémenter formScore :
                formScore++;
            };

        // Vérifier le Select :
            if(userSubject.val() =='null'){
                // console.log('sujet obligatoire');
                // Ajouter la class error sur l'input :
                userSubject.addClass('error');

            }else{
                // console.log('userSubject OK');
                // Incrémenter formScore :
                formScore++;
            };


        // Vérifier le Textarea (min 5 caractères) :
            if(userMessage.val().length<5){
                // console.log('écrire un commentaire mini 5 caractères');
                // Ajouter la class error sur l'input :
                userMessage.addClass('error');

            }else{
                // console.log('message ok');
                // Incrémenter formScore :
                formScore++;
            };

        // Valider le formulaire :
            if(formScore==4){
                // console.log('Formulaire ok');

                //  Envoyer les données dans le fichier PHP et attendre le réponse du PHP (true/false)
                // Le PHP est true : continuer le traitement du formulaire

                // => Afficher les données dans une modal :

                $('div span').text(userName.val());
                $('div b').text(userSubject.val());
                $('div p:last').text(userMessage.val());

                // Afficher la modal dans la page, au moment de la validation du formulaire :
                $('div').fadeIn();

                // Vider les champs du formulaire
                $('form')[0].reset();

            }else{

            };
    });

}); //Fin de l'attente du chargement du DOM !