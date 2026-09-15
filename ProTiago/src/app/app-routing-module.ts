import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ex1 } from './Lista/ex1/ex1';
import { Ex2 } from './Lista/ex2/ex2';
import { Ex3 } from './Lista/ex3/ex3';
import { Ex4 } from './Lista/ex4/ex4';
import { Ex5 } from './Lista/ex5/ex5';
import { Ex6 } from './Lista/ex6/ex6';
import { Ex7 } from './Lista/ex7/ex7';
import { Ex8 } from './Lista/ex8/ex8';
import { Ex9 } from './Lista/ex9/ex9';
import { Ex10 } from './Lista/ex10/ex10';
import { Ex11 } from './Lista/ex11/ex11';
import { ExFinal } from './Lista/ex-final/ex-final';

const routes: Routes = [
  { path: 'ex1', component: Ex1 },
  { path: 'ex2', component: Ex2 },
  { path: 'ex3', component: Ex3 },
  { path: 'ex4', component: Ex4 },
  { path: 'ex5', component: Ex5 },
  { path: 'ex6', component: Ex6 },
  { path: 'ex7', component: Ex7 },
  { path: 'ex8', component: Ex8 },
  { path: 'ex9', component: Ex9 },
  { path: 'ex10', component: Ex10 },
  { path: 'ex11', component: Ex11 },
  { path: 'ex-final', component: ExFinal }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
