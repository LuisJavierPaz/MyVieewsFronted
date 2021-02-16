import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contenido-canal',
  templateUrl: './contenido-canal.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./contenido-canal.component.css']
})
export class ContenidoCanalComponent implements OnInit {

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
}
