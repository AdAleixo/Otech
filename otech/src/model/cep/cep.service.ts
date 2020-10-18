import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { map, retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'

})
export class CepService {

  recuperarEnderecoPorCep(cep){
      return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/` ).pipe(
        map((result) => {  
          return result;
        }),
      );
  }
  

  constructor(private http:HttpClient) {} 

}
