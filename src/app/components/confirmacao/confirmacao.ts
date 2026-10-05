import { Component } from '@angular/core';
import { ScrollReveal } from '../../shared/scroll-reveal';
import { Popup } from '../popup/popup';

@Component({
  selector: 'app-confirmacao',
  imports: [ScrollReveal, Popup],
  templateUrl: './confirmacao.html',
  styleUrl: './confirmacao.scss',
})
export class Confirmacao {
  convidados = [
        {
            nome: 'Amarildo',
            resposta: ''
        },
        {
            nome: 'Gisele',
            resposta: ''
        }
    ];

  popupAberto = false;

  confirmarPresenca() {
    this.popupAberto = true;
  }

  fecharPopup() {
    this.popupAberto = false;
  }
}
