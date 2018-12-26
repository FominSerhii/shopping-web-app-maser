import { MatDialog } from '@angular/material';
import { Component, Inject, OnInit} from '@angular/core';

import { map } from 'rxjs/operators';

import { ToastrService } from '../../toastr.service';
import { Product } from '../products.component';
import { ProductsService } from '../../products/products.service'
import { AdminProductsCreateComponent } from './admin-products-create/admin-products-create.component';

export interface Product {
  position: number;
  name: string;
  price: number;
  description: string;
  imagePath: string;
}

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})

export class AdminProductsComponent implements OnInit {

  products: any;
  displayedColumns: string[] = ['name', 'price', 'description', 'imagePath', 'create', 'delete'];
  dialogResult = '';

  constructor(public matdialog: MatDialog,
              private productsService: ProductsService,
              public toastr: ToastrService) {}

  openDialog(): void {
    let dialogRef = this.matdialog.open(AdminProductsCreateComponent, { width: '500px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result} `);
      this.dialogResult = result;
    });
  }

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

  onEdit(product: Product) {
    this.openDialog();
    this.productsService.selectedProduct = Object.assign({}, product);
    console.log(product)
  }

  deleteProduct(product: Product) {
    this.productsService.deleteProduct(product);
    this.toastr.info("Product","Product delete")
  }

}

