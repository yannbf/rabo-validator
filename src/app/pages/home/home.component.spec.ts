import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from '..';
import { TransactionsTableComponent } from '../../components/transactions-table/transactions-table.component';
import { Ng2FileInputModule } from 'ng2-file-input';
import { DataTableModule } from 'angular2-datatable';
import { FormatConverterService } from '../../services/format-converter.service';
import { PapaParseService } from 'ngx-papaparse';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Ng2FileInputModule.forRoot(),
        DataTableModule,
        ToastrModule.forRoot(),
      ],
      declarations: [HomeComponent, TransactionsTableComponent],
      providers: [FormatConverterService, PapaParseService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove all files when calling onFileRemoved', () => {
    const ev = () => {};
    component.onFileRemoved(ev);
    fixture.detectChanges();
    expect(component.transactionRecords).toBeNull();
  });
});
