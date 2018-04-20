import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2FileInputModule } from 'ng2-file-input';
import { PapaParseModule } from 'ngx-papaparse';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages';
import { FormatConverterService } from './services/format-converter.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2FileInputModule.forRoot(),
    PapaParseModule,
  ],
  providers: [FormatConverterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
