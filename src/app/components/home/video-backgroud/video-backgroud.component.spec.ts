import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBackgroudComponent } from './video-backgroud.component';

describe('VideoBackgroudComponent', () => {
  let component: VideoBackgroudComponent;
  let fixture: ComponentFixture<VideoBackgroudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoBackgroudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBackgroudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
