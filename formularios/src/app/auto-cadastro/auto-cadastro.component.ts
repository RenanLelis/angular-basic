import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auto-cadastro',
  templateUrl: './auto-cadastro.component.html',
  styleUrls: ['./auto-cadastro.component.css']
})
export class AutoCadastroComponent implements OnInit {

  @ViewChild('formSignup') form!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  enviar() {
    console.log(this.form);
    console.log(this.form.value);
    console.log(this.form.controls['nome']);
  }

}
