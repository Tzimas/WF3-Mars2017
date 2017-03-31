// Attendre le chargement du DOM
$(document).ready(function(){

    // Créer une variable pour le titre principal du site:
    var siteTitle='Sakina Tzimas Choux <span> Etudiante</span>';
   
   
    // Créer un tableau pour la nav:
    var myNav= ['Accueil', 'Portfolio', 'Contacts'];
    
    
    // Créer un objet pour les titres des pages
    var myTitles = {
        // insérer des propriétés à mon objets:
        Accueil: 'Bienvenue sur la page d\'accueil',
        Portfolio:'Découvrez mes travaux',
        Contacts: 'Contactez-moi pour plus d\'informations' // Ne pas finir par une virgule, sinon l'ordi attendrai une autre propriété.
    };
    
    // Créer un objet pour le ocntenu des pages :
    var myContent={
        Accueil: '<h3>Contenu de la page d\'accueil</h3>  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nostrum fuga optio, excepturi! Reiciendis assumenda consectetur, commodi, maxime minus magni quae quo iusto quia sit aut iure aliquid, natus repellendus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nostrum fuga optio, excepturi! Reiciendis assumenda consectetur, commodi, maxime minus magni quae quo iusto quia sit aut iure aliquid, natus repellendus!</p>',
        Portfolio: '<h3>Contenu de la page Portfolio</h3>  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nostrum fuga optio, excepturi! Reiciendis assumenda consectetur, commodi, maxime minus magni quae quo iusto quia sit aut iure aliquid, natus repellendus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nostrum fuga optio, excepturi! Reiciendis assumenda consectetur, commodi, maxime minus magni quae quo iusto quia sit aut iure aliquid, natus repellendus!</p>',
        Contacts: '<h3>Contenu de la page Contacts</h3>  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nostrum fuga optio, excepturi! Reiciendis assumenda consectetur, commodi, maxime minus magni quae quo iusto quia sit aut iure aliquid, natus repellendus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nostrum fuga optio, excepturi! Reiciendis assumenda consectetur, commodi, maxime minus magni quae quo iusto quia sit aut iure aliquid, natus repellendus!</p>'

    };

    // Afficher dans la console le header:
    var myHeader=$('header');
    console.log(myHeader);

    // Générer une balise H1 dans le header avec le contenu de la variable siteTitle:
    myHeader.append('<h1>'+ siteTitle+'</h1>'); // = afficher dans le DOM

    // Générer une balise nav + ul dans le header :
    myHeader.append('<nav><i class="fa fa-bars" aria-hidden="true"></i><ul></nav></ul>');

    // Activer le burgerMenu au click sur la balise .fa-bars :
    $('.fa-bars').click(function(){

        $('nav ul').toggleClass('toggleBurger');
    });
    
    // Faire une boucle myNav pour générer les liens de la nav:
    for(var i=0; i<myNav.length; i++){
        
        // Générer des balises html (li):
        $('ul').append('<li><a href="'+ myNav[i]+'">'+ myNav[i]+'</a></li>');
    };

    // Afficher dans le main le titre issu de l'objet myTitles :
    var myMain=$('main');
    myMain.append('<h2>'+myTitles.Accueil+'</h2>');
    myMain.append('<section>'+myContent.Accueil+'</section>');

    // Ajouter la clas active sur la première li de la nav:
    $('nav li:first').addClass('active');

    // Capter l'évènement click sur les balises <a> en bloquant le comportement naturelle des balises <a>:
    $('a').click(function(evt){

        // Supprimer les class active des balises li de la nav :
        $('nav li').removeClass('active');
        
        // Bloquer le comportement naturel de la balise:
        evt.preventDefault();

        // Connaitre l'occurence de la balise <a> sur laquelle l'utilisateur à cliqué:
        console.log($(this));

        // récuprer la valeur de l'attribut href :
        console.log($(this).attr('href'));

        // Vérifier la valeur de l'attribut href pour afficher le bon titre :
        if($(this).attr('href')=='Accueil'){
            // Sélectionner la balise h2 pour changer le contenu:
            $('h2').text(myTitles.Accueil);

            $('section').html(myContent.Accueil);

            // Ajouter la class active sur la balise li de la balise à sélectionné:
             $(this).parent().addClass('active');


        }else if($(this).attr('href')=='Portfolio'){ 
            $('h2').text(myTitles.Portfolio);

            $('section').html(myContent.Portfolio);

            // Ajouter la class active sur la balise li de la balise à sélectionné:
             $(this).parent().addClass('active');


        }else{
            $('h2').text(myTitles.Contacts);

            $('section').html(myContent.Contacts);

            // Ajouter la class active sur la balise li de la balise à sélectionné:
             $(this).parent().addClass('active');
        };  

        //Fermer le burgerMenu:
        $('nav ul').removeClass('toggleBurger');  
    });



}); //Fin de l'attente du chargement du DOM