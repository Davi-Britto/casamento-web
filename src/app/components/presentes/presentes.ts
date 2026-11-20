
import { Component } from '@angular/core';
import { finalize } from 'rxjs';

import { ScrollReveal } from '../../shared/scroll-reveal';
import { Notificacao } from '../notificacao/notificacao';

import {
  Presente,
  PresenteService
} from '../../services/presente.service';

@Component({
  selector: 'app-presentes',
  imports: [ScrollReveal, Notificacao],
  templateUrl: './presentes.html',
  styleUrl: './presentes.scss',
})
export class Presentes {

  chavePix = 'davi.m.britto@gmail.com';

  notificacaoAberta = false;
  modalListaAberto = false;

  presentesCasa: Presente[] = [];

  carregando = false;
  salvando = false;

  mensagemStatus = '';
  erroLista = false;

  avisoAlteracoesPendentes = false;

  private estadosOriginais = new Map<number, boolean>();

  constructor(
    private presenteService: PresenteService
  ) {}

  get totalRecebidos(): number {
    return this.presentesCasa.filter(
      presente => presente.recebido
    ).length;
  }

  get temAlteracoes(): boolean {
    return this.presentesCasa.some(
      presente =>
        this.estadosOriginais.get(presente.id) !== presente.recebido
    );
  }

  abrirLista(): void {
    this.modalListaAberto = true;
    document.body.style.overflow = 'hidden';

    this.avisoAlteracoesPendentes = false;

    this.carregarPresentes();
  }

  fecharLista(): void {
    if (this.salvando) {
      return;
    }

    if (this.temAlteracoes) {
      this.avisoAlteracoesPendentes = true;
      return;
    }

    this.modalListaAberto = false;
    document.body.style.overflow = '';

    this.mensagemStatus = '';
    this.erroLista = false;
    this.avisoAlteracoesPendentes = false;
  }

  carregarPresentes(): void {
    this.carregando = true;
    this.mensagemStatus = '';
    this.erroLista = false;
    this.avisoAlteracoesPendentes = false;

    this.presenteService.listarPresentes()
      .pipe(
        finalize(() => this.carregando = false)
      )
      .subscribe({
        next: (presentes) => {
          this.presentesCasa = presentes;

          this.estadosOriginais = new Map(
            presentes.map(presente => [
              presente.id,
              presente.recebido
            ])
          );

          this.avisoAlteracoesPendentes = false;
        },

        error: () => {
          this.mensagemStatus =
            'Não foi possível carregar a lista de presentes. Tente novamente mais tarde.';

          this.erroLista = true;
        }
      });
  }

  salvarAlteracoes(): void {
    if (
      this.salvando ||
      this.carregando ||
      this.presentesCasa.length === 0 ||
      !this.temAlteracoes
    ) {
      return;
    }

    this.salvando = true;
    this.mensagemStatus = '';
    this.erroLista = false;

    const request = {
      presentes: this.presentesCasa.map(presente => ({
        id: presente.id,
        recebido: presente.recebido
      }))
    };

    this.presenteService.alterarRecebidos(request)
      .pipe(
        finalize(() => this.salvando = false)
      )
      .subscribe({
        next: () => {
          this.estadosOriginais = new Map(
            this.presentesCasa.map(presente => [
              presente.id,
              presente.recebido
            ])
          );

          this.mensagemStatus =
            'Lista de presentes atualizada com sucesso!';

          this.erroLista = false;
          this.avisoAlteracoesPendentes = false;
        },

        error: () => {
          this.mensagemStatus =
            'Não foi possível salvar as alterações. Tente novamente.';

          this.erroLista = true;
        }
      });
  }

  copiarPix(): void {
    navigator.clipboard.writeText(this.chavePix);

    this.notificacaoAberta = true;

    setTimeout(() => {
      this.notificacaoAberta = false;
    }, 3000);
  }
}
