import { Component } from '@angular/core';
import { Historia } from '../../components/historia/historia';
import { Galeria } from '../../components/galeria/galeria';
import { Informacao } from '../../components/informacao/informacao';
import { Presentes } from '../../components/presentes/presentes';
import { Confirmacao } from '../../components/confirmacao/confirmacao';
import { Padrinhos } from '../../components/padrinhos/padrinhos';
import { Footer } from '../../components/footer/footer';
import { HeroConvite } from '../../components/hero-convite/hero-convite';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-convite',
  imports: [Historia, Galeria, Informacao, Presentes, Confirmacao, Padrinhos, Footer, HeroConvite, Header],
  templateUrl: './convite.html',
  styleUrl: './convite.scss',
})
export class Convite {
  
}
