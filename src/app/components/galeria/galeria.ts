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
    'images/01_casal_abraco.jpg',
    'images/02_casal_caminhando.jpg',
    'images/03_noiva_sozinha.jpg',
    'images/04_maos_entrelacadas.jpg',
    'images/05_silhueta_por_do_sol.jpg',
    'images/06_casal_abraco_2.jpg',
    'images/02_casal_caminhando.jpg',
    'images/03_noiva_sozinha.jpg',
    'images/04_maos_entrelacadas.jpg',
    'images/01_casal_abraco.jpg',
    'images/02_casal_caminhando.jpg'
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
