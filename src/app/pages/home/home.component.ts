import { Component, OnInit } from '@angular/core';
import { FormatConverterService } from '../../services/format-converter.service';
import {
  Transaction,
  TransactionValidationError,
} from '../../shared/types/Transaction';

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
    fileReader.onload = (e: FileReaderProgressEvent) => {
      this.converter.convertToJson(fileReader.result).subscribe((a: any) => {
        this.transactionRecords = a.records.record;
        this.startValidations();
      });
    };
    fileReader.readAsText(file);
  }

  private startValidations() {
    this.transactionRecords.map((t: Transaction) => {
      const validTransaction =
        Number(t.endBalance) === Number(t.startBalance) + Number(t.mutation);
      if (!validTransaction) {
        t.validationErrors = [
          ...(t.validationErrors || []),
          TransactionValidationError.WrongEndBalance,
        ];
      }
    });
  }
}
