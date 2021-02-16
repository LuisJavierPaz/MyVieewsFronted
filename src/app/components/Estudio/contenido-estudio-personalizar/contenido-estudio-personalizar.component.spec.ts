import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoEstudioPersonalizarComponent } from './contenido-estudio-personalizar.component';

describe('ContenidoEstudioPersonalizarComponent', () => {
  let component: ContenidoEstudioPersonalizarComponent;
  let fixture: ComponentFixture<ContenidoEstudioPersonalizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoEstudioPersonalizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoEstudioPersonalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
