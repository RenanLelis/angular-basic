import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  nomes = ["Renan", "Fulano", "José"]

  constructor() { }

  ngOnInit(): void {
  }

}
