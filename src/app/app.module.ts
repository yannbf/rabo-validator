import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2FileInputModule } from 'ng2-file-input';
import { PapaParseModule } from 'ngx-papaparse';
import { DataTableModule } from 'angular2-datatable';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages';
import { FormatConverterService } from './services/format-converter.service';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TransactionsTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2FileInputModule.forRoot(),
    PapaParseModule,
    DataTableModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [FormatConverterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
