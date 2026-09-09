import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-final',
  standalone: false,
  templateUrl: './ex-final.html'
})
export class ExFinal {
  nomeAluno = '';
  quantidadeDisciplinas = 1;
  mensagem = '';

  aumentarDisciplinas() {
    this.quantidadeDisciplinas++;
  }

  diminuirDisciplinas() {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagem =
      `Matrícula realizada para ${this.nomeAluno} em ${this.quantidadeDisciplinas} disciplina(s).`;
  }
}
