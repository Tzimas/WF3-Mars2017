/*
Le principe du Chifoumy
    - l'utilisateur doit choisir entre pierre, feuille, ciseaux
    - l'ordinateur doit choisir entre pierre, feuille, ciseaux
    - on doit comparer le choix de l'utilisateur et de l'ordinateur
    - selon le résultat, l'utilisateur a gagné ou l'ordinateur à gagner
    - une partie se joue en 3 manches
*/ 

// Variable global pour le choix de l'utilisateur
var userBet='';
var userWin=0;
var computerWin=0;


    /*
        #1_ L'utilisateur doit choisir entre pierre, feuille, ciseaux :
        -Créer une fonction qui prend en paramètre le choix de l'utilisateur
        - Appeler la fonction au clique sur les boutons du DOM en précisant le paramètre
        - Afficher le résultat dans la console 
    */

        function userChoice(paramChoice){

            // Assigner à la variable userBet la valeur de paramChoice
            userBet=paramChoice;
        };

    
    /*
        #2_ L'ordinateur doit choisir entre pierre, feuille, ciseaux
        - Faire une fonction pour déclencher le choix au clique sur un boutons
        - Créer un tableau contenant 'pierre', 'feuille', 'ciseaux'
        - Faire en sorte de choisir aléatoirement l'un des 3 index du tableau
        - Afficher le résultat dans la console 
    */

        function computerChoice(){

            // Afficher dans la console la valeur de userBet:
            console.log('user: ' +userBet);

            var computerMemory=['pierre', 'feuille', 'ciseaux'];

            // Choisir aléantoirement l'un des 3 index du tableau
            var computerBet= computerMemory[Math.floor(Math.random() * computerMemory.length)];
            console.log('computer: '+computerBet);

        

            // Vérifier si userBet est vide:
            if(userBet==''){
                document.querySelector('h2').innerHTML= 'Choisi ton <i>arme</i>';
            } else{
            
            // Afficher les deux choix dans la balises h2
            document.querySelector('h2').textContent=userBet + ' vs ' + computerBet;

                // Comparer les variables:
                if(userBet==computerBet){
                    document.querySelector('p').textContent= 'Egalité';

                } else if(userBet == 'pierre' && computerBet=='ciseaux'){
                    document.querySelector('p').textContent= 'Gagné';
                    // Incrémenter la variable userWin de 1
                    userWin++;

                } else if(userBet == 'feuille' && computerBet=='pierre'){
                    document.querySelector('p').textContent= 'Gagné';
                    // Incrémenter la variable userWin de 1
                    userWin++;

                } else if(userBet == 'ciseaux' && computerBet=='feuille'){
                    document.querySelector('p').textContent= 'Gagné';
                    // Incrémenter la variable userWin de 1
                    userWin++;
                    
                } else{
                    document.querySelector('p').textContent= 'Perdu';
                    // Incrémenter la variable computerWin de 1
                    computerWin++;
                };
            };

            // Afficher les valeurs de computerWin et de userWin
            console.log('user: '+userWin);
            console.log('computer: '+computerWin);
                

            // Vérifier les valeurs de userWin et computerWin
            if(userWin==3){
                console.log('La partie est gagnée !')

                // Afficher le message dans le body
                document.querySelector('body').innerHTML= '<h1> Vous avez gagné !</h1><a href="index.html">Rejouer</a>';

            };
            if(computerWin==3){
                console.log('La partie est perdue...')

                // Afficher le message dans le body
                document.querySelector('body').innerHTML= '<h1> Vous avez perdu !</h1><a href="index.html">Rejouer</a>';

            };
   
        };





