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
    { nome: 'Laura e Bordon', foto: 'images/padrinhos/casal1.jpg' },
    { nome: 'Alice e Abner', foto: 'images/padrinhos/casal2.jpg' },
    { nome: 'Débora e Ricardo', foto: 'images/padrinhos/casal3.jpg' },
    { nome: 'Rhaissa e Gabriel', foto: 'images/padrinhos/casal4.jpg' },
    { nome: 'Jhonas e Vic', foto: 'images/padrinhos/casal5.jpg' },
    { nome: 'Tia Suh', foto: 'images/padrinhos/madrinha6.jpg' },
    { nome: 'Maylon', foto: 'images/padrinhos/padrinho7.jpg' },
    { nome: 'Tia Grazi e Tio Flávio', foto: 'images/padrinhos/casal8.jpg' },

    { nome: 'Tia Nana e Tio Dani', foto: 'images/padrinhos/casal9.jpg' },
    { nome: 'Bianca e Paulo', foto: 'images/padrinhos/casal10.jpg' },
    { nome: 'Ingrid e Tio Russo', foto: 'images/padrinhos/casal11.jpg' },
    { nome: 'Isabelle e Nickolas', foto: 'images/padrinhos/casal12.jpg' },
    { nome: 'Esther', foto: 'images/padrinhos/madrinha13.jpg' },
    { nome: 'Pedro', foto: 'images/padrinhos/padrinho14.jpg' },
    { nome: 'Tia Lela e Tio Paulo', foto: 'images/padrinhos/casal15.jpg' },
    { nome: 'Tia Gabi e Rodrigo', foto: 'images/padrinhos/casal16.jpg' }
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