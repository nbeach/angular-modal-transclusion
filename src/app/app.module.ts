import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ModalComponent} from './modal.component';
import {NameFormModalComponent} from './name-form-modal-component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NameFormModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
