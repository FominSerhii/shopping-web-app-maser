import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { Product } from './products/products.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AdminProductsComponent } from './products/admin-products/admin-products.component';
import { CartComponent } from './cart/cart.component';
import { AdminGaurd } from './auth/admin-guard';

const routes: Routes = [
	{ path: '', redirectTo: '/products', pathMatch: 'full'},
	{ path: 'products', component: Product, data: { depth: 1 } },
  { path: 'favourites', component: FavouritesComponent, data: { depth: 2 }},
  { path: 'cart', component: CartComponent, data: { depth: 3 } },
	{ path: 'adminproducts', component: AdminProductsComponent,
	canActivate: [ AdminGaurd ], data: { depth: 4 } },

	{ path: 'signup', component: SignupComponent, data: { depth: 5 } },
	{ path: 'signin', component: SigninComponent, data: { depth: 6 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
