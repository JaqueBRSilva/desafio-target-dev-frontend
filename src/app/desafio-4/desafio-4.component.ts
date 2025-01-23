import { Component } from '@angular/core';

interface FaturamentoEstado {
  estado: string;
  valor: number;
}

@Component({
  selector: 'app-desafio-4',
  imports: [],
  templateUrl: './desafio-4.component.html',
  styleUrl: './desafio-4.component.css'
})
export class Desafio4Component {
  faturamento: FaturamentoEstado[] = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
  ];

  percentuais: Array<{ estado: string, percentual: number | string }> = [];

  ngOnInit() {
    this.calcularPercentuais();
  }

  calcularPercentuais() {
    const total = this.faturamento.reduce((acc, curr) => acc + curr.valor, 0);

    this.percentuais = this.faturamento.map(f => ({
      estado: f.estado,
      percentual: ((f.valor / total) * 100).toFixed(2)
    }));
  }
}