import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../products.component';
import { CartService } from '../../cart/cart.service';
import { ProductsService } from '../products.service';
import { FavouritesService } from '../../favourites/favourites.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  products: any;
  product: Product = new Product();

  constructor(private productsService: ProductsService,
              private favouritesService: FavouritesService,
              private cartService: CartService) {}

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productsService.getProductList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(products => {
      this.products = products;
    });
  }

  addToFavourites(product: Product) {
    this.favouritesService.addToFavouriteProduct(product);
  }

  addToCart(product: Product) {
    this.cartService.addToCartProduct(product);
  }

}

