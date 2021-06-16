import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  //propriété title qui ressemble à une variable
  title = 'My first Angular project';

  nb = 0;

  alert() {
    //methode alert() qui ressemble à une fonction

    const message = 'This is a message';
    //on peut déclarer des variables dans les methodes

    console.log(message);
    //on peut utiliser tous les outils de JS dans les methodes

    this.nb = this.nb + 1;
    console.log('You have clicked: ' + this.nb + ' times');
  };
};