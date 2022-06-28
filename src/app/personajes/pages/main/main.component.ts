import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personajes';
import { PersonajeApiService } from '../../services/personajes-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `   
      .mickey-img {
        height: 80px;
        width: 110px;
      }  

      .mickey-text {  
        position:absolute;  
        top: 55px;
        color: white;
      }  

      .fade-in {
        animation: fadeIn 0.3s;
        -webkit-animation: fadeIn 0.3s;
        -moz-animation: fadeIn 0.3s;
        -o-animation: fadeIn 0.3s;
        -ms-animation: fadeIn 0.3s;
      }
      @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
      
      @-moz-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
      
      @-webkit-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
      
      @-o-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
      
      @-ms-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
    `
  ]
})
export class MainComponent implements OnInit {

  personajeArr: Personaje[] = [];
  personaje?: Personaje;
  showPersonaje: boolean = false;
  showAnswer: boolean = false;
  message: string = '';
  puntos: number = 0;

  constructor(private httpService: PersonajeApiService) { }
  ngOnInit(): void {
    this.newGame();
  }

  mixPersonajeArray() {
    this.httpService.getCharacterOptions().subscribe(personajes => {
      this.personajeArr = personajes;
      this.personaje = this.personajeArr.find(item => item.selected === true);
    });
  };

  checkAnswer(selectedId: number) {
    if (!this.personaje) return;

    this.showPersonaje = true;
    this.showAnswer = true;

    if (selectedId === this.personaje.id) {
      this.puntos = this.puntos + 1;
      this.message = `Correcto, ${this.personaje.name}`
    } else {
      this.puntos = 0;
      this.message = `Oops, era ${this.personaje.name}`
    }
  };

  newGame() {
    this.showPersonaje = false;
    this.showAnswer = false;
    this.personajeArr = [];
    this.personaje = undefined;
    this.mixPersonajeArray();
  }
}
