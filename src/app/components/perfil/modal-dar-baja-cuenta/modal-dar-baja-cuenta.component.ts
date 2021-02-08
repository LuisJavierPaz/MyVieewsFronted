import {Component, ViewEncapsulation} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-dar-baja-cuenta',
  templateUrl: './modal-dar-baja-cuenta.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./modal-dar-baja-cuenta.component.css']
})
export class ModalDarBajaCuentaComponent {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content);
  }


}
