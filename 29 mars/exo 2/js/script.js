var myNumber=45;

// TYPE SIMPLE:

// Egalité ou Inégalité SIMPLE, l'ordi ne prend pas le type de myNumber par ex si c'est un string ou un nombre; il vérifie juste qu'il est bien inscrit la même chose, c-a-d '45'.

    // Egalité SIMPLE :
    console.log(myNumber==45); // => true
    console.log(myNumber=="45"); // => true 


    // Inégalité SIMPLE:
    console.log(myNumber!=45); // => false
    console.log(myNumber!='45'); // => false
    console.log(myNumber!=12); // => true
    console.log(myNumber!='12'); // => true



// TYPE STRICT:

    // Egalité STRICT : vérifier la valeur ET le type de la variable
    console.log(myNumber===45); // => true
    console.log(myNumber==="45") // => false

    // Inégalité STRICT : vérifier la valeur ET le type de la variable
    console.log(myNumber!==45); // => false
    console.log(myNumber!=='45'); // => true



// Supérieur/Inférieur :
console.log(myNumber>46); // => false
console.log(myNumber<46); // => true

// Supérieur ou égale / Inférieur ou égale :
console.log(myNumber>=12); // => true
console.log(myNumber<=20); // => false

console.log(myNumber>=45); // => true
console.log(myNumber<=45); // => true

