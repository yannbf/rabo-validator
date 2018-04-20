export interface Transaction {
  accountNumber: string;
  description: string;
  endBalance: number;
  mutation: number;
  startBalance: number;
  ($: Object): { reference: string };
  isDuplicate?: boolean;
}
