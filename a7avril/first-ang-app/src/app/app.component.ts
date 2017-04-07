// Importer la class Component :
import { Component, OnInit } from '@angular/core';

// Importer la class Route
import { Router } from '@angular/router';


// défuinir le décorateur @component({...}) : permet de définir les pro^priétés. C'est une fonction avec un objet. 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// exporter la class du composant :
export class AppComponent implements OnInit {

  // Initier le router dans le constructeur du composant :
  constructor(
    private router:Router
  ){}

  private burgerIsOpen=false;

  // Créer une fonction à appeler au click sur .fa-bars
  openBurger(){
    
    if(this.burgerIsOpen == false){

        // Changer la valeur de burgerIsOpen :
        this.burgerIsOpen = true;

      }else{

          // Changer la valeur de burgerIsOpen :
        this.burgerIsOpen = false;
      };
  
  };


  // Créer une fonction pour fermer le burger menu
  closeBurger(link){

    // Fermer le burger menu:
    this.burgerIsOpen=false;

    // Naviguer vers la bonne vue :
    this.router.navigate([link]);
  };

  // Attendre le chargement du composant :
  ngOnInit(){

    console.log('le composant est chargé');

    // Créer une variable pour sélectionner le loader en JavaScript
    let loader = document.getElementById('appLoader');
    
    // Ajouter la class closedLoader à la balise :
    loader.classList.add('closedLoader');
  };
};
