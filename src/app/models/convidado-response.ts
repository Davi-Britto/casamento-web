import { EPresenca } from "./e-presenca";

export interface ConvidadoResponse {
  id: number;
  nome: string;
  presenca: EPresenca;
  dataConfirmacao: string | null;
}