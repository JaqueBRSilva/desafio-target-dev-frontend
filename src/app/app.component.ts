import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  titleProject = 'Desafio Target - Dev Front-end'

  SUM = 0

  teste1(): number {
    const INDEX = 13
    let K = 0

    while (this.SUM < INDEX) {
      K = K + 1
      this.SUM = this.SUM + K
      console.info(this.SUM)
    }

    return this.SUM
  }


  ngOnInit() {
    this.teste1()
  }

}
