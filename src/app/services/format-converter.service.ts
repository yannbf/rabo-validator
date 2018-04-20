import { Injectable } from '@angular/core';
import { Builder, parseString } from 'xml2js';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormatConverterService {
  convertToJson(data: string): Observable<Object> {
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

  convertToXml = (obj: Object) => new Builder().buildObject(obj);
}
