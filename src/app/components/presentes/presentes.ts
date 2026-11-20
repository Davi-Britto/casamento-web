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

  modalListaAberto = false;

  presentesCasa = [
    { nome: 'Geladeira', categoria: 'Eletrodomésticos', recebido: false },
    { nome: 'Fogão', categoria: 'Eletrodomésticos', recebido: false },
    { nome: 'Máquina de lavar', categoria: 'Eletrodomésticos', recebido: false },
    { nome: 'Micro-ondas', categoria: 'Eletrodomésticos', recebido: false },
    { nome: 'Ferro a Vapor', categoria: 'Eletrodomésticos', recebido: false },
    { nome: 'Ventilador', categoria: 'Eletrodomésticos', recebido: false },
    { nome: 'TV', categoria: 'Eletrodomésticos', recebido: false },
    { nome: 'Aspirado Portátil', categoria: 'Eletrodomésticos', recebido: false },
    { nome: 'Sofá', categoria: 'Sala', recebido: false },
    { nome: 'Sugar', categoria: 'Cozinha', recebido: false },
    { nome: 'Cafeteira', categoria: 'Cozinha', recebido: false },
    { nome: 'Espatula de Silicone', categoria: 'Cozinha', recebido: false },
    { nome: 'Jogo de Sobremesa', categoria: 'Cozinha', recebido: false },
    { nome: 'Jogo de Pratos', categoria: 'Cozinha', recebido: false }, 
    { nome: 'Jogo de Panelas', categoria: 'Cozinha', recebido: false },
    { nome: 'Liquidificador', categoria: 'Cozinha', recebido: false },
    { nome: 'Panela', categoria: 'Cozinha', recebido: false },
    { nome: 'Batedeira', categoria: 'Cozinha', recebido: false },
    { nome: 'Batedeira', categoria: 'Cozinha', recebido: false },
    { nome: 'Sanduicheira', categoria: 'Cozinha', recebido: false },
    { nome: 'Air Fryer', categoria: 'Cozinha', recebido: false },
    { nome: 'Sanduicheira', categoria: 'Cozinha', recebido: false },
    { nome: 'Bandeja de Café', categoria: 'Cozinha', recebido: false },
    { nome: 'Mixer', categoria: 'Cozinha', recebido: false },
    { nome: 'Filtro', categoria: 'Cozinha', recebido: false },
    { nome: 'Jogo de cama', categoria: 'Quarto', recebido: false },
    { nome: 'Jogo de lençol (Cama Casal)', categoria: 'Quarto', recebido: false },
    { nome: 'Guarda Roupa', categoria: 'Quarto', recebido: false },
    { nome: 'Cama', categoria: 'Quarto', recebido: false },
    { nome: 'Edredom', categoria: 'Quarto', recebido: false },
    { nome: 'Cobertor', categoria: 'Quarto', recebido: false },
    { nome: 'Toalha', categoria: 'Quarto', recebido: false },
    { nome: 'Travesseiro', categoria: 'Quarto', recebido: false },
    { nome: 'Colcha', categoria: 'Quarto', recebido: false }
  ];

  get totalRecebidos(): number {
    return this.presentesCasa.filter(p => p.recebido).length;
  }

  abrirLista() {
    this.modalListaAberto = true;
    document.body.style.overflow = 'hidden';
  }

  fecharLista() {
    this.modalListaAberto = false;
    document.body.style.overflow = '';
  }

  copiarPix() {

    navigator.clipboard.writeText('davi.m.britto@gmail.com');

    this.notificacaoAberta = true;

    setTimeout(() => {
      this.notificacaoAberta = false;
    }, 3000);
  }
}
