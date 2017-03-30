
// Sélectionner la balise dans laquelle je veux ajouter une autre balise:
var myMain=document.querySelector('ul');

// Créer un tableau contenant 4 titres :

var myArray=['Accueil', 'About', 'Portfolio', 'Contacts'];

// Faire une boucle: 
for ( var i=0; i<myArray.length; i++){
    // Créer une variable pour généré une balise HTML :
    var myNewTag=document.createElement('li');

    // Ajouter du contenu dans la balise généré:
    myNewTag.innerHTML=' <a href="#">'+ myArray[i]+'</a>' ;

    // Ajouter un enfant dans le myMain:
    myMain.appendChild(myNewTag);
};

