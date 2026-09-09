import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
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


@NgModule({
declarations: [
  App,
  Ex1,
  Ex2,
  Ex3,
  Ex4,
  Ex5,
  Ex6,
  Ex7,
  Ex8,
  Ex9,
  Ex10,
  Ex11,
  ExFinal
],
  
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
