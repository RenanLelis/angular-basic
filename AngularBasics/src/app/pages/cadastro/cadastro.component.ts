import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  // template: '<p>asdasd</p>',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output('salvarNomeAlias') salvarNome: EventEmitter<string> = new EventEmitter<string>()

  // texto = "Texto do componente";
  // disabledButton = false;
  nome = "";

  constructor() { }

  ngOnInit(): void {
  }

  // alterarTexto() {
  // this.texto = "Novo texto do componente";
  // this.nome = "Renan";
  // this.disabledButton = true;
  // }

  salvar() {
    console.log(this.nome);
    this.salvarNome.emit(this.nome);
  }

}
