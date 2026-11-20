import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

export interface Presente {
  id: number;
  nome: string;
  categoria: string;
  recebido: boolean;
  ordem: number;
}

export interface PresenteRecebidoRequest {
  id: number;
  recebido: boolean;
}

export interface AlterarPresentesRecebidosRequest {
  presentes: PresenteRecebidoRequest[];
}

@Injectable({
  providedIn: 'root'
})
export class PresenteService {

  private readonly apiUrl = `${environment.apiUrl}/presentes`;

  constructor(private http: HttpClient) {}

  listarPresentes(): Observable<Presente[]> {
    return this.http.get<Presente[]>(this.apiUrl);
  }

  alterarRecebidos(
    request: AlterarPresentesRecebidosRequest
  ): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/recebidos`,
      request
    );
  }
}
