// Attendre le chargement du DOM :
$(document).ready(function(){
    console.log('DOM OKAYYYYY');

    $('button:first').click(function(){

        // Charger le fichier home.html dans le main :
        $('main').load('views/home.html');
    });
});

