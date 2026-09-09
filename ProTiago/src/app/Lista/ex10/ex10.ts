import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html'
})
export class Ex10 {
  usuario = '';
  senha = '';
  mensagem = '';

  entrar() {
    this.mensagem = `Bem-vindo, ${this.usuario}!`;
  }
}
