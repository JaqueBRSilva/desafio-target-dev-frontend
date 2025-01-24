import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaturamentoDiario } from '../../model/faturamento-diario';

import fileJSON from '../../../data/dados.json';

@Injectable({
  providedIn: 'root'
})
export class GetInvoicingDataService {

  constructor(private http: HttpClient) { }

  carregarDadosFaturamento(): Observable<FaturamentoDiario[]> {
    return new Observable<FaturamentoDiario[]>(observer => {
      observer.next(fileJSON as FaturamentoDiario[]);
      observer.complete();
    });
  }
}