import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/model/cep/cep.service';
import { first } from "rxjs/operators";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public shown: boolean;
  primeiroNome: string;
  
  public cep: string;
  public logradouro: string;
  public localidade: string;
  public pais: string;

  public estadosOptions = [
    { id: '  ', name: "Selecione" },
    { id: 'DF', name: "Distrito Federal" },
    { id: 'RJ', name: "Rio de Janeiro" },
    { id: 'SP', name: "São Paulo" },
    { id: 'MG', name: "Minas Gerais" },
  ];

  checked() {
    this.shown = !this.shown;
  }

  constructor(private cepService : CepService ) {}

  ngOnInit(): void {

  }

  recuperarEnderecoPorCep() {

    this.cepService
    .recuperarEnderecoPorCep( this.cep )
    .pipe(first())
    .subscribe(
        (result) => {
          console.log( result )

          this.logradouro = result.logradouro;
          this.localidade = result.localidade;
          this.pais = 'Brasil';

        }
    )
   
  }

}
