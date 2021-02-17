import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {HeadersComponent} from './components/home/headers/headers.component';
import {HomeVideoComponent} from './components/home-video/home-video.component';
import {RestServicesRestVideoService} from './services/rest-services-rest-video.service';
import {NgxDropzoneModule} from 'ngx-dropzone';

import {PrincipalComponent} from './components/perfil/principal/principal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NavbarPrincipalComponent} from './components/navbar-principal/navbar-principal.component';
import {ContenidoPerfilComponent} from './components/perfil/contenido-perfil/contenido-perfil.component';
import {EstudioComponent} from './components/Estudio/estudio/estudio.component';
import {SidebarEstudioComponent} from './components/Estudio/sidebar-estudio/sidebar-estudio.component';
import {ContenidoEstudioPanelComponent} from './components/Estudio/contenido-estudio-panel/contenido-estudio-panel.component';
import {ContenidoEstudioContenidoComponent} from './components/Estudio/contenido-estudio-contenido/contenido-estudio-contenido.component';
import {ContenidoEstudioPersonalizarComponent} from './components/Estudio/contenido-estudio-personalizar/contenido-estudio-personalizar.component';
import {VerCanalComponent} from './components/Canal/ver-canal/ver-canal.component';
import {ContenidoCanalComponent} from './components/Canal/contenido-canal/contenido-canal.component';
import {NavNavigationComponent} from './components/home-video/nav-navigation/nav-navigation.component';
import {AsideMenuComponent} from './components/home-video/aside-menu/aside-menu.component';
import {SectionHomeVideoComponent} from './components/home-video/section-home-video/section-home-video.component';
import {SectionSearchVideoComponent} from './components/sub-home-search-component/section-search-video/section-search-video.component';
import {SearchVideoServiceService} from './services/servicesVideo/search-video-service.service';
import {SectionVideoVisibleServiceService} from './services/servicesVideo/visibeSections/section-video-visible-service.service';
import { LoginComponent } from './components/login/login.component';
import {CloudinaryModule} from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';
import {ViewVideoComponent} from './components/view-video/view-video.component';
import {ViewVideoService} from './services/view-video.service';
import {SpinnerService} from './services/spinner/spinner.service';
import {NgxSpinnerModule} from 'ngx-spinner';
import {InterceptorService} from './services/spinner/interceptor.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SubHomeSearchComponentComponent} from './components/sub-home-search-component/sub-home-search-component.component';
import {RestCategoriaService} from './services/rest-categoria.service';
import {ComentariosService} from './services/comentarios.service';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeVideoComponent,
    NavNavigationComponent,
    AsideMenuComponent,
    SectionHomeVideoComponent,
    SectionSearchVideoComponent,
    ViewVideoComponent,
    SubHomeSearchComponentComponent,
    PrincipalComponent,
    SidebarComponent,
    NavbarPrincipalComponent,
    ContenidoPerfilComponent,
    EstudioComponent,
    SidebarEstudioComponent,
    ContenidoEstudioPanelComponent,
    ContenidoEstudioContenidoComponent,
    ContenidoEstudioPersonalizarComponent,
    VerCanalComponent,
    ContenidoCanalComponent
  ],
    ViewVideoComponent

    HeadersComponent,
    HomeVideoComponent,
    NavNavigationComponent,
    AsideMenuComponent,
    SectionHomeVideoComponent,
    SectionSearchVideoComponent,
    ViewVideoComponent,
    SubHomeSearchComponentComponent,
    PrincipalComponent,
    SidebarComponent,
    NavbarPrincipalComponent,
    ContenidoPerfilComponent,
    EstudioComponent,
    SidebarEstudioComponent,
    ContenidoEstudioPanelComponent,
    ContenidoEstudioContenidoComponent,
    ContenidoEstudioPersonalizarComponent,
    VerCanalComponent,
    ContenidoCanalComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    HttpClientModule,
    CloudinaryModule.forRoot(Cloudinary, {
      cloud_name: 'dzkcr9eec', upload_preset: 'lp8lafrr'
    }),
    NgxSpinnerModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [RestServicesRestVideoService,
    SearchVideoServiceService,
    SectionVideoVisibleServiceService,
    ViewVideoService,
    SpinnerService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    RestCategoriaService,
    ComentariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
