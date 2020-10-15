import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class CepService {

  recuperarEnderecoPorCep(cep:string ):Observable<any[]>{

    return this.http.get<any[]>(`http://viacep.com.br/ws/$cep/json/`)


  }
  constructor(private http:HttpClient) {

  }
}
