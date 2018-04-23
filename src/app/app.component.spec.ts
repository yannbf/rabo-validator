import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { Ng2FileInputModule } from 'ng2-file-input';
import { DataTableModule } from 'angular2-datatable';
import { FormatConverterService } from './services/format-converter.service';
import { PapaParseService } from 'ngx-papaparse';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Ng2FileInputModule.forRoot(),
        DataTableModule,
        ToastrModule.forRoot(),
      ],
      declarations: [AppComponent, HomeComponent, TransactionsTableComponent],
      providers: [FormatConverterService, PapaParseService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
