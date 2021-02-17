import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHomeSearchComponentComponent } from './sub-home-search-component.component';

describe('SubHomeSearchComponentComponent', () => {
  let component: SubHomeSearchComponentComponent;
  let fixture: ComponentFixture<SubHomeSearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHomeSearchComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHomeSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
