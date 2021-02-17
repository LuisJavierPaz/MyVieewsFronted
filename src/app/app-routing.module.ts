import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
/*---------------------*/
import {HeadersComponent} from './components/home/headers/headers.component';
import {HomeVideoComponent} from './components/home-video/home-video.component';
import {ViewVideoComponent} from './components/view-video/view-video.component';
import {SubHomeSearchComponentComponent} from './components/sub-home-search-component/sub-home-search-component.component';
import {PrincipalComponent} from './components/perfil/principal/principal.component';
import {EstudioComponent} from "./components/Estudio/estudio/estudio.component";
import {ContenidoEstudioPersonalizarComponent} from "./components/Estudio/contenido-estudio-personalizar/contenido-estudio-personalizar.component";
import {ContenidoEstudioContenidoComponent} from "./components/Estudio/contenido-estudio-contenido/contenido-estudio-contenido.component";
import {ContenidoEstudioPanelComponent} from "./components/Estudio/contenido-estudio-panel/contenido-estudio-panel.component";
import {VerCanalComponent} from "./components/Canal/ver-canal/ver-canal.component";
/*----------------------*/
const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HeadersComponent,
  },
  {
    path: 'home/views',
    component: HomeVideoComponent
  },
  {
    path: 'home/play/:id',
    component: ViewVideoComponent
  },
  {
    path: 'home/search/:nombre',
    component: SubHomeSearchComponentComponent
  },
  {
    path: 'home/principal',
    component: PrincipalComponent
  },
  {
    path: 'home/principal/estudio',
    component: EstudioComponent,
  },
  {
    path: 'home/principal/personalizar',
    component: ContenidoEstudioPersonalizarComponent
  },
  {
    path: 'home/principal/personalizar',
    component: ContenidoEstudioContenidoComponent
  },
  {
    path: 'home/principal/panel',
    component: ContenidoEstudioPanelComponent
  },
  {
    path: 'home/principal/canal',
    component: VerCanalComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
