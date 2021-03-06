import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TitleComponent } from "./components/templates/title/title.component";
import { FormComponent } from "./components/templates/form/form.component";
import { CepService } from "../model/cep/cep.service";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "./components/templates/footer/footer.component";
import { FormValidateComponent } from "./form-validate/form-validate.component";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FormComponent,
    FooterComponent,
    FormValidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CepService],
  bootstrap: [AppComponent],
})
export class AppModule {}
