import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [

    {
        path: '',
        component: MainComponent,
        children: [
            { path: '**', redirectTo: 'personajes' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonajesRoutingModule { } 