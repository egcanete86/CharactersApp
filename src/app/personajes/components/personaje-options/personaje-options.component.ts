import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes';

@Component({
  selector: 'app-personaje-options',
  templateUrl: './personaje-options.component.html',
  styles: [`
            ul {
                list-style-type: none;
            }
            li {
                background-color: white;
                border-radius: 5px;
                border: 1px solid rgba(0, 0, 0, 0.2);
                cursor: pointer;               
                margin-bottom: 10px;
                width: 300px;
                border-color: dark;
                border-left: 5px solid;
                border-bottom: 5px solid;
            }
            li:hover {
                color: white;
                background-color: rgba(0, 0, 0, 0.05);
            }
            .options-container {
                display: flex;
                padding-right: 30px;
                justify-content: center;
            }
              `
  ]
})
export class PersonajeOptionsComponent {

  @Input() personajes: Personaje[] = [];
  @Output() selectPersonaje: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  SelectPersonaje(id: number): void {
    this.selectPersonaje.emit(id);
  }
}
