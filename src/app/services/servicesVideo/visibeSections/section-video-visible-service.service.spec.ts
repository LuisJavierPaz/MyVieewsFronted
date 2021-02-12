import { TestBed } from '@angular/core/testing';

import { SectionVideoVisibleServiceService } from './section-video-visible-service.service';

describe('SectionVideoVisibleServiceService', () => {
  let service: SectionVideoVisibleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionVideoVisibleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
