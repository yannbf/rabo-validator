import { Component, OnInit } from '@angular/core';
import { FormatConverterService } from '../../services/format-converter.service';
import { Transaction } from '../../shared/types/Transaction';
import { checkTransactionType } from '../../shared/util/Util';

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

  public readFile(file) {
    const fileReader = new FileReader();
    fileReader.onload = (e: FileReaderProgressEvent) => {
      this.converter.convertToJson(fileReader.result).subscribe((a: any) => {
        this.transactionRecords = a.records.record;
      });
    };
    fileReader.readAsText(file);
  }
}
