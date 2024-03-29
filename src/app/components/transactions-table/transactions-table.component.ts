import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../../shared/types/Transaction';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
})
export class TransactionsTableComponent {
  @Input() data: Array<Transaction>;
  headers = [
    {
      field: 'validationErrors',
      label: 'Valid',
    },
    {
      field: 'reference',
      label: 'Ref nr.',
    },
    {
      field: 'accountNumber',
      label: 'Account nr.',
    },
    {
      field: 'description',
      label: 'Description',
    },
    {
      field: 'startBalance',
      label: 'Start balance',
    },
    {
      field: 'mutation',
      label: 'Mutation',
    },
    {
      field: 'endBalance',
      label: 'End balance',
    },
  ];

  constructor(private toastr: ToastrService) {}

  displayToast(errors) {
    if (errors) {
      this.toastr.error(errors, null, {
        timeOut: 4000,
        progressBar: true,
        progressAnimation: 'decreasing',
      });
    }
  }
}
