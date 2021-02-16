import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCanalComponent } from './contenido-canal.component';

describe('ContenidoCanalComponent', () => {
  let component: ContenidoCanalComponent;
  let fixture: ComponentFixture<ContenidoCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoCanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
