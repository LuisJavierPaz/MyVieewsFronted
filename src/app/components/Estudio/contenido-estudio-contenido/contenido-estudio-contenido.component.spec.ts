import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoEstudioContenidoComponent } from './contenido-estudio-contenido.component';

describe('ContenidoEstudioContenidoComponent', () => {
  let component: ContenidoEstudioContenidoComponent;
  let fixture: ComponentFixture<ContenidoEstudioContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoEstudioContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoEstudioContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
