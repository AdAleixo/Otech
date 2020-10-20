import { FormService } from './../../../../model/form/form.service';
import { MovieService } from './../../../../model/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/model/cep/cep.service';
import { first } from "rxjs/operators";
import { Movie } from 'src/model/movie/movie';
import {Form} from './../../../../model/form/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public shown: boolean;
  mostrar:boolean=false;
  primeiroNome: string;
  sobrenome: string;
  cpf:string;
  dataDeNascimento: string;
  email:string;

  primeiroNomeAcompanhante: string;
  sobrenomeAcompanhante:string;
  cpfAcompanhante:string;
  emailAcompanhante:string;
  dataNascimentoAcompanhante:string;
  filmeSelecionado: string;
  
  public cep: string;
  public logradouro: string;
  public localidade: string;
  public pais: string;
  public estado: string;

  public estadosOptions = [
    
    { id: 'DF', name: "Distrito Federal" },
    { id: 'RJ', name: "Rio de Janeiro" },
    { id: 'SP', name: "São Paulo" },
    { id: 'MG', name: "Minas Gerais" },
  ];

  


  moviesOptions: Movie[] = [];

  checked() {
    this.shown = !this.shown;
  }

  selecionado(){
    
    this.mostrar=true;
  }

  constructor(private cepService : CepService , private movieService : MovieService , 
    private formService : FormService) {}

  ngOnInit(): void {

      this.movieService.recuperarFilmes().subscribe(response=>{
          this.moviesOptions = response.results;
    });

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

  enviarForm(){

    this.formService.enviarForm({


      primeiro_nome: this.primeiroNome,
      sobrenome: this.sobrenome,
      cpf:this.cpf,
      data_nascimento:this.dataDeNascimento,
      email:this.email,
      primeiro_nome_acompanhante: this.primeiroNomeAcompanhante,
      sobrenome_acompanhante:this.sobrenomeAcompanhante,
      cpf_acompanhante:this.cpfAcompanhante,
      data_nascimento_acompanhante:this.dataNascimentoAcompanhante,
      email_acompanhante:this.emailAcompanhante,
      nome_filme:this.filmeSelecionado,
      cep:this.cep,
      endereco:this.logradouro,
      pais:this.pais,
      city:this.localidade



    })
    
  }

}
