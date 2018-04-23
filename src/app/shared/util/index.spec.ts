import {
  camelize,
  checkTransactionProperties,
  hasDuplicates,
  validateXML,
} from '.';
import { csvReturnObject } from '../../mocks';

describe('Utils', () => {
  it('should camelize string correctly', () => {
    const str = 'Test String';
    const expectedStr = 'testString';
    expect(camelize(str)).toEqual(expectedStr);
  });

  it('should return true when passing a valid object', () => {
    const check = checkTransactionProperties(csvReturnObject[0]);
    expect(check).toBeTruthy();
  });

  it('should return false when passing an invalid object', () => {
    const obj = csvReturnObject[0];
    delete obj.accountNumber;
    const check = checkTransactionProperties(obj);
    expect(check).toBeFalsy();
  });

  it('should return true when having duplicates in array', () => {
    const arr = [3, 1, 2, 3];
    const key = 3;

    expect(hasDuplicates(arr, key)).toBeTruthy();
  });

  it('should return false when not having duplicates in array', () => {
    const arr = [1, 2, 3];
    const key = 3;

    expect(hasDuplicates(arr, key)).toBeFalsy();
  });

  it('should return true when passing valid xml format', () => {
    const xml = '<test><something>data</something></test>';

    expect(validateXML(xml)).toBeTruthy();
  });

  it('should return false when passing invalid xml format', () => {
    const xml = '<test><errrrrrrr>data</something></test>';

    expect(validateXML(xml)).toBeFalsy();
  });
});
