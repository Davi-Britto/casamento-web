import { Component, HostListener, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  @Input() token: string | null = null;

  constructor(private router: Router) { }

  scrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  goToHome() {
    if (this.token) {
      this.router.navigate(['/', this.token]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
