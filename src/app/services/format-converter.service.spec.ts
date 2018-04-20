import { TestBed, inject } from '@angular/core/testing';

import { FormatConverterService } from './format-converter.service';

describe('FormatConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatConverterService],
    });
  });

  it(
    'should be created',
    inject([FormatConverterService], (service: FormatConverterService) => {
      expect(service).toBeTruthy();
    })
  );
});
