import { Component, OnInit } from '@angular/core';
import { ModalModificarDatosComponent } from "../modal-modificar-datos/modal-modificar-datos.component";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recibirDatos(e:any) {
    console.log(e);
  }

}
