import {Component, ViewEncapsulation} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-modificar-datos',
  templateUrl: './modal-modificar-datos.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal-modificar-datos.component.css']
})
export class ModalModificarDatosComponent{
  closeResult: string | undefined;
  constructor(private modalService: NgbModal) { }
  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }
}
