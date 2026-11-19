import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  entrando = false;
  navegando = false;

  token: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.token = this.route.snapshot.paramMap.get('token');

    setTimeout(() => {
      this.entrando = true;
    }, 100);
  }

  goToConvite() {

    this.navegando = true;

    setTimeout(() => {
      if (this.token) {
        this.router.navigate(['/convite', this.token]);
      } else {
        this.router.navigate(['/convite']);
      }
    }, 500)
  }
}
