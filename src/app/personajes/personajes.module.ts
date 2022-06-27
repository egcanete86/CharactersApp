import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { PersonajePictureComponent } from './components/personaje-picture/personaje-picture.component';
import { PersonajeOptionsComponent } from './components/personaje-options/personaje-options.component';
import { PersonajesRoutingModule } from './personajes-routing.module';
import { DisableRightClickDirective } from './directives/disable-right-click-directive';



@NgModule({
  declarations: [
    DisableRightClickDirective,
    MainComponent,
    PersonajePictureComponent,
    PersonajeOptionsComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class PersonajeModule { }
