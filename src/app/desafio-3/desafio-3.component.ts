import { Component } from '@angular/core';
import { FaturamentoDiario } from '../../model/faturamento-diario';
import { GetInvoicingDataService } from '../service/get-invoicing-data.service';

@Component({
  selector: 'app-desafio-3',
  imports: [],
  templateUrl: './desafio-3.component.html',
  styleUrl: './desafio-3.component.css'
})
export class Desafio3Component {

  constructor(private faturamentoService: GetInvoicingDataService) { }

  valorFaturamento!: FaturamentoDiario[]

  menorValor: number | string = 0;
  maiorValor: number | string = 0;
  diasAcimaMedia: number = 0;

  ngOnInit() {
    this.carregarLista()
    this.calcularEstatisticas()
  }

  carregarLista() {
    this.faturamentoService.carregarDadosFaturamento().subscribe({
      next: (data) => {
        this.valorFaturamento = data
      },
      error: (error) => {
        console.error('Erro ao carregar dados de faturamento', error)
      }
    })
  }

  calcularEstatisticas() {
    const valoresValidos = this.valorFaturamento.filter(f => f.valor > 0)

    this.menorValor = Math.min(...valoresValidos.map(f => f.valor)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    this.maiorValor = Math.max(...valoresValidos.map(f => f.valor)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    const media = valoresValidos.reduce((acc, curr) => acc + curr.valor, 0) / valoresValidos.length
    this.diasAcimaMedia = valoresValidos.filter(f => f.valor > media).length
  }
}