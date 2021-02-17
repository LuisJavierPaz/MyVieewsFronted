import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeadersComponent } from './components/home/headers/headers.component';
import { VerCanalComponent } from './components/Canal/ver-canal/ver-canal.component';
import { EstudioComponent } from './components/Estudio/estudio/estudio.component';
import { PrincipalComponent } from './components/perfil/principal/principal.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HeadersComponent
  },
  {
    path: 'home/canal',
    component: VerCanalComponent
  },
  {
    path: 'home/estudio',
    component: EstudioComponent
  },
  {
    path: 'home/perfil',
    component: PrincipalComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
