import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {VideosService} from '../../../services/videos/videos.service';
import {CategoriasService} from '../../../services/categorias/categorias.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contenido-estudio-contenido',
  templateUrl: './contenido-estudio-contenido.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./contenido-estudio-contenido.component.css']
})
export class ContenidoEstudioContenidoComponent implements OnInit {
  closeResult: string | undefined;
  listarVdeos: any = [];

  constructor(config: NgbModalConfig, private modalService: NgbModal, private videos: VideosService ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.videos.getVideos().subscribe(
      resp => {
      this.listarVdeos = resp;
    },
      err => {
        console.log(err);
      });
  }
  // tslint:disable-next-line:typedef
  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }
  // tslint:disable-next-line:typedef
  openSm(content: any) {
    this.modalService.open(content, {size: 'sm'});
  }
}
