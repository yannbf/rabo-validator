import { Transaction } from '../types/Transaction';

export const checkTransactionProperties = (obj: any): boolean =>
  obj.hasOwnProperty('accountNumber') &&
  obj.hasOwnProperty('description') &&
  obj.hasOwnProperty('endBalance') &&
  obj.hasOwnProperty('mutation') &&
  obj.hasOwnProperty('startBalance') &&
  (obj.hasOwnProperty('$') && obj.$.hasOwnProperty('reference'));
