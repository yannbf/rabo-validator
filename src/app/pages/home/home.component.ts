import { Component, OnInit, ViewChild } from '@angular/core';
import { FormatConverterService } from '../../services/format-converter.service';
import {
  Transaction,
  TransactionValidationError,
} from '../../shared/types/Transaction';
import { checkTransactionProperties, hasDuplicates } from '../../shared/util';
import { ToastrService } from 'ngx-toastr';
import { Ng2FileInputService } from 'ng2-file-input';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  transactionRecords: Array<Transaction>;
  fileInputIdentifier = 'file-input-id';

  constructor(
    private converter: FormatConverterService,
    private toastr: ToastrService,
    private fileInputService: Ng2FileInputService
  ) {}

  public onFileAdded(event: any) {
    this.readFile(event.file);
  }

  public onFileRemoved(event: any) {
    this.transactionRecords = null;
  }

  private readFile(file) {
    const fileReader = new FileReader();
    fileReader.onload = e => {
      this.converter.convertToJSON(file.name, fileReader.result).subscribe(
        (res: any) => {
          this.transactionRecords = res;
          this.startValidations();
        },
        error => {
          this.displayErrorToast(error);
          this.fileInputService.reset(this.fileInputIdentifier);
        }
      );
    };
    fileReader.readAsText(file, 'UTF-8');
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

  private displayErrorToast(error: string) {
    this.toastr.error(error, null, {
      timeOut: 4000,
      progressBar: true,
      progressAnimation: 'decreasing',
    });
  }
}
