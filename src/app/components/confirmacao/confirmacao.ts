import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScrollReveal } from '../../shared/scroll-reveal';
import { Popup } from '../popup/popup';
import { GrupoConviteResponse } from '../../models/grupo-convite-response';
import { AlterarPresencasRequest } from '../../models/alterar-presencas-request';
import { EPresenca } from '../../models/e-presenca';
import { ConvidadoResponse } from '../../models/convidado-response';

@Component({
  selector: 'app-confirmacao',
  imports: [ScrollReveal, Popup],
  templateUrl: './confirmacao.html',
  styleUrl: './confirmacao.scss',
})
export class Confirmacao {

  @Input()
  grupoConvite: GrupoConviteResponse | null = null;

  @Output()
  confirmar = new EventEmitter<AlterarPresencasRequest>();

  popupAberto = false;

  EPresenca = EPresenca;

  confirmarPresenca() {

    if (!this.grupoConvite) {
      return;
    }

    const request: AlterarPresencasRequest = {
      convidados: this.grupoConvite.convidados.map(convidado => ({
        id: convidado.id,
        presenca: convidado.presenca
      }))
    };

    this.confirmar.emit(request);
    this.popupAberto = true;
  }

  alterarPresenca(convidado: ConvidadoResponse, presenca: EPresenca) {
    convidado.presenca = presenca;
  }

  fecharPopup() {
    this.popupAberto = false;
  }
}
