import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nomes: string[] = []

  salvar(nome: string) {
    this.nomes.push(nome);
  }

}
