import { Component } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  imports: [],
  templateUrl: './cronometro.html',
  styleUrl: './cronometro.scss',
})
export class Cronometro {

  dias = 0;
  horas = 0;
  minutos = 0;
  segundos = 0;

  private intervalo!: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.atualizarCronometro();

    this.intervalo = setInterval(() => {
      this.atualizarCronometro();
    }, 1000);
  }

  atualizarCronometro() {

    const agora = new Date();

    const casamento = new Date(2026, 11, 26);

    const diferenca = casamento.getTime() - agora.getTime();

    if (diferenca <= 0) {
      this.dias = 0;
      this.horas = 0;
      this.minutos = 0;
      this.segundos = 0;
      return;
    }

    const totalSegundos = Math.floor(diferenca / 1000);

    this.dias = Math.floor(totalSegundos / 86400);

    this.horas = Math.floor((totalSegundos % 86400) / 3600);

    this.minutos = Math.floor((totalSegundos % 3600) / 60);

    this.segundos = totalSegundos % 60;
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }
}
