import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private router: Router) { }

  entrando = false;
  navegando = false;

  ngOnInit() {
    setTimeout(() => {
      this.entrando = true;
    }, 100);
  }

  goToConvite() {
    this.navegando = true;
    setTimeout(() => {
      this.router.navigate(['/convite']);
    }, 500)
  }
}
