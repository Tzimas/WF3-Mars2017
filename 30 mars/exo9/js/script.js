// Attendre le chargement du DOM
$(document).ready(function(){

    // Code à éxécuter sur la page une fois chargé

    /*
        DeathSelector:
    */
        var deathSelector=$('h3').prev().parent().parent().next().parent().find('main').children('article').find('h3') ;
        console.log(deathSelector);


    /*
        Les sélecteurs jQuery "Classiques"
    */
        //  Sélectionner une balise pour son nom (tag):
        var myHtmlTag=$('header');
        console.log(myHtmlTag);

        // Sélectionner une balise par sa class :
        var myClass=$('.myClass');
        console.log(myClass);

        // Sélectionner une balise par son ID:
        var myId=$('#myId');
        console.log(myId);

        // Sélecteurs imbriqué:
        var myItalic=$('h2 i');
        console.log(myItalic);

        // Sélecteurs CSS3:
        var myFooter=$('body>main+footer');
        console.log(myFooter);


    /*
        Les sélecteurs jQuery "Spécifiques"
    */

        // Sélecteurs d'enfant :
        var myChildren=$('header').children('button') ;
        console.log(myChildren);

        // Sélecteurs de parent
        var myParent = $('h2').parent();
        console.log(myParent);

        // Rechercher une balise :
        var myH2=$('main').find('h2');
        console.log(myH2);

        // Sélectionner le premier :
        var firstBtn=$('button:first');
        console.log(firstBtn);

        // Sélectionner le premier :
        var lastBtn=$('button:last');
        console.log(lastBtn);
        
        // Sélectionner la nth balise :
        var secondLi=$('li').eq(1);
        console.log(secondLi);

        // Sélectionner la balise suivante:
        var afterMain=$('main').next();
        console.log(afterMain);

        // Sélectionner la balise précédente:
        var beforeMain=$('main').prev();
        console.log(beforeMain);



}); //Fin de la fontion d'attente du chargement du DOM
