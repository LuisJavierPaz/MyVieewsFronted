import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHomeVideoComponent } from './section-home-video.component';

describe('SectionHomeVideoComponent', () => {
  let component: SectionHomeVideoComponent;
  let fixture: ComponentFixture<SectionHomeVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHomeVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHomeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
