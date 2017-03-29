
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

    // utilisation du switch
    switch(paramColor){
        // 1er cas : paramColor = 'rouge':
        case'rouge':console.log('Rouge = Red'); break;

        // 2ème cas : paramColor = 'vert':
        case'vert':console.log('Vert = Green'); break;

        // 3ème cas : paramColor = 'bleu':
        case'bleu':console.log('Bleu = Blue'); break;

        // Pour tout les autres cas de figures: ATTENTION, DEFAULT est OBLIGATOIRE lorsqu'on utilise SWITCH
        default:console.log('Je ne connais pas cette couleur '); break;

    };
};
    


