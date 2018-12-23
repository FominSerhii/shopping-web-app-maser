import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';

import { AuthService } from './auth/auth.service';
import { CartService } from './cart/cart.service';
import { FavouritesService } from './favourites/favourites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  email: string;
  password: string;

  constructor(public authService: AuthService,
              public cartService: CartService,
              public favouritesService: FavouritesService ) {}

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

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

}
