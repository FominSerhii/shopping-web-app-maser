import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import{ ToastrService } from '../../toastr.service';

import {Pipe, PipeTransform} from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { SortPipe } from '../../sort.pipe';

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

  descending: boolean = false;
  order: number;
  column: any = 'price';
  term;
  products: any;
  product: Product = new Product();
  counter = 0;

  constructor(private productsService: ProductsService,
              private favouritesService: FavouritesService,
              private cartService: CartService,
              public toastrService: ToastrService) {}

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
    this.toastrService.info("Product add to favourite");

  }
  addToCart(product: Product) {
    this.cartService.addToCartProduct(product);
    this.toastrService.info("Product add to cart");
  }
  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}

