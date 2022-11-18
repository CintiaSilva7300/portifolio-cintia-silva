import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css'],
})
export class TecnologiasComponent implements OnInit {
  ImageBootstrap: string;
  Imagejavascript: string;
  Imagereact: string;
  Imageangular: string;

  constructor() {
    this.ImageBootstrap = '/assets/img/bootstrap.png';
    this.Imagejavascript = '/assets/img/javascript.png';
    this.Imagereact = '/assets/img/react.png';
    this.Imageangular = '/assets/img/eangular.png';
  }

  ngOnInit(): void {}
}
