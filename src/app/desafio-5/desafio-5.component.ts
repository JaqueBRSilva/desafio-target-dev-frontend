import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-desafio-5',
  imports: [FormsModule],
  templateUrl: './desafio-5.component.html',
  styleUrl: './desafio-5.component.css'
})
export class Desafio5Component {
  wordEnteredByUser: string = ''
  reversedWord: string[] = []

  reverseCharacters() {
    let invertido = ''

    for (let i = this.wordEnteredByUser.length - 1; i >= 0; i--) {
      invertido += this.wordEnteredByUser[i];
    }

    this.reversedWord = invertido.split("")
    this.wordEnteredByUser = ''
  }
}
