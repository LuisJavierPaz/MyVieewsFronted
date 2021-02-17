import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { HeadersComponent } from './components/home/headers/headers.component';
import { HomeVideoComponent } from './components/home-video/home-video.component';
import { RestServicesRestVideoService} from './services/rest-services-rest-video.service';


import { ReactiveFormsModule} from '@angular/forms';
import { PrincipalComponent } from './components/perfil/principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarPrincipalComponent } from './components/navbar-principal/navbar-principal.component';
import { ContenidoPerfilComponent } from './components/perfil/contenido-perfil/contenido-perfil.component';
import { EstudioComponent } from './components/Estudio/estudio/estudio.component';
import { SidebarEstudioComponent } from './components/Estudio/sidebar-estudio/sidebar-estudio.component';
import { ContenidoEstudioPanelComponent } from './components/Estudio/contenido-estudio-panel/contenido-estudio-panel.component';
import { ContenidoEstudioContenidoComponent } from './components/Estudio/contenido-estudio-contenido/contenido-estudio-contenido.component';
import { ContenidoEstudioPersonalizarComponent } from './components/Estudio/contenido-estudio-personalizar/contenido-estudio-personalizar.component';
import { VerCanalComponent } from './components/Canal/ver-canal/ver-canal.component';
import { ContenidoCanalComponent } from './components/Canal/contenido-canal/contenido-canal.component';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeVideoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    ReactiveFormsModule
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
