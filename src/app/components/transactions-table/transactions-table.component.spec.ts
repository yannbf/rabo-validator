import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableModule } from 'angular2-datatable';

import { TransactionsTableComponent } from './transactions-table.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('TransactionsTableComponent', () => {
  let component: TransactionsTableComponent;
  let fixture: ComponentFixture<TransactionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataTableModule, ToastrModule.forRoot()],
      declarations: [TransactionsTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
