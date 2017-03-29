// Demander à l'utilisateur de choisir une couleur entre rouge, vert et bleu:


var userChoise=prompt('Choisir une couleur entre rouge, vert ou bleu');


if (userChoise=='rouge'){ // Si userChoise = 'rouge'

    console.log('rouge se dit Red en anglais');

} else if(userChoise== 'bleu'){ // Si userChoise = 'bleu'

    console.log('Bleu ce dit Blue en anglais');

} else if(userChoise== 'vert'){ // Si userChoise = 'vert'

    console.log('Vert ce dit Green en anglais');

} else{
    console.log('Je ne connais pas cette couleur...');
}

