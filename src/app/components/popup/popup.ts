import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.html',
  styleUrl: './popup.scss',
})
export class Popup {

  @Input() mensagem = '';
  @Input() titulo = '';

  @Output() fechar = new EventEmitter<void>();

  fecharPopup() {
    this.fechar.emit();
  }
}
