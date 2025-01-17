import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-1',
  imports: [],
  templateUrl: './desafio-1.component.html',
  styleUrl: './desafio-1.component.css'
})
export class Desafio1Component {
  sumCount = 0

  findSumValue(): number {
    const INDEX = 13
    let K = 0

    while (K < INDEX) {
      K = K + 1
      this.sumCount = this.sumCount + K
    }

    return this.sumCount
  }

  ngOnInit() {
    this.findSumValue()
  }
}
