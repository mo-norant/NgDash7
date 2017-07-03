import { TestBed, inject } from '@angular/core/testing';

import { ChannelheaderService } from './channelheader.service';

describe('ChannelheaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelheaderService]
    });
  });

  it('should ...', inject([ChannelheaderService], (service: ChannelheaderService) => {
    expect(service).toBeTruthy();
  }));
});
