import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2FileInputModule } from 'ng2-file-input';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, Ng2FileInputModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
