(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourites/favourites.component */ "./src/app/favourites/favourites.component.ts");
/* harmony import */ var _products_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/admin-products/admin-products.component */ "./src/app/products/admin-products/admin-products.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/admin-guard */ "./src/app/auth/admin-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["Product"], data: { depth: 1 } },
    { path: 'favourites', component: _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_5__["FavouritesComponent"], data: { depth: 2 } },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"], data: { depth: 3 } },
    { path: 'adminproducts', component: _products_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_6__["AdminProductsComponent"],
        canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_8__["AdminGaurd"]], data: { depth: 4 } },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], data: { depth: 5 } },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"], data: { depth: 6 } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<hr>\n\n\n  <div class='container'>\n    <div class='row'>\n      <div class='col-md-12'>\n        <a routerLink='/products'><button mat-button>Products</button></a>\n\n        <a routerLink='/favourites'>\n          <button mat-button> Favourites\n            {{ favouritesService.favouritesCount }}\n          </button>\n        </a>\n\n        <a routerLink='/cart'>\n          <button mat-button>Cart\n            <i class=\"material-icons\">add_shopping_cart</i>\n            {{ cartService.cartCount }}\n          </button>\n        </a>\n\n        <a routerLink='/adminproducts' *ngIf=\"authService.user | async\"><button mat-button>Admin Product</button></a>\n\n        <a *ngIf=\"!authService.isLoggedIn()\" routerLink='/signup'><button mat-button>Sign Up</button></a>\n        <a *ngIf=\"!authService.isLoggedIn()\" routerLink='/signin'><button mat-button>Sign In</button></a>\n        <a routerLink='/products'> <button mat-button (click)=\"logout()\" *ngIf=\"authService.user | async\">Logout</button></a>\n\n        <hr>\n\n         <router-outlet #myOutlet='outlet'></router-outlet>\n\n    \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-button {\n  font-size: 25px;\n  margin-left: 20px; }\n\n.routeContainer {\n  position: relative; }\n\n.rooteContainer > * {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9zaG9wcGluZy13ZWItYXBwLW1hc2VyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWU7RUFDZixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5yb3V0ZUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTs7XG59XG5cbi5yb290ZUNvbnRhaW5lcj4qIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart.service */ "./src/app/cart/cart.service.ts");
/* harmony import */ var _favourites_favourites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favourites/favourites.service */ "./src/app/favourites/favourites.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, cartService, favouritesService) {
        this.authService = authService;
        this.cartService = cartService;
        this.favouritesService = favouritesService;
    }
    AppComponent.prototype.signupUser = function () {
        this.authService.signupUser(this.email, this.password);
        this.email = this.password = '';
    };
    AppComponent.prototype.signinUser = function () {
        this.authService.signinUser(this.email, this.password);
        this.email = this.password = '';
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AppComponent.prototype.getDepth = function (outlet) {
        return outlet.activatedRouteData['depth'];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _favourites_favourites_service__WEBPACK_IMPORTED_MODULE_3__["FavouritesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cart/cart.service */ "./src/app/cart/cart.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _products_products_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./products/products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _favourites_favourites_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./favourites/favourites.service */ "./src/app/favourites/favourites.service.ts");
/* harmony import */ var _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./favourites/favourites.component */ "./src/app/favourites/favourites.component.ts");
/* harmony import */ var _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./products/product-list/product-list.component */ "./src/app/products/product-list/product-list.component.ts");
/* harmony import */ var _products_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./products/admin-products/admin-products.component */ "./src/app/products/admin-products/admin-products.component.ts");
/* harmony import */ var _favourites_no_products_found_no_products_found_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./favourites/no-products-found/no-products-found.component */ "./src/app/favourites/no-products-found/no-products-found.component.ts");
/* harmony import */ var _products_admin_products_admin_products_create_admin_products_create_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./products/admin-products/admin-products-create/admin-products-create.component */ "./src/app/products/admin-products/admin-products-create/admin-products-create.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _sort_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sort.pipe */ "./src/app/sort.pipe.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _cart_no_productscart_no_productscart_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./cart/no-productscart/no-productscart.component */ "./src/app/cart/no-productscart/no-productscart.component.ts");
/* harmony import */ var _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./no-access/no-access.component */ "./src/app/no-access/no-access.component.ts");
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./auth/admin-guard */ "./src/app/auth/admin-guard.ts");
/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./toastr.service */ "./src/app/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _products_products_component__WEBPACK_IMPORTED_MODULE_16__["Product"],
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_22__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_21__["SigninComponent"],
                _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_24__["FavouritesComponent"],
                _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_25__["ProductListComponent"],
                _products_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_26__["AdminProductsComponent"],
                _products_admin_products_admin_products_create_admin_products_create_component__WEBPACK_IMPORTED_MODULE_28__["AdminProductsCreateComponent"],
                _favourites_no_products_found_no_products_found_component__WEBPACK_IMPORTED_MODULE_27__["NoProductsFoundComponent"],
                _cart_no_productscart_no_productscart_component__WEBPACK_IMPORTED_MODULE_32__["NoProductscartComponent"],
                _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_33__["NoAccessComponent"],
                _sort_pipe__WEBPACK_IMPORTED_MODULE_30__["SortPipe"]
            ],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_20__["AngularFireDatabaseModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_31__["environment"].firebase),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__["Ng2SearchPipeModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"].forRoot()
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]
            ],
            entryComponents: [
                _products_admin_products_admin_products_create_admin_products_create_component__WEBPACK_IMPORTED_MODULE_28__["AdminProductsCreateComponent"],
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _products_products_service__WEBPACK_IMPORTED_MODULE_19__["ProductsService"],
                _cart_cart_service__WEBPACK_IMPORTED_MODULE_13__["CartService"],
                _auth_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                _favourites_favourites_service__WEBPACK_IMPORTED_MODULE_23__["FavouritesService"],
                _auth_admin_guard__WEBPACK_IMPORTED_MODULE_34__["AdminGaurd"],
                _toastr_service__WEBPACK_IMPORTED_MODULE_35__["ToastrService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/admin-guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth/admin-guard.ts ***!
  \*************************************/
/*! exports provided: AdminGaurd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGaurd", function() { return AdminGaurd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGaurd = /** @class */ (function () {
    function AdminGaurd(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    // canActivate() {
    //   if (this.authService.isLoggedIn()) {
    //     return true;
    //   }
    //   this.router.navigate(["no-access"]);
    //   return false;
    // }
    AdminGaurd.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(["/signup"]);
        return false;
    };
    AdminGaurd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminGaurd);
    return AdminGaurd;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toastr.service */ "./src/app/toastr.service.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.model */ "./src/app/user.model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth, router, db, userService, toastrService) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.db = db;
        this.userService = userService;
        this.toastrService = toastrService;
        this.userDetails = null;
        this.dbPath = 'client';
        this.user = firebaseAuth.authState;
        this.dbUser = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                userService
                    .isAdmin(_this.userDetails.email)
                    .snapshotChanges()
                    .subscribe(function (data) {
                    data.forEach(function (el) {
                        var y = el.payload.toJSON();
                        _this.dbUser = y;
                    });
                });
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.getLoggedInUser = function () {
        var loggedUser = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
        var user = this.firebaseAuth.auth.currentUser;
        if (user) {
            this.userDetails = user;
            if (user != null) {
                loggedUser.key = user.uid;
                loggedUser.email = user.email;
                loggedUser.isAdmin = this.dbUser['isAdmin'];
            }
        }
        else {
            this.userDetails = null;
        }
        return loggedUser;
    };
    AuthService.prototype.signupUser = function (email, password) {
        var _this = this;
        this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then(function (value) {
            _this.router.navigate(['/']);
            _this.toastrService.success('Account is creation');
        });
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.router.navigate(['/']);
            firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.getIdToken()
                .then(function (token) { return _this.token = token; });
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails !== null) {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        this.firebaseAuth.auth.signOut();
        this.token = null;
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.createUser = function (data) {
        data.isAdmin = false;
        this.users.push(data);
    };
    AuthService.prototype.isAdmin = function () {
        var user = this.getLoggedInUser();
        if (user != null) {
            if (user.isAdmin === true) {
                return true;
            }
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <h2>Sign In</h2>\n      <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSignin(f)\" #f='ngForm'>\n\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            type=\"email\"\n            id=\"email\"\n            class=\"form-control\">\n        </div>\n\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            class=\"form-control\">\n        </div>\n\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\">Sign In</button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.onSignin = function (form) {
        form.value['isAdmin'] = false;
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password);
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/auth/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <h2>Sign up</h2>\n      <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup(f)\" #f='ngForm'>\n\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            type=\"email\"\n            id=\"email\"\n            class=\"form-control\">\n        </div>\n\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            class=\"form-control\">\n        </div>\n\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\">Sign up</button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toastr.service */ "./src/app/toastr.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, db, toastr) {
        this.authService = authService;
        this.db = db;
        this.toastr = toastr;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.users = db.list('client').valueChanges();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.onSignup = function (form) {
        form.value['isAdmin'] = false;
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signupUser(email, password);
        this.db.list('/client').push({ Email: email, Passwod: password, isAdmin: false });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/auth/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.model */ "./src/app/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
        this.selectedUser = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.dbPath = 'client';
        this.getUsers();
    }
    UserService.prototype.getUsers = function () {
        this.users = this.db.list(this.dbPath);
        return this.users;
    };
    UserService.prototype.createUser = function (data) {
        data.isAdmin = false;
        this.users.push(data);
    };
    UserService.prototype.isAdmin = function (email) {
        return this.db.list(this.dbPath, function (ref) {
            return ref.orderByChild('email').equalTo(email);
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"continer\" *ngIf=\"cartProducts.length > 0\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <div class=\"form-group\">\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              [(ngModel)]=\"term\"\n              required\n              placeholder=\"Find\">\n      </div>\n      <div class=\"sort\">\n        <button mat-raised-button type=\"button\" (click)=\"sort()\">Sort by price</button>\n      </div>\n    </div>\n\n      <div *ngFor='let product of cartProducts |  filter:term | sort: {property: column, order: order}' class=\"col-md-4 item-product\">\n\n        <h4>{{ product.name }}</h4>\n        <p>{{ product.price }} UAH</p>\n        <p>{{ product.description }}</p>\n        <img [src]=\"product.imagePath\" alt=\"{{ product.imagePath }}\" class=\"img-responsive\">\n\n        <div class=\"col-md-12\">\n          <button mat-button><i class=\"material-icons\" (click)=\"onDeleteCart(product)\">delete</i></button>\n        </div>\n\n      </div>\n  </div>\n</div>\n\n<div class=\"container\" *ngIf=\"cartProducts.length === 0\">\n  <app-no-productscart [title]=\"messageTitle\" [description]=\"messageDescription\"></app-no-productscart>\n</div>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-height: 250px; }\n\n.sort {\n  margin: 10px 0; }\n\n.item-product {\n  margin: 20px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9zaG9wcGluZy13ZWItYXBwLW1hc2VyL3NyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG59XG5cbi5zb3J0IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5pdGVtLXByb2R1Y3Qge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart/cart.service.ts");
/* harmony import */ var _products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/products.service */ "./src/app/products/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(productsService, cartService) {
        this.productsService = productsService;
        this.cartService = cartService;
        this.descending = false;
        this.column = 'price';
        this.messageTitle = 'No Cart Products Found';
        this.messageDescription = 'Please, choose your cart products';
        this.showDataNotFound = true;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getCartProduct();
    };
    CartComponent.prototype.onDeleteCart = function (product) {
        this.cartService.removeLocalCart(product);
        this.getCartProduct();
    };
    CartComponent.prototype.getCartProduct = function () {
        this.cartProducts = this.cartService.getLocalCartProduct();
    };
    CartComponent.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.service.ts":
/*!**************************************!*\
  !*** ./src/app/cart/cart.service.ts ***!
  \**************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = /** @class */ (function () {
    function CartService(authService, db) {
        this.authService = authService;
        this.db = db;
        this.cart = [];
        this.cartCount = 0;
        this.calculateCartCount();
    }
    CartService.prototype.addToCartProduct = function (product) {
        var _this = this;
        var a;
        a = JSON.parse(localStorage.getItem('cart_item')) || [];
        a.push(product);
        setTimeout(function () {
            localStorage.setItem('cart_item', JSON.stringify(a));
            _this.calculateCartCount();
        }, 500);
    };
    CartService.prototype.removeLocalCart = function (product) {
        var products = JSON.parse(localStorage.getItem('cart_item'));
        for (var i = 0; i < products.length; i++) {
            if (products[i].key === product.key) {
                products.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('cart_item', JSON.stringify(products));
        this.calculateCartCount();
    };
    CartService.prototype.getLocalCartProduct = function () {
        var products = JSON.parse(localStorage.getItem('cart_item')) || [];
        return products;
    };
    CartService.prototype.calculateCartCount = function () {
        this.cartCount = this.getLocalCartProduct().length;
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/no-productscart/no-productscart.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/cart/no-productscart/no-productscart.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <div class=\"error-template\">\n      <h1><i class=\"material-icons\">sentiment_very_dissatisfied</i></h1>\n      <h2>\n        {{title}}</h2>\n      <div class=\"error-details\">\n        {{description}}\n      </div>\n      <br>\n      <div class=\"error-actions\">\n        <a [routerLink]=\"[ '/products' ]\" class=\"btn btn-primary btn-lg\">Take Me Home </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cart/no-productscart/no-productscart.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/cart/no-productscart/no-productscart.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvbm8tcHJvZHVjdHNjYXJ0L25vLXByb2R1Y3RzY2FydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cart/no-productscart/no-productscart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/cart/no-productscart/no-productscart.component.ts ***!
  \*******************************************************************/
/*! exports provided: NoProductscartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProductscartComponent", function() { return NoProductscartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoProductscartComponent = /** @class */ (function () {
    function NoProductscartComponent() {
    }
    NoProductscartComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("title"),
        __metadata("design:type", String)
    ], NoProductscartComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("description"),
        __metadata("design:type", String)
    ], NoProductscartComponent.prototype, "description", void 0);
    NoProductscartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-productscart',
            template: __webpack_require__(/*! ./no-productscart.component.html */ "./src/app/cart/no-productscart/no-productscart.component.html"),
            styles: [__webpack_require__(/*! ./no-productscart.component.scss */ "./src/app/cart/no-productscart/no-productscart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoProductscartComponent);
    return NoProductscartComponent;
}());



/***/ }),

/***/ "./src/app/favourites/favourites.component.html":
/*!******************************************************!*\
  !*** ./src/app/favourites/favourites.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"continer\" *ngIf=\"favouriteProducts.length > 0\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <div class=\"form-group\">\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              [(ngModel)]=\"term\"\n              required\n              placeholder=\"Find\">\n      </div>\n      <div class=\"sort\">\n        <button mat-raised-button type=\"button\" (click)=\"sort()\">Sort by price</button>\n      </div>\n      \n    </div>\n\n      <div *ngFor='let product of favouriteProducts |  filter:term | sort: {property: column, order: order}' class=\"col-md-4 item-product\">\n\n        <h4>{{ product.name }}</h4>\n        \n        <p>{{ product.price }} UAH</p>\n        <p>{{ product.description }}</p>\n        <img [src]=\"product.imagePath\" alt=\"{{ product.imagePath }}\" class=\"img-responsive\">\n\n        <div class=\"col-md-12\">\n          <button mat-button><i class=\"material-icons\" (click)=\"onDeleteFavourite(product)\">delete</i></button>\n        </div>\n\n      </div>\n  </div>\n</div>\n\n<div class=\"container\" *ngIf=\"favouriteProducts.length === 0\">\n  <app-no-products-found [title]=\"messageTitle\" [description]=\"messageDescription\"></app-no-products-found>\n</div>\n"

/***/ }),

/***/ "./src/app/favourites/favourites.component.scss":
/*!******************************************************!*\
  !*** ./src/app/favourites/favourites.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-height: 250px; }\n\n.sort {\n  margin: 10px 0; }\n\n.item-product {\n  margin: 20px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9zaG9wcGluZy13ZWItYXBwLW1hc2VyL3NyYy9hcHAvZmF2b3VyaXRlcy9mYXZvdXJpdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZmF2b3VyaXRlcy9mYXZvdXJpdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG59XG5cbi5zb3J0IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5pdGVtLXByb2R1Y3Qge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/favourites/favourites.component.ts":
/*!****************************************************!*\
  !*** ./src/app/favourites/favourites.component.ts ***!
  \****************************************************/
/*! exports provided: FavouritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function() { return FavouritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _favourites_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.service */ "./src/app/favourites/favourites.service.ts");
/* harmony import */ var _products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/products.service */ "./src/app/products/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouritesComponent = /** @class */ (function () {
    function FavouritesComponent(productsService, favouritesService) {
        this.productsService = productsService;
        this.favouritesService = favouritesService;
        this.messageTitle = 'No Favourite Products Found';
        this.messageDescription = 'Please, choose your favourite products';
        this.descending = false;
        this.column = 'price';
        this.showDataNotFound = true;
    }
    FavouritesComponent.prototype.ngOnInit = function () {
        this.getFavouriteProduct();
    };
    FavouritesComponent.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    FavouritesComponent.prototype.onDeleteFavourite = function (product) {
        this.favouritesService.removeLocalFavourite(product);
        this.getFavouriteProduct();
    };
    FavouritesComponent.prototype.getFavouriteProduct = function () {
        this.favouriteProducts = this.favouritesService.getLocalFavouriteProduct();
    };
    FavouritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favourites',
            template: __webpack_require__(/*! ./favourites.component.html */ "./src/app/favourites/favourites.component.html"),
            styles: [__webpack_require__(/*! ./favourites.component.scss */ "./src/app/favourites/favourites.component.scss")]
        }),
        __metadata("design:paramtypes", [_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            _favourites_service__WEBPACK_IMPORTED_MODULE_1__["FavouritesService"]])
    ], FavouritesComponent);
    return FavouritesComponent;
}());



/***/ }),

/***/ "./src/app/favourites/favourites.service.ts":
/*!**************************************************!*\
  !*** ./src/app/favourites/favourites.service.ts ***!
  \**************************************************/
/*! exports provided: FavouritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesService", function() { return FavouritesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouritesService = /** @class */ (function () {
    function FavouritesService(authService, db) {
        this.authService = authService;
        this.db = db;
        this.favourite = [];
        this.favouritesCount = 0;
        this.count = 1;
        this.calculatefavouritesCount();
    }
    FavouritesService.prototype.addToFavouriteProduct = function (product) {
        var _this = this;
        var a;
        a = JSON.parse(localStorage.getItem('fav_item')) || [];
        a.push(product);
        setTimeout(function () {
            localStorage.setItem('fav_item', JSON.stringify(a));
            _this.calculatefavouritesCount();
        }, 500);
    };
    FavouritesService.prototype.getLocalFavouriteProduct = function () {
        var products = JSON.parse(localStorage.getItem('fav_item')) || [];
        return products;
    };
    FavouritesService.prototype.removeFavourite = function (key) {
        this.favouriteProducts.remove(key);
    };
    FavouritesService.prototype.removeLocalFavourite = function (product) {
        var products = JSON.parse(localStorage.getItem('fav_item'));
        for (var i = 0; i < products.length; i++) {
            if (products[i].key === product.key) {
                products.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('fav_item', JSON.stringify(products));
        this.calculatefavouritesCount();
    };
    FavouritesService.prototype.calculatefavouritesCount = function () {
        this.favouritesCount = this.getLocalFavouriteProduct().length;
    };
    FavouritesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], FavouritesService);
    return FavouritesService;
}());



/***/ }),

/***/ "./src/app/favourites/no-products-found/no-products-found.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/favourites/no-products-found/no-products-found.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <div class=\"error-template\">\n      <h1><i class=\"material-icons\">sentiment_very_dissatisfied</i></h1>\n      <h2>\n        {{title}}</h2>\n      <div class=\"error-details\">\n        {{description}}\n      </div>\n      <br>\n      <div class=\"error-actions\">\n        <a [routerLink]=\"[ '/products' ]\" class=\"btn btn-primary btn-lg\">Take Me Home </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/favourites/no-products-found/no-products-found.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/favourites/no-products-found/no-products-found.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm91cml0ZXMvbm8tcHJvZHVjdHMtZm91bmQvbm8tcHJvZHVjdHMtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/favourites/no-products-found/no-products-found.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/favourites/no-products-found/no-products-found.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NoProductsFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProductsFoundComponent", function() { return NoProductsFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoProductsFoundComponent = /** @class */ (function () {
    function NoProductsFoundComponent() {
    }
    NoProductsFoundComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("title"),
        __metadata("design:type", String)
    ], NoProductsFoundComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("description"),
        __metadata("design:type", String)
    ], NoProductsFoundComponent.prototype, "description", void 0);
    NoProductsFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-products-found',
            template: __webpack_require__(/*! ./no-products-found.component.html */ "./src/app/favourites/no-products-found/no-products-found.component.html"),
            styles: [__webpack_require__(/*! ./no-products-found.component.scss */ "./src/app/favourites/no-products-found/no-products-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoProductsFoundComponent);
    return NoProductsFoundComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class='navbar navbar-expand-lg navbar-light bg-light'>\n  <div class=\"container-fluid\">\n\n    <ul class='nav navbar-brand'>\n      <a routerLink=\"/\">Shopping WEB App</a>\n    </ul>\n\n    <ul class='nav navbar-brand navbar-right'>\n      <a *ngIf=\"authService.user | async\">{{ (authService.user | async)?.email }}</a>\n    </ul>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n  font-size: 36px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9zaG9wcGluZy13ZWItYXBwLW1hc2VyL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFlLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCB7XG5cdGZvbnQtc2l6ZTogMzZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.signupUser = function () {
        this.authService.signupUser(this.email, this.password);
        this.email = this.password = '';
    };
    HeaderComponent.prototype.signinUser = function () {
        this.authService.signinUser(this.email, this.password);
        this.email = this.password = '';
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/no-access/no-access.component.html":
/*!****************************************************!*\
  !*** ./src/app/no-access/no-access.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  no-access works!\n</p>\n"

/***/ }),

/***/ "./src/app/no-access/no-access.component.scss":
/*!****************************************************!*\
  !*** ./src/app/no-access/no-access.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vLWFjY2Vzcy9uby1hY2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/no-access/no-access.component.ts":
/*!**************************************************!*\
  !*** ./src/app/no-access/no-access.component.ts ***!
  \**************************************************/
/*! exports provided: NoAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessComponent", function() { return NoAccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoAccessComponent = /** @class */ (function () {
    function NoAccessComponent() {
    }
    NoAccessComponent.prototype.ngOnInit = function () {
    };
    NoAccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-access',
            template: __webpack_require__(/*! ./no-access.component.html */ "./src/app/no-access/no-access.component.html"),
            styles: [__webpack_require__(/*! ./no-access.component.scss */ "./src/app/no-access/no-access.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoAccessComponent);
    return NoAccessComponent;
}());



/***/ }),

/***/ "./src/app/products/admin-products/admin-products-create/admin-products-create.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/products/admin-products/admin-products-create/admin-products-create.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <mat-dialog-content>\n\n  <form #productForm=\"ngForm\">\n\n    <input type=\"hidden\" name=\"key\" [(ngModel)]=\"productsService.selectedProduct.key\">\n\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input\n          class=\"form-control\"\n          name=\"name\"\n          [(ngModel)]=\"productsService.selectedProduct.name\"\n          required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"imagePath\">Image URL</label>\n        <input\n          class=\"form-control\"\n          #imagePath\n          required\n          [(ngModel)]=\"productsService.selectedProduct.imagePath\"\n          name=\"imagePath\">\n      </div>\n\n      <img [src]=\"imagePath.value\" class=\"image-responsive\">\n\n      <div class=\"form-group\">\n        <label for=\"price\">Price</label>\n        <input\n          class=\"form-control\"\n          type=\"number\"\n          name=\"price\"\n          [(ngModel)]=\"productsService.selectedProduct.price\"\n          required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <textarea\n          class=\"form-control\"\n          required\n          [(ngModel)]=\"productsService.selectedProduct.description\"\n          name=\"description\"></textarea>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"onSubmit(productForm)\">Submit</button>\n      <button type=\"submit\" class=\"btn btn-danger\" [mat-dialog-close]>Close</button>\n\n    </form>\n  </mat-dialog-content>\n\n</div>\n"

/***/ }),

/***/ "./src/app/products/admin-products/admin-products-create/admin-products-create.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/products/admin-products/admin-products-create/admin-products-create.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-product {\n  max-width: 400px;\n  max-height: 400px; }\n\nimg {\n  max-width: 100px;\n  max-height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9zaG9wcGluZy13ZWItYXBwLW1hc2VyL3NyYy9hcHAvcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMtY3JlYXRlL2FkbWluLXByb2R1Y3RzLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDcEI7O0FBQ0E7RUFDRyxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMtY3JlYXRlL2FkbWluLXByb2R1Y3RzLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcHJvZHVjdCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cbiBpbWd7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/admin-products/admin-products-create/admin-products-create.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/products/admin-products/admin-products-create/admin-products-create.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AdminProductsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsCreateComponent", function() { return AdminProductsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../toastr.service */ "./src/app/toastr.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminProductsCreateComponent = /** @class */ (function () {
    // product: Product = new Product();
    // submitted = false;
    // editMode: false;
    // key: string;
    // editedItem: Product;
    function AdminProductsCreateComponent(productsService, router, route, formBuilder, db, dialogRef, toastr) {
        this.productsService = productsService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.db = db;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
    }
    AdminProductsCreateComponent.prototype.ngOnInit = function () { };
    AdminProductsCreateComponent.prototype.onSubmit = function (productForm) {
        if (productForm.value.key == null)
            this.productsService.createProduct(productForm.value);
        else
            this.productsService.updateProduct(productForm.value);
        this.resetForm(productForm);
        this.dialogRef.close();
    };
    AdminProductsCreateComponent.prototype.resetForm = function (productForm) {
        if (productForm != null)
            productForm.reset();
        this.productsService.selectedProduct = {
            key: null,
            name: '',
            price: 0,
            description: '',
            imagePath: ''
        };
    };
    AdminProductsCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-products-create',
            template: __webpack_require__(/*! ./admin-products-create.component.html */ "./src/app/products/admin-products/admin-products-create/admin-products-create.component.html"),
            styles: [__webpack_require__(/*! ./admin-products-create.component.scss */ "./src/app/products/admin-products/admin-products-create/admin-products-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AdminProductsCreateComponent);
    return AdminProductsCreateComponent;
}());



/***/ }),

/***/ "./src/app/products/admin-products/admin-products.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/products/admin-products/admin-products.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button mat-raised-button (click)=\"openDialog()\">Create a  new product</button>\n</div>\n\n<div *ngFor=\"let product of products\">\n\n  <mat-table [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef>\n        {{ product.name }}\n      </mat-header-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n      <mat-header-cell *matHeaderCellDef>\n        {{ product.price }} UAH\n      </mat-header-cell>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"description\">\n      <mat-header-cell *matHeaderCellDef>\n        {{ product.description }}\n      </mat-header-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"imagePath\">\n      <mat-header-cell *matHeaderCellDef>\n        {{ product.imagePath }}\n      </mat-header-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"create\">\n      <mat-header-cell *matHeaderCellDef>\n        <button mat-raised-button (click)=\"onEdit(product)\"><i class=\"material-icons\">create</i></button>\n      </mat-header-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"delete\">\n      <mat-header-cell *matHeaderCellDef>\n        <button mat-button (click)=\"deleteProduct(product)\"><i class=\"material-icons\">delete_outline</i></button>\n      </mat-header-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" color=\"primary\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns \"></mat-row>\n\n  </mat-table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/products/admin-products/admin-products.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/products/admin-products/admin-products.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  text-align: center; }\n\n.mat-raised-button {\n  font-size: 25px;\n  margin-left: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9zaG9wcGluZy13ZWItYXBwLW1hc2VyL3NyYy9hcHAvcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGtCQUFpQixFQUVsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2FkbWluLXByb2R1Y3RzL2FkbWluLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/products/admin-products/admin-products.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/admin-products/admin-products.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toastr.service */ "./src/app/toastr.service.ts");
/* harmony import */ var _products_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../products/products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _admin_products_create_admin_products_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-products-create/admin-products-create.component */ "./src/app/products/admin-products/admin-products-create/admin-products-create.component.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(matdialog, productsService, toastr) {
        this.matdialog = matdialog;
        this.productsService = productsService;
        this.toastr = toastr;
        this.displayedColumns = ['name', 'price', 'description', 'imagePath', 'create', 'delete'];
        this.dialogResult = '';
    }
    AdminProductsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.matdialog.open(_admin_products_create_admin_products_create_component__WEBPACK_IMPORTED_MODULE_5__["AdminProductsCreateComponent"], { width: '500px' });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result + " ");
            _this.dialogResult = result;
        });
    };
    AdminProductsComponent.prototype.ngOnInit = function () {
        this.getProductList();
    };
    AdminProductsComponent.prototype.getProductList = function () {
        var _this = this;
        this.productsService.getProductList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (products) {
            _this.products = products;
        });
    };
    AdminProductsComponent.prototype.onEdit = function (product) {
        this.openDialog();
        this.productsService.selectedProduct = Object.assign({}, product);
        console.log(product);
    };
    AdminProductsComponent.prototype.deleteProduct = function (product) {
        this.productsService.deleteProduct(product);
        this.toastr.info("Product", "Product delete");
    };
    AdminProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! ./admin-products.component.html */ "./src/app/products/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.scss */ "./src/app/products/admin-products/admin-products.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"],
            _products_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
            _toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/products/product-list/product-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"continer\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            [(ngModel)]=\"term\"\n            required\n            placeholder=\"Find\">\n      </div>\n      \n      <div class=\"sort\">\n        <button mat-raised-button type=\"button\" (click)=\"sort()\">Sort by price</button>\n      </div>\n    \n\n      <hr>\n\n    </div>\n    <div *ngFor=\"let product of products | filter:term |  sort: {property: column, order: order}\" class=\"col-md-4 item-product\">\n\n      <h4>{{ product.name }} </h4>\n      <p>{{ product.price }} UAH</p>\n      <p>{{ product.description }}</p>\n      <img [src]=\"product.imagePath\" alt=\"{{ product.imagePath }}\" class=\"img-responsive\">\n\n      <div class=\"col-md-12\">\n        \n        <button mat-button (click)=\"addToFavourites(product)\"><i class=\"material-icons\">favorite</i></button>\n\n        <button mat-button (click)=\"addToCart(product)\"><i class=\"material-icons\" >add_shopping_cart</i></button>\n      </div>\n\n      <hr>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-height: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmhpaS9zaG9wcGluZy13ZWItYXBwLW1hc2VyL3NyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toastr.service */ "./src/app/toastr.service.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cart/cart.service */ "./src/app/cart/cart.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _favourites_favourites_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../favourites/favourites.service */ "./src/app/favourites/favourites.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productsService, favouritesService, cartService, toastrService) {
        this.productsService = productsService;
        this.favouritesService = favouritesService;
        this.cartService = cartService;
        this.toastrService = toastrService;
        this.descending = false;
        this.column = 'price';
        this.product = new _products_component__WEBPACK_IMPORTED_MODULE_3__["Product"]();
        this.counter = 0;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProductList();
    };
    ProductListComponent.prototype.getProductList = function () {
        var _this = this;
        this.productsService.getProductList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (products) {
            _this.products = products;
        });
    };
    ProductListComponent.prototype.addToFavourites = function (product) {
        this.favouritesService.addToFavouriteProduct(product);
        this.toastrService.info("Product add to favourite");
    };
    ProductListComponent.prototype.addToCart = function (product) {
        this.cartService.addToCartProduct(product);
        this.toastrService.info("Product add to cart");
    };
    ProductListComponent.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/products/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/products/product-list/product-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _favourites_favourites_service__WEBPACK_IMPORTED_MODULE_6__["FavouritesService"],
            _cart_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _toastr_service__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<div class='col-md-12'>\n\t\t<app-product-list></app-product-list>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Product = /** @class */ (function () {
    function Product() {
    }
    Product = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        })
    ], Product);
    return Product;
}());



/***/ }),

/***/ "./src/app/products/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/products/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _favourites_favourites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../favourites/favourites.service */ "./src/app/favourites/favourites.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsService = /** @class */ (function () {
    function ProductsService(db, authService, favouritesService) {
        this.db = db;
        this.authService = authService;
        this.favouritesService = favouritesService;
        this.dbPath = '/products';
        this.selectedProduct = new _products_component__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        this.productsRef = db.list(this.dbPath);
    }
    ProductsService.prototype.createProduct = function (product) {
        this.productsRef.push({
            name: product.name,
            price: product.price,
            description: product.description,
            imagePath: product.imagePath
        });
    };
    ProductsService.prototype.getProductById = function (key) {
        this.product = this.db.object('products/' + key);
        return this.product;
    };
    ProductsService.prototype.updateProduct = function (product) {
        this.productsRef.update(product.key, {
            name: product.name,
            price: product.price,
            description: product.description,
            imagePath: product.imagePath
        });
    };
    ProductsService.prototype.deleteProduct = function (product) {
        return this.productsRef.remove(product.key);
    };
    ProductsService.prototype.getProductList = function () {
        return this.productsRef;
    };
    ProductsService.prototype.handleError = function (error) {
        console.log(error);
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _favourites_favourites_service__WEBPACK_IMPORTED_MODULE_3__["FavouritesService"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/sort.pipe.ts":
/*!******************************!*\
  !*** ./src/app/sort.pipe.ts ***!
  \******************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "./src/app/toastr.service.ts":
/*!***********************************!*\
  !*** ./src/app/toastr.service.ts ***!
  \***********************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastrService = /** @class */ (function () {
    function ToastrService() {
    }
    ToastrService.prototype.success = function (title, msg) {
        toastr.success(msg, title, { timeOut: 2000 });
    };
    ToastrService.prototype.info = function (title, msg) {
        toastr.info(msg, title, { timeOut: 2000 });
    };
    ToastrService.prototype.warning = function (title, msg) {
        toastr.warning(msg, title);
    };
    ToastrService.prototype.error = function (title, msg) {
        toastr.error(msg, title);
    };
    ToastrService.prototype.wait = function (title, msg) {
        toastr.info(msg, title, { timeOut: 2000 });
    };
    ToastrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ToastrService);
    return ToastrService;
}());



/***/ }),

/***/ "./src/app/user.model.ts":
/*!*******************************!*\
  !*** ./src/app/user.model.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB8KNH6FWANayHfhjf80nGVFfOd0simInE",
        authDomain: "sopping-web-app.firebaseapp.com",
        databaseURL: "https://sopping-web-app.firebaseio.com",
        projectId: "sopping-web-app",
        storageBucket: "sopping-web-app.appspot.com",
        messagingSenderId: "814755271762"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/serhii/shopping-web-app-maser/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map