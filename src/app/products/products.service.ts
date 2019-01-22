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
    this.productsRef.push({
      name: product.name,
      price: product.price,
      description: product.description,
      imagePath: product.imagePath
    })
  }

  getProductById(key: string) {
    this.product = this.db.object('products/' + key);
    return this.product;
  }

  getProduct(index: number) {
    return this.product[index];
  }

  updateProduct(product: Product) {
    this.productsRef.update(product.key, {
        name: product.name,
        price: product.price,
        description: product.description,
        imagePath: product.imagePath

    });
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



