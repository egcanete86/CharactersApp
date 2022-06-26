import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personajes';

@Component({
    selector: 'app-personaje-picture',
    templateUrl: './personaje-picture.component.html',
    styles: [`
          .personaje-container {
              height: 400px;
          }
          img {            
              height: 350px;
              user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              -webkit-user-drag: none;
              -webkit-user-select: none;
          }
          .hidden-personaje {
              filter: brightness(0);
          }
    `]
})
export class PersonajePictureComponent implements OnInit {

    private _personaje?: Personaje;

    @Input() set personaje(valor: Personaje) {
        this._personaje = valor;
        this.imgSrc = valor.img;
    }

    @Input() showPersonaje?: boolean;
    imgSrc?: string;

    constructor() { }

    ngOnInit(): void {
        this.imgSrc = this._personaje?.img;
    }



}
