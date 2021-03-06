import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatRadioModule
} from '@angular/material';

import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { UserService } from './auth/user.service';
import { AuthService } from './auth/auth.service';
import { CartService } from './cart/cart.service';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { Product } from './products/products.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent } from './header/header.component';
import { ProductsService } from './products/products.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FavouritesService } from './favourites/favourites.service';
import { FavouritesComponent } from './favourites/favourites.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AdminProductsComponent } from './products/admin-products/admin-products.component';
import { NoProductsFoundComponent } from './favourites/no-products-found/no-products-found.component';
import { AdminProductsCreateComponent } from './products/admin-products/admin-products-create/admin-products-create.component';

import { ToastrModule } from 'ngx-toastr';

import { SortPipe } from './sort.pipe';
import { environment } from '../environments/environment';
import { NoProductscartComponent } from './cart/no-productscart/no-productscart.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminGaurd } from './auth/admin-guard';
import { ToastrService } from './toastr.service';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';


@NgModule({
  declarations: [
    Product,
    AppComponent,
    CartComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    FavouritesComponent,
    ProductListComponent,
    AdminProductsComponent,
    AdminProductsCreateComponent,
    NoProductsFoundComponent,
    NoProductscartComponent,
    NoAccessComponent,
    SortPipe,
    ProductDetailComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    MatIconModule,
    BrowserModule,
    MatListModule,
    MatMenuModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    Ng2SearchPipeModule,
    OrderModule,
    ToastrModule.forRoot()
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  entryComponents: [
    AdminProductsCreateComponent,
    ProductDetailComponent
  ],
  providers: [
    AuthService,
    ProductsService,
    CartService,
    UserService,
    FavouritesService,
    AdminGaurd  ,
    ToastrService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class AppModule {}
