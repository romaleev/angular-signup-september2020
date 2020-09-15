import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from './_helpers/fake.backend';
import { InputComponent } from './_components/input.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    InputComponent
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
