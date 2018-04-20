import { Component, OnInit } from '@angular/core';
import { FormatConverterService } from '../../services/format-converter.service';

export interface Transaction {
  accountNumber: string;
  description: string;
  endBalance: number;
  mutation: number;
  startBalance: number;
  $: { reference: string };
  isDuplicate?: boolean;
}
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
