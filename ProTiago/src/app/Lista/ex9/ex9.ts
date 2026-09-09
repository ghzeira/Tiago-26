import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html'
})
export class Ex9 {
  produto = 'Mouse Gamer';
  estoque = 5;

  aumentarEstoque() {
    this.estoque++;
  }

  diminuirEstoque() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}
