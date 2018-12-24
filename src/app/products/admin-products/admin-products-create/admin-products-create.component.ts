import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../products.component';
import { ProductsService } from '../../products.service';
import { AngularFireDatabase} from 'angularfire2/database';



@Component({
  selector: 'app-admin-products-create',
  templateUrl: './admin-products-create.component.html',
  styleUrls: ['./admin-products-create.component.scss']
})

export class AdminProductsCreateComponent implements OnInit {

  // product: Product = new Product();
  // submitted = false;
  // editMode: false;
  // key: string;
  // editedItem: Product;

  constructor(public productsService: ProductsService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              public db: AngularFireDatabase,
              public dialogRef: MatDialogRef<AdminProductsCreateComponent>,
              public toasterService: ToastrService) { }

  ngOnInit() {}

  onSubmit(productForm: NgForm) {
    if (productForm.value.key == null) 
      this.productsService.createProduct(productForm.value);
       else 
      this.productsService.updateProduct(productForm.value);
    this.resetForm(productForm);
     this.dialogRef.close();
    // this.toasterService.success("Product add")
     }

  resetForm(productForm?: NgForm) {
    if (productForm !=null)
      productForm.reset();
      this.productsService.selectedProduct = {
        key: null,
        name: '',
        price: 0,
        description: '',
        imagePath:''
      }
  }

}
