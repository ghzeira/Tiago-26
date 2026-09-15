import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  standalone: false,
  templateUrl: './ex1.html'
})
export class Ex1 {
  nome = 'Carlos';
  idade = 25;
  curso = 'Engenharia de Software';
}