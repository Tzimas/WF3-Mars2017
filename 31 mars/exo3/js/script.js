// Attendre le chargement du DOM :
$(document).ready(function(){
     
    //  console.log('Dom Chargé') ==> Vérification du rattachement entre mon index et script.

    // Capter la soumission du formulaire :
    $('form').submit(function(evt){

        // Défini rune varibale pour le score du formulaire :
        var formScore=0;

        // Bloquer le comportement naturel du formulaire
        evt.preventDefault();

        // Connaitre la valeur saisie dans le input 'utilisateur'
        var userName=$('input').val();
        console.log(userName);

        // Connaître le nombre de caractère taper :
        console.log(userName.length);

        // Connaitre la valeur saisie dans le textarea 'utilisateur'
        var userMessage=$('textarea').val();
        console.log(userMessage);

        // Connaître le nombre de caractère taper :
        console.log(userMessage.length);

        // Vérifier la taille de username (min. 1 caractère) :
        if(userName.length==0){
            console.log ('Vous devez indiquez votre nom');
            
            // Afficher un message dans le label
            $('[for="userName"] b').text('Champs obligatoire');

        }else{ 
            console.log('unserName OK');
            // Incrémenter formScore
            formScore++
        };

        // Vérifier la taille de userMessage (min 5 caractères) :
        if(userMessage.length==0){
            console.log ('Vous devez indiquez votre message, min. 5 caractères');
  
            // Afficher un message dans le label
            $('[for="userMessage"] b').text('Minimum 5 caractères');

        }else{ 
            console.log('unserMessage OK');
            // Incrémenter formScore
            formScore++
        };

        // Vérifier la valeur de formScore pour valider l'envoie du formulaire :
        if(formScore==2){
             console.log('Le formulaire est validé');

            //  Envoyer les données dans le fichier PHP et attendre le réponse du PHP (true/false)

            // Le PHP est true :

            // Ajouter le message dans la liste :
            $('section:last').append('<article><h4>' + userMessage +'</h4><p>'+ userName+ '</p></article>');

            // Vider les champs du formulaire
            $('input:not([type=submit]) ').val('');
            $('textarea').val('');
        };

        // Supprimer les messages d'erreur quans l'utilisateur tape :
        $('input, textarea').focus(function(){
                $(this).prev().children('b').text('');
        });
       

    });


}); //Fin de la fonction chargement.