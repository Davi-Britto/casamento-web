import { Component, OnInit } from '@angular/core';
import { Historia } from '../../components/historia/historia';
import { Galeria } from '../../components/galeria/galeria';
import { Informacao } from '../../components/informacao/informacao';
import { Presentes } from '../../components/presentes/presentes';
import { Confirmacao } from '../../components/confirmacao/confirmacao';
import { Padrinhos } from '../../components/padrinhos/padrinhos';
import { Footer } from '../../components/footer/footer';
import { HeroConvite } from '../../components/hero-convite/hero-convite';
import { Header } from '../../components/header/header';
import { GrupoConviteResponse } from '../../models/grupo-convite-response';
import { ActivatedRoute } from '@angular/router';
import { GrupoConviteService } from '../../services/grupo-convite.service';
import { AlterarPresencasRequest } from '../../models/alterar-presencas-request';

@Component({
  selector: 'app-convite',
  imports: [Historia, Galeria, Informacao, Presentes, Confirmacao, Padrinhos, Footer, HeroConvite, Header],
  templateUrl: './convite.html',
  styleUrl: './convite.scss',
})
export class Convite implements OnInit {

  grupoConvite: GrupoConviteResponse | null = null;
  token: string | null = null;

  constructor(private route: ActivatedRoute, private service: GrupoConviteService) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');

    if (!this.token) {
      console.log("Token zerado:" + this.token);
      return
    }

    this.service.buscarPorToken(this.token).subscribe(grupoConvite => {
      this.grupoConvite = grupoConvite;
      console.log("Grupo Convite:" + this.grupoConvite);
    });
  }

  alterarPresencas(request: AlterarPresencasRequest): void {

    if (!this.token) {
      return;
    }

    this.service.alterarPresencas(this.token, request).subscribe(() => {
      console.log('Presenças alteradas com sucesso.');
    });
  }

}
