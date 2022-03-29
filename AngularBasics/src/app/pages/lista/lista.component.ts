import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input('listaNomes') nomes: String[] = []

  constructor() { }

  ngOnInit(): void {
  }

  // getCor(i: number) {
  //   if (i % 2 == 0) {
  //     return 'blue';
  //   }
  //   return 'black';
  // }

}
