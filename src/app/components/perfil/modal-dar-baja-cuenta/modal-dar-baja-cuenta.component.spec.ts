import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDarBajaCuentaComponent } from './modal-dar-baja-cuenta.component';

describe('ModalDarBajaCuentaComponent', () => {
  let component: ModalDarBajaCuentaComponent;
  let fixture: ComponentFixture<ModalDarBajaCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDarBajaCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDarBajaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
