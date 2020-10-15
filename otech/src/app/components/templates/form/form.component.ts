import { Component, OnInit } from '@angular/core';
import {CepService} from 'src/model/cep/cep.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  logradouro:string;
  cep:string;
  constructor(private cepService:CepService) {

   }

  ngOnInit(): void {
  }
recuperarEnderecoPorCep():void {

this.cepService.recuperarEnderecoPorCep(this.cep).subscribe(resposta =>{
  this.logradouro = resposta.logradouro;
});
}
}
