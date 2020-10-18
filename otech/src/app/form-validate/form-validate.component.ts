import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-validate",
  templateUrl: "./form-validate.component.html",
  styleUrls: ["./form-validate.component.css"],
})
export class FormValidateComponent implements OnInit {
  nome: string;
  nome2: string;

  constructor() {}

  ngOnInit(): void {}

  validar() {
    console.log(this.nome);
  }
}
