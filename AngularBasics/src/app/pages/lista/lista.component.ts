import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  nomes = ["Renan", "Fulano", "José", "João", "Pedro", "Beltrano"]

  constructor() { }

  ngOnInit(): void {
  }

  getCor(i: number) {
    if (i % 2 == 0) {
      return 'blue';
    }
    return 'black';
  }

}
