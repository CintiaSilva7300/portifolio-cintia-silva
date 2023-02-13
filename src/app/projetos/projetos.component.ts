import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent implements OnInit {
  ImagePath: string;
  ImageIfood: string;
  ImageAppcesta: string;
  ImagePortifolio: string;
  ImagealuraClole: string;
  ImageAppFinancas: string;
  ImageNSecreto: string;
  ImagePoke: string;
  ImageTelaLogin: string;

  constructor() {
    this.ImagePath = '/assets/marketplace/capituranovahome.PNG';
    this.ImageIfood = '/assets/ifood/ifood.PNG';
    this.ImageAppcesta = '/assets/appCesta/teste8.PNG';
    this.ImagePortifolio = '/assets/portifolio/portifolio.PNG';
    this.ImagealuraClole = '/assets/aluraClone/aluraclone2.PNG';

    this.ImageAppFinancas = '/assets/img/appfinanca.png';
    this.ImageNSecreto = '/assets/img/numeroSecreto.png';
    this.ImagePoke = '/assets/img/pokedex.png';
    this.ImageTelaLogin = '/assets/img/telaDeLogin.png';

  }

  ngOnInit(): void {}
}
