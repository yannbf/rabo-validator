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
      return this.convertCSVToJson(this.processData(data));
    }

    if (!isXML && !isCSV) {
      return Observable.create(obs =>
        obs.error('The file has a wrong extension.')
      );
    }
  }

  private convertXMLToJson(data: string): Observable<Object> {
    return Observable.create(observer => {
      parseString(
        data,
        { explicitArray: false, mergeAttrs: true },
        (error, result: any) => {
          if (result === null) {
            return observer.error('The file is empty.');
          }

          if (error) {
            return observer.error(error);
          }

          const res = (result.records && result.records.record) || [];
          observer.next(res);
          observer.complete();
        }
      );
    });
  }

  private convertCSVToJson(data: string): Observable<Object> {
    return Observable.create(observer => {
      this.csvConverter.parse(data, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        encoding: 'UTF-8',
        complete: results => {
          if (results === null) {
            return observer.error('The file is empty.');
          }

          observer.next(results.data);
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
