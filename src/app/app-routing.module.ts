import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajeModule)
  },
  {
    path: '**',
    redirectTo: 'personajes'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
