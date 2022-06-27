import { Component, Input } from '@angular/core';

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
export class PersonajePictureComponent {

    imgSrc?: string;
    @Input() set personajeName(value: string) {
        this.imgSrc = `../../../../assets/characters/${value}.png`;
    }

    @Input() showPersonaje?: boolean;


    constructor() { }

}
