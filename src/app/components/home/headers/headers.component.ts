import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
  import { from } from 'rxjs';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  registroForm: any = {}; 
  constructor( private modalService: NgbModal, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nomusu: ['', Validators.required],
      genero: ['', Validators.required],
      fecna: ['', Validators.required],
      corre: ['', Validators.required],
      telef: ['', Validators.required],
      estado: ['', Validators.required]
  });}
  // tslint:disable-next-line:typedef
  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }
}
