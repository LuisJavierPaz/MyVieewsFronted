import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CuentaService} from '../../../services/cuenta/cuenta.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contenido-perfil',
  templateUrl: './contenido-perfil.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./contenido-perfil.component.css']
})
export class ContenidoPerfilComponent implements OnInit {
  closeResult: any;
  cuenta: any = [];

  constructor(
    config: NgbModalConfig,
    public fb: FormBuilder,
    private httpCliente: HttpClient,
    private modalService: NgbModal,
    public cuentasService: CuentaService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.cuentasService.getCuenta('adwa99awhd9adw78yh869823no89').subscribe(
      res => {
        this.cuenta = res;
      },
      error => {
        console.log(error);
      });
  }


  // tslint:disable-next-line:typedef
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
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
