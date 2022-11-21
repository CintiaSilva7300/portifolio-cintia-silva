import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  ImageTypescript: String;
  ImageInstagram: String;
  ImageGmail: String;
  ImageGit: String;

  constructor() {
    this.ImageTypescript = '/assets/img/typescript.png';
    this.ImageInstagram = '/assets/img/instagram.png';
    this.ImageGmail = '/assets/img/gmail3.png';
    this.ImageGit = '/assets/img/githubImg.png';
  }

  ngOnInit(): void {}
}
