import { Injectable } from '@angular/core';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'

import { AuthService } from '../auth/auth.service';
import { Product } from '../products/products.component';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  favouriteProducts: AngularFireList<Product>;
  private favourite: Product[] = [];

  favouritesCount = 0;

  constructor(private authService: AuthService,
              private db: AngularFireDatabase) { }

  getUsersFavouriteProduct() {
    const user = this.authService.getLoggedInUser();
    this.favouriteProducts = this.db.list('favouriteProducts', (ref) =>
      ref.orderByChild('userId').equalTo(user.key)
    );
    return this.favouriteProducts;
  }

  addToFavouriteProduct(product: Product): void {
    let a: Product[];
    a = JSON.parse(localStorage.getItem('fav_item')) || [];
    a.push(product);
    setTimeout(() => {
      localStorage.setItem('fav_item', JSON.stringify(a));
      this.calculateCartCount();
    }, 500);
  }

  getLocalFavouriteProduct() : Product[] {
    const products:Product[] = JSON.parse(localStorage.getItem('fav_item')) || [];

    return products;
  }

  removeFavourite(key: string) {
    this.favouriteProducts.remove(key);
  }

  removeLocalFavourite(product: Product) {
    const products: Product[] = JSON.parse(localStorage.getItem('fav_item'));

    for(let i = 0; i < products.length; i++) {
      if (products[i].key === product.key) {
        products.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('fav_item', JSON.stringify(products));
    this.calculateCartCount();
  }

  calculateCartCount() {
    this.favouritesCount = this.getLocalFavouriteProduct().length;
  }

}
