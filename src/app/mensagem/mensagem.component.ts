import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css'],
})
export class MensagemComponent implements OnInit {
  @Input() emailDestino: string = 'cintiasilva7300@gmail.com';

  constructor() {}

  ngOnInit(): void {}
}
