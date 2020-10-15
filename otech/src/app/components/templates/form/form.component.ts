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

  checked(value){
  if(document.getElementById('acompCheck').checked==true){
    this.shown= true
  }
  else if(document.getElementById('acompCheck').checked==false)
    this.shown= false;
}
  constructor() {



   }

  ngOnInit(): void {

  }
recuperarEnderecoPorCep():void {

this.cepService.recuperarEnderecoPorCep(this.cep).subscribe(resposta =>{
  this.logradouro = resposta.logradouro;
});
}
}
