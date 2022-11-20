import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { MensagemComponent } from './mensagem/mensagem.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, HomeComponent, ProjetosComponent, ContatoComponent, TecnologiasComponent, MensagemComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
