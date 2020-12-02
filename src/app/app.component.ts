import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imuno-front';

  constructor(private router: Router){ }

  get exibirNavbar() {
    return this.router.url !== '/login';
  }
}
