import {Component, ViewEncapsulation} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-cambiar-clave',
  templateUrl: './modal-cambiar-clave.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal-cambiar-clave.component.css']
})
export class ModalCambiarClaveComponent {
closeResult: string | undefined;
  constructor(private modalService: NgbModal) { }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
