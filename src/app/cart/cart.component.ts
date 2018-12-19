import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';
import { Product } from '../products/products.component';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  messageTitle = 'No Cart Products Found';
  messageDescription = 'Please, choose your cart products';

  showDataNotFound = true;
  cartProducts: Product[];

 constructor(private productsService: ProductsService,
             private cartService: CartService) {}
  ngOnInit() {
    this.getCartProduct();
  }

  onDeleteCart(product: Product) {
    this.cartService.removeLocalCart(product);

    this.getCartProduct();
  }

  getCartProduct() {
    this.cartProducts = this.cartService.getLocalCartProduct();
  }

}
