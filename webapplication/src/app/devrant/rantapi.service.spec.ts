import { TestBed, inject } from '@angular/core/testing';

import { RantapiService } from './rantapi.service';

describe('RantapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RantapiService]
    });
  });

  it('should be created', inject([RantapiService], (service: RantapiService) => {
    expect(service).toBeTruthy();
  }));
});
