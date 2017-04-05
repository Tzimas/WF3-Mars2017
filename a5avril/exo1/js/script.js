// Attendre le chargement du DOM
$(document).ready(function(){

    console.log('Dom OK');

    // Capter le click sur le premier bouton :
    $('button').eq(0).click(function(){

        // Charger le contenue de views/about.html dans la 1er <section> du <main> :
        $('main section').eq(0).load('views/about.html', function(){

            // Fonction de callBack de la fonction load() :
            console.log('Le fichier about.html est chargé');

            // Animer la première section :
            $('section').eq(0).fadeIn();
        });

    });

    // Capter le click sur le 2eme bouton :
        $('button').eq(1).click(function(){

            $('main section').eq(1).load('views/content.html #portfolio');
       });

    // Capter le click sur le 3eme bouton :
        $('button').eq(2).click(function(){

            $('main section').eq(2).load('views/content.html #contacts', function(){

                // Appeler la fonction  submitForm :
                submitForm();
            });
       });

    //    Créer une fonction pour capter la soumission du formulaire :
    function submitForm(){
         // Capter la soumission du formulaire :
        $('form').submit(function(evt){
            // Créer une variable pour la validation finale du formulaire :
            var formScore=0;

            evt.preventDefault();

            console.log('Submit du formulaire')

            // Minimum 4 caractères pour l'email et 5 caractères pour le message :
            if($('[type="email"]').val().length<4){
                console.log('email manquant');
            } else{
                console.log('email OK');
                
                // Incrémenter formScore :
                formScore++;
            };

            if($('textarea').val().length<5){
                console.log('message manquant');
            } else{
                console.log('message OK')

                // Incrémenter formScore :
                formScore++;
            };

            // Vérifier la valeur de formScore afin de valider ou non le formumaire :
            if(formScore==2){
                console.log('Formulaire validé! ')

                // => Envoyer les données du formulaire et attendre la réponse du server en Ajax
                // => Le serveur répond true 

                // Ajouter le message dans la balise aside :
                $('aside').append('<h3>'+ $('textarea').val() + '</h3><p>'+ $('[type="email"]').val()+ '</p>');
            

                // => Reset du Formulaire :
                $('form')[0].reset();
            };


        });
    };

   
    


}); // Fin de la fonction chargement !