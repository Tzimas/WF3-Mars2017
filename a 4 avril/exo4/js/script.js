// Attendre le chargement du DOM
$(document).ready(function(){
    // console.log('DOM ok')
    // Ouvrir le modal :
    $('button').click(function(){
        $('section').fadeIn();
    });

    // Fermer la modal 
    $('.fa').click(function(){
        $(this).parent().parent().parent(). fadeOut();
    });

    // Capter la touche escap :
    $(document).keyup(function(evt){

        console.log(evt.keyCode);

        if(evt.keyCode ==27){
            $('section').fadeOut();
        };

    });

}); //Fin de la fonction chargement.