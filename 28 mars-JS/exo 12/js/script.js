// Créer une variable de type objet
var user={
    firstName:'Sakina',
    lastName:'Choux',

    // Ajouter une fonction pour afficher le nom complet
    fullName: function(){
        console.log(this.firstName + ' ' + this.lastName);
    }
};

// Afficher l'objet
console.log(user);

// Afficher qu'une seul des propriété de l'objet
console.log(user.firstName);

// Modifier la valeur d'une propriété de l'objet
user.lastName='Tzimas';
console.log(user);

// Appeler la fonction de l'objet
user.fullName();
