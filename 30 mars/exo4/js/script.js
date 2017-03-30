// Sélectionner la balise h1 :
    var myTitle= document.querySelector('h1');
    // Afficher le contenu de la balise dans la console:
    console.log(myTitle.textContent);
    // Modifier le contenu de texte de la balise:
    myTitle.textContent='Le titre à changé';



// Sélectioner la balise myId :
    var myId= document.querySelector('#myId');
    // Afficher le contenu html dans la console:
    console.log(myId.innerHTML);
    // Modifier le contenu HTML :
    myId.innerHTML='Contactez <b> moi </b> les gars';