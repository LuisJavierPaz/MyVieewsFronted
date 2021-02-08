import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModificarDatosComponent } from './modal-modificar-datos.component';

describe('ModalModificarDatosComponent', () => {
  let component: ModalModificarDatosComponent;
  let fixture: ComponentFixture<ModalModificarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModificarDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModificarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
