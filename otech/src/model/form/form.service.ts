import { Form } from './form';


import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";



@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor(private http: HttpClient) {}
  enviarForm(form : Form): Observable<Form> {

    
    return this.http.post<Form>(
      "http://localhost/reserva", form ,{headers : {"authorization": "#ASDFGW#ERWQERTRYT#%$%$@#$%=="}}
      
    );
  }
}
