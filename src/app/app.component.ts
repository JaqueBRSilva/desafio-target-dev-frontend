import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // TESTE 1
  sumCount = 0

  teste1(): number {
    const INDEX = 13
    let K = 0

    while (K < INDEX) {
      K = K + 1
      this.sumCount = this.sumCount + K
    }

    return this.sumCount
  }


  ngOnInit() {
    this.teste1()
  }

}
