import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html'
})
export class Ex6 {
  quantidade = 0;

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}
