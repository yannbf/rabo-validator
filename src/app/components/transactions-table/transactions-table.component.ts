import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../../shared/types/Transaction';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
})
export class TransactionsTableComponent {
  @Input() data: Array<Transaction>;
  headers = [
    'Valid',
    'Reference nr.',
    'Account nr.',
    'Description',
    'Start balance',
    'Mutation',
    'End balance',
  ];
}
