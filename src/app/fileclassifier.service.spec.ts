import { TestBed, inject } from '@angular/core/testing';

import { FileclassifierService } from './fileclassifier.service';

describe('FileclassifierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileclassifierService]
    });
  });

  it('should ...', inject([FileclassifierService], (service: FileclassifierService) => {
    expect(service).toBeTruthy();
  }));
});
