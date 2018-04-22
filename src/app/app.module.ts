import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2FileInputModule } from 'ng2-file-input';
import { PapaParseModule } from 'ngx-papaparse';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages';
import { FormatConverterService } from './services/format-converter.service';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  declarations: [AppComponent, HomeComponent, TransactionsTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2FileInputModule.forRoot(),
    PapaParseModule,
    DataTableModule,
  ],
  providers: [FormatConverterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
