import { Injectable } from '@angular/core';
import { Builder, parseString } from 'xml2js';
import { Observable } from 'rxjs/Observable';
import { PapaParseService } from 'ngx-papaparse';
import { camelize } from '../shared/util';

@Injectable()
export class FormatConverterService {
  constructor(private csvConverter: PapaParseService) {}

  convertToJSON(fileName: string, data: string): Observable<Object> {
    const isXML = fileName.endsWith('.xml');
    if (isXML) {
      return this.convertXMLToJson(data);
    }

    const isCSV = fileName.endsWith('.csv');
    if (isCSV) {
      return this.convertCSVToJson(data);
    }

    if (!isXML && !isCSV) {
      throw new Error('The file has a wrong extension.');
    }
  }

  private convertXMLToJson(data: string): Observable<Object> {
    return Observable.create(observer => {
      parseString(data, { explicitArray: false }, (error, result) => {
        if (error) {
          observer.error(error);
        }

        observer.next(result);
        observer.complete();
      });
    });
  }

  private convertCSVToJson(data: string): Observable<Object> {
    return Observable.create(observer => {
      this.csvConverter.parse(this.processData(data), {
        header: true,
        dynamicTyping: true,
        complete: results => {
          console.log('Parsed: ', results);
          observer.next(results);
          observer.complete();
        },
        error: error => {
          observer.error(error);
        },
      });
    });
  }

  private processData(data) {
    const allTextLines = data.split(/\r\n|\n/);
    const headers = allTextLines.shift().split(',') as Array<string>;
    const camelizedHeaders = headers.map(str => camelize(str)).join(',');

    return [camelizedHeaders, ...allTextLines].join('\n');
  }
}
