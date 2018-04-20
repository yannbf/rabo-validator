export interface Transaction {
  accountNumber: string;
  description: string;
  endBalance: number;
  mutation: number;
  startBalance: number;
  $: { reference: string };
  isDuplicate?: boolean;
  hasAllProperties?: boolean;
}
