import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/home/headers/headers.component';
import { PrincipalComponent } from './components/perfil/principal/principal.component';
import { ModalModificarDatosComponent } from './components/perfil/modal-modificar-datos/modal-modificar-datos.component';
import { ModalCambiarClaveComponent } from './components/perfil/modal-cambiar-clave/modal-cambiar-clave.component';
import { ModalDarBajaCuentaComponent } from './components/perfil/modal-dar-baja-cuenta/modal-dar-baja-cuenta.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    PrincipalComponent,
    ModalModificarDatosComponent,
    ModalCambiarClaveComponent,
    ModalDarBajaCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
