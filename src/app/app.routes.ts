import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';

export const routes: Routes = [

    {path: 'inicio', component: HomeComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'inicio_sesion', component: IniciosesionComponent},
    {path: '**', redirectTo: 'inicio'}

];
