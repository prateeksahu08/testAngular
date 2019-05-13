import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component';
import { FormatDatePipe } from './pipe/format-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
