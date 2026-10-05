import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notificacao',
  imports: [],
  templateUrl: './notificacao.html',
  styleUrl: './notificacao.scss',
})
export class Notificacao {
  @Input() titulo = '';
  @Input() mensagem = '';
  @Input() icone = 'check_circle';
}
