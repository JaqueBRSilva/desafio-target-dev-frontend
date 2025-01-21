import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Desafio1Component } from './desafio-1/desafio-1.component';
import { Desafio2Component } from './desafio-2/desafio-2.component';
import { Desafio3Component } from './desafio-3/desafio-3.component';
import { Desafio4Component } from './desafio-4/desafio-4.component';
import { Desafio5Component } from './desafio-5/desafio-5.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [Desafio1Component, Desafio2Component, Desafio3Component, Desafio4Component,
    Desafio5Component, RouterOutlet, HeaderComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
