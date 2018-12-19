import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

	email: string;
	password: string;

	constructor(public authService: AuthService) {}

  signupUser() {
    this.authService.signupUser(this.email, this.password);
    this.email = this.password = '';
  }

  signinUser() {
    this.authService.signinUser(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

}
