import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {Transformer} from '../services/transformer';
import {Validator} from '../services/validator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    Transformer,
    Validator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
