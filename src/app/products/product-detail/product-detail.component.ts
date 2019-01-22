import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProductsService } from '../products.service';
import { Product } from '../products.component';
import { FavouritesService } from '../../favourites/favourites.service';
import { ToastrService } from '../../toastr.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  id: number;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private router: Router,
              private favouritesService: FavouritesService,
              private toastrService: ToastrService,
              private cartService: CartService) {}

  ngOnInit() {

  }

  addToFavourites(product: Product) {
    this.favouritesService.addToFavouriteProduct(product);
    this.toastrService.info("Product add to favourite");

  }
  addToCart(product: Product) {
    this.cartService.addToCartProduct(product);
    this.toastrService.info("Product add to cart");
  }

}
