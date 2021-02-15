import { TestBed } from '@angular/core/testing';

import { ViewVideoService } from './view-video.service';

describe('ViewVideoService', () => {
  let service: ViewVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
