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
  ImagealuraCole: string;

  constructor() {
    this.ImagePath = '/assets/marketplace/capituranovahome.PNG';
    this.ImageIfood = '/assets/ifood/ifood.PNG';
    this.ImageAppcesta = '/assets/appCesta/teste8.PNG';
    this.ImagePortifolio = '/assets/portifolio/portifolio.PNG';
    this.ImagealuraCole = '/assets/aluraClone/aluraclone2.PNG';
  }

  ngOnInit(): void {}
}
