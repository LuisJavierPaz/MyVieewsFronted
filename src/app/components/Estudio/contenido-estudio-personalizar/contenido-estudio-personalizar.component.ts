import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contenido-estudio-personalizar',
  templateUrl: './contenido-estudio-personalizar.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./contenido-estudio-personalizar.component.css']
})
export class ContenidoEstudioPersonalizarComponent implements OnInit {

  closeResult: string | undefined;
  files: File[] = [];
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  openSm(content: any) {
    this.modalService.open(content, {size: 'sm'});
  }
  // tslint:disable-next-line:typedef
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  // tslint:disable-next-line:typedef
  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  // tslint:disable-next-line:typedef
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
