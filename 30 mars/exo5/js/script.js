// Ajouter une class :
    // Sélectionner une balise
    var myTitle= document.querySelector('h1');

    // Ajouter une class à cette balise
    myTitle.classList.add('error');


// Supprimer une class :
    // Sélectionner la dernière balise p
    var myLastP=document.querySelector('p:last-of-type');
    console.log(myLastP);

    // Supprimer la class hidden du p : 
    myLastP.classList.remove('hidden');


// Créer une action sur un Button :

    // Sélectionner la balise button :
    var myButton= document.querySelector('button');

    // Séllectionner la première balise h2 :
    var myFirstH2=document.querySelector('h2');

    // Capter le clic sur le bouton:
    myButton.onclick=function(){

        console.log('Clique sur le bouton');

        // Ajouter ou supprimer la class move sur la première balise h2:
        myFirstH2.classList.toggle('move');

    };


