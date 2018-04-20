export interface Transaction {
  accountNumber: string;
  description: string;
  endBalance: number;
  mutation: number;
  startBalance: number;
  $: { reference: string };
  validationErrors?: Array<TransactionValidationError>;
}

export enum TransactionValidationError {
  MissingProperty = 'Missing property.',
  WrongEndBalance = 'Wrong end balance.',
  DuplicateId = 'Duplicate transaction id.',
}
