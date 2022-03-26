import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  // template: '<p>asdasd</p>',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  texto = "Texto do componente";
  disabledButton = false;
  nome = "";

  constructor() { }

  ngOnInit(): void {
  }

  alterarTexto() {
    this.texto = "Novo texto do componente";
    this.nome = "Renan";
    this.disabledButton = true;
  }

}
