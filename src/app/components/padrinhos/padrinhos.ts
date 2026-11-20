import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScrollReveal } from '../../shared/scroll-reveal';

@Component({
  selector: 'app-padrinhos',
  imports: [ScrollReveal],
  templateUrl: './padrinhos.html',
  styleUrl: './padrinhos.scss',
})
export class Padrinhos implements OnInit, OnDestroy {

  paginaAtual = 0;
  animando = false;

  private intervalo!: ReturnType<typeof setInterval>;

  padrinhos = [
    { nome: 'Laura e Bordon', foto: 'images/padrinhos/casal1.webp' },
    { nome: 'Alice e Abner', foto: 'images/padrinhos/casal2.webp' },
    { nome: 'Débora e Ricardo', foto: 'images/padrinhos/casal3.webp' },
    { nome: 'Rhaissa e Gabriel', foto: 'images/padrinhos/casal4.webp' },
    { nome: 'Jhonas e Vic', foto: 'images/padrinhos/casal5.webp' },
    { nome: 'Tia Suh', foto: 'images/padrinhos/madrinha6.webp' },
    { nome: 'Maylon', foto: 'images/padrinhos/padrinho7.webp' },
    { nome: 'Tia Grazi e Tio Flávio', foto: 'images/padrinhos/casal8.webp' },

    { nome: 'Tia Nana e Tio Dani', foto: 'images/padrinhos/casal9.webp' },
    { nome: 'Bianca e Paulo', foto: 'images/padrinhos/casal10.webp' },
    { nome: 'Ingrid e Tio Russo', foto: 'images/padrinhos/casal11.webp' },
    { nome: 'Isabelle e Nickolas', foto: 'images/padrinhos/casal12.webp' },
    { nome: 'Esther', foto: 'images/padrinhos/madrinha13.webp' },
    { nome: 'Pedro', foto: 'images/padrinhos/padrinho14.webp' },
    { nome: 'Tia Lela e Tio Paulo', foto: 'images/padrinhos/casal15.webp' },
    { nome: 'Tia Gabi e Rodrigo', foto: 'images/padrinhos/casal16.webp' }
  ];

  get padrinhosVisiveis() {
    const inicio = this.paginaAtual * 8;
    return this.padrinhos.slice(inicio, inicio + 8);
  }

  ngOnInit() {
    this.iniciarIntervalo();
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  iniciarIntervalo() {
    this.intervalo = setInterval(() => {
      this.proximaPagina(false);
    }, 5000);
  }

  reiniciarIntervalo() {
    clearInterval(this.intervalo);
    this.iniciarIntervalo();
  }

  proximaPagina(manual = true) {
    if (this.animando) {
      return;
    }

    if (manual) {
      this.reiniciarIntervalo();
    }

    this.animando = true;

    setTimeout(() => {
      if (this.paginaAtual === 1) {
        this.paginaAtual = 0;
      } else {
        this.paginaAtual++;
      }
      this.animando = false;
    }, 300);
  }

  paginaAnterior() {
    if (this.animando) {
      return;
    }

    this.reiniciarIntervalo();

    this.animando = true;

    setTimeout(() => {
      this.paginaAtual--;
      this.animando = false;
    }, 300);
  }

}