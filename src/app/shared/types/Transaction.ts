export interface Transaction {
  accountNumber: string;
  description: string;
  endBalance: number;
  mutation: number;
  startBalance: number;
  reference: string;
  validationErrors?: Array<TransactionValidationError | string>;
}

export enum TransactionValidationError {
  MissingProperties = 'Invalid data format, properties are missing.',
  WrongEndBalance = 'Wrong end balance.',
  DuplicateId = 'Duplicate transaction id.',
}
