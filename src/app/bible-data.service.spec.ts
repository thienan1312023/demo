import { TestBed, inject } from '@angular/core/testing';

import { BibleDataService } from './bible-data.service';

describe('BibleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibleDataService]
    });
  });

  it('should be created', inject([BibleDataService], (service: BibleDataService) => {
    expect(service).toBeTruthy();
  }));
});
