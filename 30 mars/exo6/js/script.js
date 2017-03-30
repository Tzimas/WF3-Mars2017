
// Ajouter une balise dans une autre Balise :

        // Sélectionner la balise dans laquelle je veux ajouter une autre balise:
        var myMain=document.querySelector('main');

        // Créer une variable pour généré une balise HTML :
        var myNewTag=document.createElement('h2');

        // Ajouter du contenu dans la balise généré:
        myNewTag.innerHTML='Je suis un <i>Titre</i>';
        // console.log(myNewTag); pour vérifier que ça a bien fonctionner dans la console.

        // Ajouter un enfant dans le myMain:
        myMain.appendChild(myNewTag);