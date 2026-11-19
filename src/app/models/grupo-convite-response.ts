import { ConvidadoResponse } from './convidado-response';

export interface GrupoConviteResponse {
  id: number;
  nomeExibicao: string;
  convidados: ConvidadoResponse[];
}