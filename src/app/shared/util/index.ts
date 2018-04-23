import { Transaction } from '../types/Transaction';

export const checkTransactionProperties = (obj: any): boolean =>
  obj.hasOwnProperty('accountNumber') &&
  obj.hasOwnProperty('description') &&
  obj.hasOwnProperty('endBalance') &&
  obj.hasOwnProperty('mutation') &&
  obj.hasOwnProperty('startBalance') &&
  obj.hasOwnProperty('reference');

export const hasDuplicates = (array: Array<any>, value: any): boolean =>
  array.filter(v => v === value).length > 1;

export const camelize = (str: string): string =>
  str
    .split('')
    .reduce((t, v, k) => t.trim() + (k === 0 ? v.toLowerCase() : v), '');

export const validateXML = (text: string): boolean => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, 'text/xml');

  return xmlDoc.getElementsByTagName('parsererror').length <= 0;
};
