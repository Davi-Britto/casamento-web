import { Component } from '@angular/core';
import { ScrollReveal } from '../../shared/scroll-reveal';
import { Notificacao } from '../notificacao/notificacao';

@Component({
  selector: 'app-presentes',
  imports: [ScrollReveal, Notificacao],
  templateUrl: './presentes.html',
  styleUrl: './presentes.scss',
})
export class Presentes {

  chavePix = 'davi.m.britto@gmail.com';

  notificacaoAberta = false;

  copiarPix() {

    navigator.clipboard.writeText('davi.m.britto@gmail.com');

    this.notificacaoAberta = true;

    setTimeout(() => {
      this.notificacaoAberta = false;
    }, 3000);
  }
}
