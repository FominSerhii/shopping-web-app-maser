import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


import {Pipe, PipeTransform} from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrderPipe } from 'ngx-order-pipe';
import { SortPipe } from '../../sort.pipe';

import { Product } from '../products.component';
import{ ToastrService } from '../../toastr.service';
import { CartService } from '../../cart/cart.service';
import { ProductsService } from '../products.service';
import { FavouritesService } from '../../favourites/favourites.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

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
  dialogResult = '';

  constructor(private productsService: ProductsService,
              private favouritesService: FavouritesService,
              private cartService: CartService,
              public toastrService: ToastrService,
              public matdialog: MatDialog) {}

  ngOnInit() {
    this.getProductList();
  }

  openDialog(): void {
    let dialogRef = this.matdialog.open(ProductDetailComponent, { width: '500px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result} `);
      this.dialogResult = result;
    });
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

