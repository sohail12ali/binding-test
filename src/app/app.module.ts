import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { ExtendedInputComponent } from './controls/extended-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    ExtendedInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
