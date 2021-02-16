import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CuentaService} from '../../../services/cuenta/cuenta.service';
import {PersonaService} from '../../../services/persona/persona.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contenido-perfil',
  templateUrl: './contenido-perfil.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./contenido-perfil.component.css']
})
export class ContenidoPerfilComponent implements OnInit {
  closeResult: any;
  persona: any = [];
  cuenta: any = [];
  constructor(
    config: NgbModalConfig,
    public fb: FormBuilder,
    private modalService: NgbModal,
    public personasService: PersonaService,
    public cuentasService: CuentaService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.personasService.getPersona('kajbd87aiyd8iub3978uskkebfosefiusef4u0').subscribe(
      res => {
        this.persona = res;
      },
      error => {
        console.log(error);
      });
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
