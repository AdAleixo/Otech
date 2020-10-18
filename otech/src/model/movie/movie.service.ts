import { environment } from './../../environments/environment';
import { MoviesResponse } from './movies.response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  recuperarFilmes():Observable<MoviesResponse>{

    return this.http.get<MoviesResponse>(environment.urlMovies+ "/movie/upcoming?api_key=2a51a139f755eeacb9cb94abce302abb&language=en-US&page=1");
  }
}
