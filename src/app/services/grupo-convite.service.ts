import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { GrupoConviteResponse } from '../models/grupo-convite-response';
import { AlterarPresencasRequest } from '../models/alterar-presencas-request';

@Injectable({
  providedIn: 'root',
})
export class GrupoConviteService {
  private readonly apiUrl = `${environment.apiUrl}/convites`;

  constructor(private http: HttpClient) {
  }

  buscarPorToken(token: string) {
    return this.http.get<GrupoConviteResponse | null>(
      `${this.apiUrl}/${token}`
    );
  }

  alterarPresencas(token: string, request: AlterarPresencasRequest){
    return this.http.put<void>(
      `${this.apiUrl}/${token}/presencas`, request
    );
  }
}
