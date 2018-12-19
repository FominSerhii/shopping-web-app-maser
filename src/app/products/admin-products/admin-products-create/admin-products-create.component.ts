import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';

import { Product } from '../../products.component';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-admin-products-create',
  templateUrl: './admin-products-create.component.html',
  styleUrls: ['./admin-products-create.component.scss']
})

export class AdminProductsCreateComponent implements OnInit {

  product: Product = new Product();
  submitted = false;
  editMode: false;
  key: string;
  editedItem: Product;

  constructor(public productsService: ProductsService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AdminProductsCreateComponent>) { }

  ngOnInit() {}

  onSubmit(productForm: NgForm) {
    if (productForm.value.key == null) {
      this.productsService.createProduct(productForm.value);
    } else {
      this.productsService.updateProduct(productForm.value);
    }
    this.resetForm(productForm);
  }

  resetForm(productForm: NgForm) {
    if (productForm !=null)
      productForm.reset();
  }

}
