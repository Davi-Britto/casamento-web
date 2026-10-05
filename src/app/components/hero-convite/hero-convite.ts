import { Component } from '@angular/core';
import { Cronometro } from '../cronometro/cronometro';

@Component({
  selector: 'app-hero-convite',
  imports: [Cronometro],
  templateUrl: './hero-convite.html',
  styleUrl: './hero-convite.scss',
})
export class HeroConvite {
  entrando = false;

  ngOnInit() {
    setTimeout(() => {
      this.entrando = true;
    }, 300);
  }

  irParaConfirmacao() {
    document.getElementById('confirmacao')?.scrollIntoView({
        behavior: 'smooth'
    });
}
}
