import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class Product {

  key: string;
  name: string;
  price: number;
  description: string;
  imagePath: string;


}
