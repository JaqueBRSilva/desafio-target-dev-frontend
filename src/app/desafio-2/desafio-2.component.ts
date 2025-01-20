import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-desafio-2',
  imports: [FormsModule],
  templateUrl: './desafio-2.component.html',
  styleUrl: './desafio-2.component.css'
})
export class Desafio2Component {
  numero!: number
  resultado: string = ''

  fibonacciTest() {
    let a = 0;
    let b = 1;
    let fib = 0;

    if (this.numero === 0 || this.numero === 1) {
      this.resultado = `O número ${this.numero} pertence à sequência de Fibonacci!`;
      return;
    }

    while (fib <= this.numero) {
      fib = a + b;
      if (fib === this.numero) {
        this.resultado = `O número ${this.numero} pertence à sequência de Fibonacci!`;
        return;
      }
      a = b;
      b = fib;
    }

    this.resultado = `O número ${this.numero} NÃO pertence à sequência de Fibonacci!`;
  }
  
}