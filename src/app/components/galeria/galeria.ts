import { Component } from '@angular/core';
import { ScrollReveal } from '../../shared/scroll-reveal';

@Component({
  selector: 'app-galeria',
  imports: [ScrollReveal],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria {

  imagens = [
    'images/pre_wedding1.jpg',
    'images/pre_wedding2.jpg',
    'images/pre_wedding3.jpg',
    'images/pre_wedding4.jpg',
    'images/pre_wedding5.jpg',
    'images/pre_wedding6.jpg',
    'images/pre_wedding7.jpg',
    'images/pre_wedding8.jpg',
    'images/pre_wedding9.jpg',
    'images/pre_wedding10.jpg',
    'images/pre_wedding11.jpg'
  ];

  imagemAtual: number | null = null;

  abrirImagem(index: number) {
    this.imagemAtual = index;
    document.body.style.overflow = 'hidden';
  }

  fecharImagem() {
    this.imagemAtual = null;
    document.body.style.overflow = '';
  }

  imagemAnterior() {
    if (this.imagemAtual === null) return;

    this.imagemAtual =
      (this.imagemAtual - 1 + this.imagens.length) %
      this.imagens.length;
  }

  imagemProxima() {
    if (this.imagemAtual === null) return;

    this.imagemAtual =
      (this.imagemAtual + 1) %
      this.imagens.length;
  }
}
