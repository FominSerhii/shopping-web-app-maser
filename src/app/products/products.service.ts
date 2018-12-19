import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Product } from './products.component';
import { AuthService } from '../auth/auth.service';
import { FavouritesService } from '../favourites/favourites.service';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private dbPath = '/products';

  productsRef: AngularFireList<any>;
  product: AngularFireObject<Product>
  selectedProduct: Product = new Product();

  constructor(private db: AngularFireDatabase,
              private authService: AuthService,
              private favouritesService: FavouritesService) {
    this.productsRef = db.list(this.dbPath);
  }

  createProduct(product: Product) {
    this.productsRef.push(product);
  }

  getProductById(key: string) {
    this.product = this.db.object('products/' + key);
    return this.product;
  }

  updateProduct(product: Product) {
    this.productsRef.update(product.key, product);
  }

  deleteProduct(product: Product) {
    return this.productsRef.remove(product.key);
  }

  getProductList(): AngularFireList<Product> {
    return this.productsRef;
  }

  private handleError(error) {
    console.log(error);
  }

}



