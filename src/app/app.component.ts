import {Component} from '@angular/core';
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

    while (K < INDEX) {
      K = K + 1
      this.SUM = this.SUM + K
    }
    console.warn(this.SUM)

    return this.SUM
  }


  ngOnInit() {
    this.teste1()
  }

}
