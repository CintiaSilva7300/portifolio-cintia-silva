import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  ImageInstagram: string;
  ImageLinkedin: string;
  ImageTwitter: string;
  ImageGitHub: string;

  constructor() {
    this.ImageInstagram = '/assets/iconesFooter/instagram.png';
    this.ImageLinkedin = '/assets/iconesFooter/linkedin.png';
    this.ImageTwitter = '/assets/iconesFooter/twitter.png';
    this.ImageGitHub = '/assets/iconesFooter/github.png';
  }

  ngOnInit(): void {}
}
