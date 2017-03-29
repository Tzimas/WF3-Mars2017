/* Créer un tableau contenant 4 index :
    - un string
    - un nombre
    - 2 boolean
Puis l'afficher dans la console.
*/

    var myArray=['texte', 1979, true, false];
    console.log(myArray);

/* Ajouter un string dans le Tableau
Afficher dans la console
    */

    myArray.push('Ajouter un élément au tableau');
    console.log(myArray);

/*
Afficher dans la console la taille du tableau
Afficher dans la console
*/

    console.log('Nombres de ligne dans mon tableau: '+myArray.length, myArray[0], myArray[4]);

/*
Créer un objet contenant 3 propriétés
    - un tableau
    - un prénom
    - un âge
*/ 

    var myObjet={
        array: myArray,
        name:'Julie',       
        age: 25,
    };
    // Afficher dans la console :
    console.log(myObjet);

/*
Afficher toutes les propriétés de l'objet dans la console une par une
*/
    console.log(myObjet.array);
    console.log(myObjet.name);
    console.log(myObjet.age);

/*
Modifier la propriété age de l'objet 
Afficher dans la console
*/

    myObjet.age=35;
    console.log(myObjet); 
