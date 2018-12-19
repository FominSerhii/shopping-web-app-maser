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
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [

      transition ('1 => 2, 2 => 3, 3 => 4, 4 => 5, 1 => 3, 1 => 4, 2 => 4, 1 => 5, 2 => 5, 3 => 5, 4 => 5, 5 => 6',  [
        style({
          height: '!'
        }),
        query(':enter', style({
          transform: 'translateX(100%)'
        })),
        query(':enter, :leave',  style({
          position: 'absolute',
          top: '67px',
          left: 0,
          right: 0
        })),
        group([
          query(':leave', [animate('1.5s cubic-bezier(.35, 0, .25, 1)', style ({
            transform: 'translateX(-100%)'}))
          ]),
          query(':enter', [animate('1.3s cubic-bezier(.35, 0, .25, 1)', style ({
            transform: 'translateX(0)'}))
          ])
        ])
      ]),

      transition ('2 => 1, 3 => 2, 4 => 3, 5 => 4, 3 => 1, 4 => 1, 4 => 2, 6 => 5, 5 => 4, 5 => 3, 5 => 2, 5 => 1, 6 => 4, 6 => 3, 6 => 2, 6 => 1', [
        style({
          height: '!'
        }),
        query(':enter', style({
          transform: 'translateX(-100%)'
        })),
        query(':enter, :leave',  style({
          position: 'absolute',
          top: '67px',
          left: 0,
          right: 0
        })),
        group([
          query(':leave', [animate('1.5s cubic-bezier(.35, 0, .25, 1)', style ({
            transform: 'translateX(100%)'}))
          ]),
          query(':enter', [animate('1.3s cubic-bezier(.35, 0, .25, 1)', style ({
            transform: 'translateX(0)'}))
          ])
        ])
      ])
    ])
  ]
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
