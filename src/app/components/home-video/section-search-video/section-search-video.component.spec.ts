import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSearchVideoComponent } from './section-search-video.component';

describe('SectionSearchVideoComponent', () => {
  let component: SectionSearchVideoComponent;
  let fixture: ComponentFixture<SectionSearchVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSearchVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSearchVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
