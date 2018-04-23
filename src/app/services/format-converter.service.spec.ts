import { TestBed, inject } from '@angular/core/testing';

import { FormatConverterService } from './format-converter.service';
import { PapaParseService } from 'ngx-papaparse';
import { csvMock, csvReturnObject, xmlMock, xmlReturnObject } from '../mocks';

describe('FormatConverterService', () => {
  let formatConverterService: FormatConverterService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatConverterService, PapaParseService],
    });

    const csvConverter = new PapaParseService();
    formatConverterService = new FormatConverterService(csvConverter);
  });

  it('should be created', () => {
    expect(formatConverterService).toBeTruthy();
  });

  it('should return an error if the file passed has wrong extension', () => {
    const expectedError = 'The file has a wrong extension.';

    const res = formatConverterService.convertToJSON('.abc', null);

    res.subscribe(
      () => {},
      error => {
        expect(error).toEqual(expectedError);
      }
    );
  });

  describe('when receiving XML file type', () => {
    it('should return expected converted XML object', () => {
      const res = formatConverterService.convertToJSON('test.xml', xmlMock);

      res.subscribe(result => {
        expect(result).toEqual(xmlReturnObject);
      });
    });

    it('should return empty array when not having data', () => {
      const res = formatConverterService.convertToJSON(
        'test.xml',
        '<records></records>'
      );

      res.subscribe(result => {
        expect(result).toEqual([]);
      });
    });

    it('should return an error when passing invalid XML', () => {
      const res = formatConverterService.convertToJSON(
        'test.xml',
        '<err></wrong>'
      );
      const expectedResult = 'The XML file is invalid.';

      res.subscribe(
        result => {},
        error => expect(error).toEqual(expectedResult)
      );
    });
  });

  describe('when receiving CSV file type', () => {
    it('should return expected converted CSV object', () => {
      const res = formatConverterService.convertToJSON('test.csv', csvMock);

      res.subscribe(result => {
        expect(result).toEqual(csvReturnObject);
      });
    });

    it('should return empty array when not having data', () => {
      const res = formatConverterService.convertToJSON('test.csv', '[[[[');

      res.subscribe(result => {
        expect(result).toEqual([]);
      });
    });

    it('should return an error if the CSV file passed is empty', () => {
      const expectedError = 'The file is empty.';
      const res = formatConverterService.convertToJSON('test.csv', '');

      res.subscribe(
        () => {},
        error => {
          expect(error).toEqual(expectedError);
        }
      );
    });
  });
});
