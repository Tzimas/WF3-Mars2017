/*
Ajoutet une balise HTML dans le DOM
- Sélectionnez le document
- Appliquer la focntion write
- Ajouter le contenu
*/ 

document.write('<p>Je suis généré en JavaScript</p>');

var names=['Pierre', 'Paul', 'Jacques'];

for( var i=0; i<names.length; i++){

    document.write('<p>Salut ' + names[i] + '</p>');
};
