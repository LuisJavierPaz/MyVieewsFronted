import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEstudioComponent } from './sidebar-estudio.component';

describe('SidebarEstudioComponent', () => {
  let component: SidebarEstudioComponent;
  let fixture: ComponentFixture<SidebarEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
