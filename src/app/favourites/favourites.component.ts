import { Component, OnInit } from '@angular/core';

import { FavouritesService } from './favourites.service';
import { Product } from '../products/products.component';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})

export class FavouritesComponent implements OnInit {

  messageTitle = 'No Favourite Products Found';
  messageDescription = 'Please, choose your favourite products';
  descending: boolean = false;
  order: number;
  column: any = 'price';
  showDataNotFound = true;
  favouriteProducts: Product[];

 constructor(private productsService: ProductsService,
              private favouritesService: FavouritesService) {}

  ngOnInit() {
    this.getFavouriteProduct();
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  onDeleteFavourite(product: Product) {
    this.favouritesService.removeLocalFavourite(product);

    this.getFavouriteProduct();
  }

  getFavouriteProduct() {
    this.favouriteProducts = this.favouritesService.getLocalFavouriteProduct();
  }

}
