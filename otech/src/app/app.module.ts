import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './components/templates/title/title.component';
import { FormComponent } from './components/templates/form/form.component';
import {CepService} from '../model/cep/cep.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
