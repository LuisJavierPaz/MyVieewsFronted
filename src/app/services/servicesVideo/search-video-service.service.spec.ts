import { TestBed } from '@angular/core/testing';

import { SearchVideoServiceService } from './search-video-service.service';

describe('SearchVideoServiceService', () => {
  let service: SearchVideoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchVideoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
