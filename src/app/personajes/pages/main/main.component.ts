import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personajes';
import { PersonajeApiService } from '../../services/personajes-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `
      .button-rigth{
        position:fixed;
        bottom:40px;
        right: 20px;
        width: 150px;
        background-color: #04AA6D;
        border: none;
        color: white;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 15px;
        margin: 4px 2px;
        border-radius: 12px;
        cursor: default;
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
  correctAnswer: boolean = false;
  message: string = '';
  puntos: number = 0;

  constructor(private httpService: PersonajeApiService) { }
  ngOnInit(): void {
    this.newGame();
  }

  mixPersonajeArray() {
    this.httpService.getCharacterOptions().subscribe(personaje => {
      this.personajeArr = personaje;
      const randomInt = Math.floor(Math.random() * 4)
      this.personaje = this.personajeArr[randomInt];
    });
  };

  checkAnswer(selectedId: number) {
    if (!this.personaje) return;

    this.showPersonaje = true;
    this.showAnswer = true;

    if (selectedId === this.personaje.id) {
      this.correctAnswer = true;
      this.puntos = this.puntos + 1;
      this.message = `Correcto, ${this.personaje.name}`
    } else {
      this.correctAnswer = false;
      this.message = `Oops, era ${this.personaje.name}`
    }
  };

  newGame() {
    this.showPersonaje = false;
    this.correctAnswer = false;
    this.showAnswer = false;
    this.personajeArr = [];
    this.personaje = undefined;
    this.mixPersonajeArray();
  }
}
