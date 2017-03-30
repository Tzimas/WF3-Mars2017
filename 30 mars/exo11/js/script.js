// Attendre le chargement du Dom
$(document).ready(function(){

    // Manipuler le contenu texte du footer:
    console.log($('footer').text());
    // $('footer').text('Sous la licence <b> MIT </b>');  //On ne peut pas modifier radicalement le texte, comme ds HTML

    // Manipuler le contenu HTML du footer: 
    console.log($('footer').html());
    $('footer').html('Sous la license <b> MIT </b>'); //Ici on peut écrir en html

    // Créer un objet pour la page d'acceuil :

    var content={
        homeContent={
        title:'Bienvenue sur mon site',
        content: 'Je suis le texte de la page <b>Accueil</b>',

    },portfolioContent={
        title:'Bienvenue sur la page Portfolio',
        content: 'Je suis le texte de la page <b> Portfolio</b>',

    },contactsContent={
        title:'Bienvenue sur la page Contacts',
        content: 'Je suis le texte de la page <b>Contacts</b>',

        }
    };


    // Créer une fonction pour gérer le menu
    function showMyContent(){ 

        // Capter le clic sur la 1er Li:
        $('li').click(function(){

            // Récupérer la valeur de la'attribut:
            var dataValue=$('this').attr('data');

            // modifier le contenu de la balise h2
            $('h2').text(content.dataValue.title);

            // modifier le contenu de la balise p :
            $('p').html(content.dataValue.content);

        });
    };
    
    showMyContent();



}); //Fin de la fonction chargement du DOM