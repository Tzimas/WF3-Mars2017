/*
Programme pour saluer un utilisateur et afficher son année de naissance 
    - Demander le nom et prénom de l'utilisateur
    - Saluer en disant : Bonjour prénom nom
    - Demander  l'âge de l'utilisateur
    - Afficher l'année de naissance
*/

// Demander le nom et prénom de l'utilisateur :
var firstName = prompt('Quel est ton prénom ?');
var lastName = prompt('Que est ton nom ?');

// Saluer en disant : Bonjour prénom nom :
console.log('Bonjour ' + firstName+ ' ' + lastName);

// Demander  l'âge de l'utilisateur :
var age = prompt('Quel est ton âge ?');
console.log(age);

// Transformer une variable de type STRING en type NUMBER :
var ageNumber = parseInt(age);
console.log(ageNumber);


// Afficher l'année de naissance :
var currentYear = 2017;
console.log('Ton année de naissance est ' + (currentYear - age) );