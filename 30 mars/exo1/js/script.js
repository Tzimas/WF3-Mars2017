/*
- Créer un tableau contenant 4 prénoms
- Faire une boucle sur le tableau pour saluer dans la console chaques prénoms
- Afficher un message spécial pour votre prénom (ex: Slt c'est moi!)
*/

var users=['Alfred', 'Bruce', 'Sakina', "Robin"];
console.log(users);

// La boucle:
for(var i=0; i<users.length; i++){

    if (users[i] =='Sakina'){ 

    console.log("Salut c'est moi"); // 'Salut c\'est moi' pour que ca fonctionne

    // Modifier une balise HTML
    document.querySelector('p').textContent= "Salut c'est moi !";

    } else{
        console.log('Salut '+ users[i]);
    }
    
};



