import { TestBed } from '@angular/core/testing';

import { RestServicesRestVideoService } from './rest-services-rest-video.service';

describe('RestServicesRestVideoService', () => {
  let service: RestServicesRestVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestServicesRestVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
