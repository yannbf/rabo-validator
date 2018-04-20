import { Component, OnInit } from '@angular/core';
import { FormatConverterService } from '../../services/format-converter.service';
import {
  Transaction,
  TransactionValidationError,
} from '../../shared/types/Transaction';
import { checkTransactionProperties, hasDuplicates } from '../../shared/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  transactionRecords: Array<Transaction> = [];

  constructor(private converter: FormatConverterService) {}

  public onFileAdded(event: any) {
    this.readFile(event.file);
  }

  private readFile(file) {
    const fileReader = new FileReader();
    fileReader.onload = e => {
      this.converter
        .convertToJSON(file.name, fileReader.result)
        .subscribe((res: any) => {
          this.transactionRecords = res;
          this.startValidations();
        });
    };
    fileReader.readAsText(file);
  }

  private startValidations() {
    const transactionIds = this.transactionRecords.map(t => t.reference);

    this.transactionRecords.map((t: Transaction) => {
      const endBalance = Number(t.startBalance) + Number(t.mutation);
      const validTransaction =
        Number(t.endBalance).toFixed(2) === endBalance.toFixed(2);

      if (!validTransaction) {
        t.validationErrors = this.addValidationError(
          t,
          `${TransactionValidationError.WrongEndBalance}
          \nShould be: ${endBalance}`
        );
      }

      if (!checkTransactionProperties(t)) {
        t.validationErrors = this.addValidationError(
          t,
          TransactionValidationError.MissingProperties
        );
      }

      if (hasDuplicates(transactionIds, t.reference)) {
        t.validationErrors = this.addValidationError(
          t,
          TransactionValidationError.DuplicateId
        );
      }
    });
  }

  private addValidationError(
    transaction: Transaction,
    error: TransactionValidationError | string
  ) {
    return [...(transaction.validationErrors || []), error];
  }
}
