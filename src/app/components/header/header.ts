import { Component, HostListener } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private router: Router) { }


  scrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
