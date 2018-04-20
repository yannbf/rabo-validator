export interface Transaction {
  accountNumber: string;
  description: string;
  endBalance: number;
  mutation: number;
  startBalance: number;
  reference: string;
  validationErrors?: Array<TransactionValidationError>;
}

export enum TransactionValidationError {
  MissingProperties = 'Missing properties.',
  WrongEndBalance = 'Wrong end balance.',
  DuplicateId = 'Duplicate transaction id.',
}
