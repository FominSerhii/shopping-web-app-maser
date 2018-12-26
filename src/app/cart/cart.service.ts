import { Injectable } from '@angular/core';

import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database'

import { AuthService } from '../auth/auth.service';
import { Product } from '../products/products.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 
  cartProducts: AngularFireList<Product>;
  private cart: Product[] = [];

  cartCount = 0;

  constructor(private authService: AuthService,
              private db: AngularFireDatabase) {

    this.calculateCartCount();
  }

  addToCartProduct(product: Product): void {
    let a: Product[];

    a = JSON.parse(localStorage.getItem('cart_item')) || [];

    a.push(product);
    setTimeout(() => {
      localStorage.setItem('cart_item', JSON.stringify(a));
      this.calculateCartCount();
    }, 500);
  }

  removeLocalCart(product: Product) {
    const products: Product[] = JSON.parse(localStorage.getItem('cart_item'));

    for(let i = 0; i < products.length; i++) {
      if (products[i].key === product.key) {
        products.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('cart_item', JSON.stringify(products));
    this.calculateCartCount();
  }


  getLocalCartProduct() : Product[] {
    const products:Product[] = JSON.parse(localStorage.getItem('cart_item')) || [];

    return products;
  }

  calculateCartCount() {
    this.cartCount = this.getLocalCartProduct().length;
  }

}
