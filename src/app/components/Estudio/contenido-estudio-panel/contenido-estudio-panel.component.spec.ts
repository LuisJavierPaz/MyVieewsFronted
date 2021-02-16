import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoEstudioPanelComponent } from './contenido-estudio-panel.component';

describe('ContenidoEstudioPanelComponent', () => {
  let component: ContenidoEstudioPanelComponent;
  let fixture: ComponentFixture<ContenidoEstudioPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoEstudioPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoEstudioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
