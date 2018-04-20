import { Transaction } from '../types/Transaction';

export const checkTransactionProperties = (obj: any): boolean =>
  obj.hasOwnProperty('accountNumber') &&
  obj.hasOwnProperty('description') &&
  obj.hasOwnProperty('endBalance') &&
  obj.hasOwnProperty('mutation') &&
  obj.hasOwnProperty('startBalance') &&
  (obj.hasOwnProperty('$') && obj.$.hasOwnProperty('reference'));

export const hasDuplicates = (array: Array<any>, value: any) =>
  array.filter(v => v === value).length > 1;

export const camelize = (str: string) =>
  str
    .split('')
    .reduce((t, v, k) => t.trim() + (k === 0 ? v.toLowerCase() : v), '');
