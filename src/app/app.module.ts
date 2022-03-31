import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxTitleModule} from "ngx-title";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTitleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
