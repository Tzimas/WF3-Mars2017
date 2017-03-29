
var userChoise='';
console.log(userChoise);


// Créer une fonction qui permet à l'utilisateur de choisir une couleur

function chooseColor(){

    // Demander à l'utilisateur de choisir une couleur:
    var userPrompt= prompt('Choisir une couleur entre rouge, vert et bleu')

    // assigner la valeur de userPrompt à userChoise:
    userChoise=userPrompt;

    // Appeler la fonction traduction:
    translateColor(userChoise);
};


// Créer une fonction pour traduire les couleurs:
function translateColor(paramColor){
    if (paramColor=='rouge'){ // Si paramColor = 'rouge'

    console.log('rouge se dit Red en anglais');

    } else if(paramColor== 'bleu'){ // Si paramColor = 'bleu'

        console.log('Bleu ce dit Blue en anglais');

    } else if(paramColor== 'vert'){ // Si paramColor = 'vert'

        console.log('Vert ce dit Green en anglais');

    } else{
        console.log('Je ne connais pas cette couleur...');

        // Rappeler la fonction choisir une couleur quand le user choisit une couleur qu'on ne connais pas:
        chooseColor();
    };
};


