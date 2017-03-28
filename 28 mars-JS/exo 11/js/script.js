/*
Créer une application pour calculer une moyenne
    - l'utilisatuer à possibilité de rajouter autant de notes qu'il le souhaite
    - lorsqu'il le souhaite, il peut calculer la moyenne des notes
*/ 

// Créer les variables globales

var notesArray = [];  
var notesAmount = 0;

// Fonctions
function addNote(){
    // Demander à l'utilisateur d'ajouter une notes
    var newNote = prompt('Ajouter une note de 0 à 20');

    // Convertire newNote en variable de type Number
    var newNoteNumber= parseInt(newNote);

    // Ajouter la note dans le tableau
    notesArray.push(newNoteNumber);

    // Afficher le tableau dans la console
    console.log(notesArray);

    // Additionner notesAmount et newNote
    notesAmount += newNoteNumber;
    console.log(notesAmount);
};

function average(){
    // La somme de toutes les notes divisée par le nombre de note
    var averageNote = notesAmount/notesArray.length;

    // Arrondir le résultat
    var roundAverage = Math.round(averageNote);
    console.log('La moyenne est de ' + roundAverage + '/20');
};