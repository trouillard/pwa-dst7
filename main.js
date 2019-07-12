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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"headerFooter\"></app-header>\r\n  <router-outlet></router-outlet>\r\n<app-footer *ngIf=\"headerFooter\"></app-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, translate) {
        this.router = router;
        this.translate = translate;
        this.title = 'wbtpoc';
        translate.setDefaultLang('fr_FR');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                //this.headerFooter = (event.url !== '/login')
                _this.headerFooter = true;
            }
        });
        this.router.navigate([""]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AppComponent.prototype, "headerFooter", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_core_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _dst_dst_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dst/dst.component */ "./src/app/dst/dst.component.ts");
/* harmony import */ var _zone_zone_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./zone/zone.component */ "./src/app/zone/zone.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _dst_dst_component__WEBPACK_IMPORTED_MODULE_14__["DstComponent"],
                _dst_dst_component__WEBPACK_IMPORTED_MODULE_14__["PopUpDetailDST"],
                _zone_zone_component__WEBPACK_IMPORTED_MODULE_15__["PopUpDetailZone"],
                _zone_zone_component__WEBPACK_IMPORTED_MODULE_15__["ZoneComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _core_core_routing_module__WEBPACK_IMPORTED_MODULE_10__["CoreRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                })
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dst_dst_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dst/dst.component */ "./src/app/dst/dst.component.ts");
/* harmony import */ var _zone_zone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zone/zone.component */ "./src/app/zone/zone.component.ts");






var routes = [
    //  { path: 'dst', component: DstComponent},
    { path: 'zone', component: _zone_zone_component__WEBPACK_IMPORTED_MODULE_5__["ZoneComponent"] },
    { path: '', component: _dst_dst_component__WEBPACK_IMPORTED_MODULE_4__["DstComponent"] },
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/pwa-dst7'
                }
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _dst_dst_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dst/dst.component */ "./src/app/dst/dst.component.ts");
/* harmony import */ var _zone_zone_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../zone/zone.component */ "./src/app/zone/zone.component.ts");









var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_4__["CoreRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
            ],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
            ],
            declarations: [
            //PopUpDetailDST
            ],
            entryComponents: [
                _dst_dst_component__WEBPACK_IMPORTED_MODULE_7__["PopUpDetailDST"],
                _zone_zone_component__WEBPACK_IMPORTED_MODULE_8__["PopUpDetailZone"]
            ],
            providers: [
            //{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/dst/dst.component.css":
/*!***************************************!*\
  !*** ./src/app/dst/dst.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subtitle-design{\r\n    background-color: #b2b5dc;\r\n    height: 25px;\r\n    /* text-align: center; */\r\n    font-size: initial;\r\n    border-radius: 5px;\r\n    padding-left: 5px;\r\n    color: darkblue;\r\n}\r\n\r\n.mat-form-field {   \r\n    width: 30%;\r\n}\r\n\r\n.buttons {\r\n    margin: 20px 0px;\r\n  }\r\n\r\n.titre {\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHN0L2RzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjs7QUFFRjtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2RzdC9kc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJ0aXRsZS1kZXNpZ257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiNWRjO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7ICAgXHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gIH1cclxuXHJcbi50aXRyZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dst/dst.component.detail.css":
/*!**********************************************!*\
  !*** ./src/app/dst/dst.component.detail.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titre {\r\n    \r\n}\r\n\r\n.cellule_25 {\r\n    text-align: center;\r\n    width: 25%;\r\n}\r\n\r\n.cellule_50 {\r\n    text-align: left;\r\n    width: 50%;\r\n}\r\n\r\n.tableau {\r\n    text-align: center;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.page {\r\n    text-align: center;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.bouton {\r\n    text-align: center;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHN0L2RzdC5jb21wb25lbnQuZGV0YWlsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZHN0L2RzdC5jb21wb25lbnQuZGV0YWlsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRyZSB7XHJcbiAgICBcclxufVxyXG5cclxuLmNlbGx1bGVfMjUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmNlbGx1bGVfNTAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi50YWJsZWF1IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3V0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dst/dst.component.detail.html":
/*!***********************************************!*\
  !*** ./src/app/dst/dst.component.detail.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n\r\n  <h1 mat-dialog-title class=\"titre\">Détail Calcul</h1>\r\n\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" class=\"tableau\">\r\n    \r\n    <ng-container matColumnDef=\"nomZone\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"cellule_50\">Zone</th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"cellule_50\"> {{element.nomZone}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"gmt\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"cellule_25\">GMT</th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"cellule_25\"> {{element.gmt}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"horaire\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"cellule_25\">Horaire</th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"cellule_25\"> {{element.horaire}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  </table>\r\n\r\n  <br>\r\n\r\n  <div class=\"bouton\" mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=true cdkFocusInitial><mat-icon>done</mat-icon></button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dst/dst.component.html":
/*!****************************************!*\
  !*** ./src/app/dst/dst.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\n    <br>\n    <mat-accordion>\n        <mat-expansion-panel [expanded]=\"false\">\n          <mat-expansion-panel-header>\n            <mat-panel-title class=\"titre\">\n              {{dateReferenceDSTFormattee}}&nbsp;({{dateReferenceDST.nomZone}})\n            </mat-panel-title>\n            <mat-panel-description>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n            <app-zone\n            [visible]=true\n            [defaut]=true\n            [readOnly]=false\n            label_titre=\"REFERENCE\"\n            label_heure=\"Heure\"\n            label_endroit=\"Zone\"\n            [dateDST]=\"dateReferenceDST\"\n            (retourInitial)=\"initialReference($event)\"     \n            (modification)=\"modificationReference($event)\">\n         </app-zone>\n        </mat-expansion-panel>\n        <mat-expansion-panel [expanded]=\"true\">\n          <mat-expansion-panel-header>\n            <mat-panel-title class=\"titre\">\n              {{dateRechercheDSTFormattee}}&nbsp;({{dateRechercheDST.nomZone}}) \n            </mat-panel-title>\n            <mat-panel-description>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n            <app-zone\n            [visible]=true\n            [defaut]=false\n            [readOnly]=true\n            label_titre=\"RECHERCHE\"\n            label_heure=\"Heure\"\n            label_endroit=\"Zone\"\n            [dateDST]=\"dateRechercheDST\"\n            (retourInitial)=\"initialRecherche($event)\" \n            (modification)=\"modificationRecherche($event)\">\n          </app-zone>\n        </mat-expansion-panel>\n      </mat-accordion>\n      <br>\n      <div>\n        <button mat-raised-button color=\"primary\" (click)=\"calculHeureRecherche()\">\n            <mat-icon>schedule</mat-icon>\n        </button>\n         &nbsp;\n        <button mat-raised-button color=\"secondary\" (click)=\"inversion()\">\n            <mat-icon>cached</mat-icon>\n        </button>              \n         &nbsp;\n         <button mat-raised-button color=\"secondary\" (click)=\"detail()\">\n            <mat-icon>zoom_in</mat-icon>\n        </button>\n      </div>\n      <br>\n<!--\n  <div>\n    <app-zone\n     [visible]=true\n     [defaut]=true\n     [readOnly]=false\n     label_titre=\"REFERENCE\"\n     label_heure=\"Heure\"\n     label_endroit=\"Zone\"\n     [dateDST]=\"dateReferenceDST\"\n     (retourInitial)=\"initialReference($event)\"     \n     (modification)=\"modificationReference($event)\">\n    </app-zone>\n  </div>\n\n  <br>\n\n  <div>\n    <button mat-raised-button color=\"primary\" (click)=\"calculHeureRecherche()\">\n      Calcul\n    </button>\n    &nbsp;\n    <button mat-raised-button color=\"secondary\" (click)=\"inversion()\">\n      Inversion\n    </button>\n  </div>\n\n  <div>\n    <app-zone\n     [visible]=true\n     [defaut]=false\n     [readOnly]=true\n     label_titre=\"RECHERCHE\"\n     label_heure=\"Heure\"\n     label_endroit=\"Zone\"\n     [dateDST]=\"dateRechercheDST\"\n     (retourInitial)=\"initialRecherche($event)\" \n     (modification)=\"modificationRecherche($event)\">\n    </app-zone>\n  </div>\n-->\n</div>"

/***/ }),

/***/ "./src/app/dst/dst.component.ts":
/*!**************************************!*\
  !*** ./src/app/dst/dst.component.ts ***!
  \**************************************/
/*! exports provided: DstComponent, PopUpDetailDST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DstComponent", function() { return DstComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpDetailDST", function() { return PopUpDetailDST; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _zonedstdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zonedstdata */ "./src/app/zonedstdata.ts");





var DstComponent = /** @class */ (function () {
    //gmtReferenceFormatte: string;
    //gmtRechercheFormatte: string;
    function DstComponent(dialog) {
        this.dialog = dialog;
    }
    DstComponent.prototype.detail = function () {
        var dates = [];
        dates.push(this.dateReferenceDST);
        dates.push(this.dateRechercheDST);
        var dialogRef = this.dialog.open(PopUpDetailDST, {
            width: '100%',
            data: {
                dateReferenceDST: this.dateReferenceDST,
                dateRechercheDST: this.dateRechercheDST,
                dateReferenceDSTFormattee: this.dateReferenceDSTFormattee,
                dateRechercheDSTFormattee: this.dateRechercheDSTFormattee,
                dateReferenceSansDSTFormattee: this.dateReferenceSansDSTFormattee,
                dateRechercheSansDSTFormattee: this.dateRechercheSansDSTFormattee,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    DstComponent.prototype.ngOnInit = function () {
        var dateNowArrondi = new Date();
        dateNowArrondi.setMinutes(0);
        dateNowArrondi.setSeconds(0);
        this.dateReferenceDST = new _zonedstdata__WEBPACK_IMPORTED_MODULE_3__["DateDST"](null, dateNowArrondi, null, null, null, null, null, null);
        this.dateRechercheDST = new _zonedstdata__WEBPACK_IMPORTED_MODULE_3__["DateDST"](null, null, null, null, null, null, null, null);
    };
    DstComponent.prototype.ngOnChange = function () {
    };
    DstComponent.prototype.initialReference = function (aDateDST) {
        this.dateReferenceDST = aDateDST;
        this.formattage();
    };
    DstComponent.prototype.initialRecherche = function (aDateDST) {
        this.dateRechercheDST = aDateDST;
        this.formattage();
    };
    DstComponent.prototype.modificationReference = function (aDateDST) {
        this.dateReferenceDST = aDateDST;
        this.formattage();
    };
    DstComponent.prototype.modificationRecherche = function (aDateDST) {
        this.dateRechercheDST = aDateDST;
        this.formattage();
    };
    DstComponent.prototype.calculHeureRecherche = function () {
        if ((this.dateReferenceDST.nomZone != undefined) &&
            (this.dateRechercheDST.nomZone != undefined) &&
            (this.dateReferenceDST.dateUTC != undefined)) {
            var dateTravailDST = new _zonedstdata__WEBPACK_IMPORTED_MODULE_3__["DateDST"](this.dateRechercheDST.nomZone, null, null, this.dateReferenceDST.dateUTC, null, null, null, null);
            this.dateRechercheDST = dateTravailDST;
        }
        ;
    };
    DstComponent.prototype.inversion = function () {
        var dateTravailDST = this.dateReferenceDST;
        this.dateReferenceDST = this.dateRechercheDST;
        this.dateRechercheDST = dateTravailDST;
    };
    DstComponent.prototype.formattageDate = function (date) {
        if (date != undefined) {
            //yyyy-
            var dateFormattee = date.getFullYear() + "/";
            //yyyy-MM
            if ((date.getMonth() + 1) < 10) {
                dateFormattee = dateFormattee + "0" + (date.getMonth() + 1) + "/";
            }
            else {
                dateFormattee = dateFormattee + (date.getMonth() + 1) + "/";
            }
            ;
            //yyyy-MM-dd
            if (date.getDate() < 10) {
                dateFormattee = dateFormattee + "0" + date.getDate() + " ";
            }
            else {
                dateFormattee = dateFormattee + date.getDate() + " ";
            }
            ;
            //yyyy-MM-ddThh
            if (date.getHours() < 10) {
                dateFormattee = dateFormattee + "0" + date.getHours() + ":";
            }
            else {
                dateFormattee = dateFormattee + date.getHours() + ":";
            }
            ;
            //yyyy-MM-ddThh:mm
            if (date.getMinutes() < 10) {
                dateFormattee = dateFormattee + "0" + date.getMinutes();
            }
            else {
                dateFormattee = dateFormattee + date.getMinutes();
            }
            ;
        }
        else {
            dateFormattee = "YYYY/MM/DD HH:MM";
        }
        return dateFormattee;
    };
    DstComponent.prototype.formattage = function () {
        this.dateReferenceDSTFormattee = this.formattageDate(this.dateReferenceDST.dateLocale);
        this.dateRechercheDSTFormattee = this.formattageDate(this.dateRechercheDST.dateLocale);
        this.dateReferenceSansDSTFormattee = this.formattageDate(this.dateReferenceDST.dateLocaleSansDST);
        this.dateRechercheSansDSTFormattee = this.formattageDate(this.dateRechercheDST.dateLocaleSansDST);
        //this.gmtReferenceFormatte = this.dateReferenceDST.gmt;
        //this.gmtRechercheFormatte = this.dateRechercheDST.gmt;
    };
    DstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dst',
            template: __webpack_require__(/*! ./dst.component.html */ "./src/app/dst/dst.component.html"),
            styles: [__webpack_require__(/*! ./dst.component.css */ "./src/app/dst/dst.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DstComponent);
    return DstComponent;
}());

var PopUpDetailDST = /** @class */ (function () {
    function PopUpDetailDST(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['nomZone', 'gmt', 'horaire'];
        this.dataSource = [];
        if (this.data.dateReferenceDST.nomZone != undefined) {
            // Ajout Référence avec DST
            this.ligne = {
                nomZone: this.data.dateReferenceDST.nomZone + ' (local)',
                gmt: null,
                horaire: this.data.dateReferenceDSTFormattee.split(" ")[1]
            };
            this.dataSource.push(this.ligne);
            // Ajout Référence sans DST
            this.ligne = {
                nomZone: this.data.dateReferenceDST.nomZone + ' (sans DST)',
                gmt: this.data.dateReferenceDST.gmt,
                horaire: this.data.dateReferenceSansDSTFormattee.split(" ")[1]
            };
            this.dataSource.push(this.ligne);
        }
        if (this.data.dateRechercheDST.nomZone != undefined) {
            // Ajout Recherche sans DST
            this.ligne = {
                nomZone: this.data.dateRechercheDST.nomZone + ' (sans DST)',
                gmt: this.data.dateRechercheDST.gmt,
                horaire: this.data.dateRechercheSansDSTFormattee.split(" ")[1]
            };
            this.dataSource.push(this.ligne);
            // Ajout Recherche avec DST
            this.ligne = {
                nomZone: this.data.dateRechercheDST.nomZone + ' (local)',
                gmt: null,
                horaire: this.data.dateRechercheDSTFormattee.split(" ")[1]
            };
            this.dataSource.push(this.ligne);
        }
    }
    PopUpDetailDST = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dst-detail',
            template: __webpack_require__(/*! ./dst.component.detail.html */ "./src/app/dst/dst.component.detail.html"),
            styles: [__webpack_require__(/*! ./dst.component.detail.css */ "./src/app/dst/dst.component.detail.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], PopUpDetailDST);
    return PopUpDetailDST;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .docs-footer[_ngcontent-c14] {\r\n    padding: 12px;\r\n    font-size: 12px;\r\n    margin-top: 40px;\r\n}\r\n  \r\n  .docs-footer {\r\n    background: #3f51b5;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n  \r\n  .docs-footer-list[_ngcontent-c14] {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    padding: 8px;\r\n}\r\n  \r\n  .docs-footer[_ngcontent-c14] {\r\n    padding: 12px;\r\n    font-size: 12px;\r\n    margin-top: 40px;\r\n}\r\n  \r\n  .docs-footer-version[_ngcontent-c14] {\r\n    flex: 1;\r\n    text-align: center;\r\n}\r\n  \r\n  .docs-footer-copyright[_ngcontent-c14] {\r\n    display: flex;\r\n    flex: 1;\r\n    justify-content: flex-end;\r\n    flex-direction: column;\r\n    min-width: 225px;\r\n    text-align: center;\r\n}\r\n  \r\n  mat-grid-tile {\r\n    background: lightblue;\r\n}\r\n  \r\n  .nom {\r\n    font-size: 0.5em;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBR0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7RUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztFQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7RUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztFQUVBO0lBQ0ksT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7RUFFQTtJQUNJLGFBQWE7SUFDYixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztFQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztFQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbiAgLmRvY3MtZm9vdGVyW19uZ2NvbnRlbnQtYzE0XSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uZG9jcy1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNmNTFiNTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZG9jcy1mb290ZXItbGlzdFtfbmdjb250ZW50LWMxNF0ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uZG9jcy1mb290ZXJbX25nY29udGVudC1jMTRdIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uZG9jcy1mb290ZXItdmVyc2lvbltfbmdjb250ZW50LWMxNF0ge1xyXG4gICAgZmxleDogMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRvY3MtZm9vdGVyLWNvcHlyaWdodFtfbmdjb250ZW50LWMxNF0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMjI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG59XHJcblxyXG4ubm9tIHtcclxuICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"nom\">\n    Frank TROUILLARD - 27 Juin 2019\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .docs-footer[_ngcontent-c14] {\r\n    padding: 12px;\r\n    font-size: 12px;\r\n    margin-top: 40px;\r\n}\r\n  \r\n  .docs-footer {\r\n    background: #3f51b5;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n  \r\n  .docs-footer-list[_ngcontent-c14] {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    padding: 8px;\r\n}\r\n  \r\n  .docs-footer[_ngcontent-c14] {\r\n    padding: 12px;\r\n    font-size: 12px;\r\n    margin-top: 40px;\r\n}\r\n  \r\n  .docs-footer-version[_ngcontent-c14] {\r\n    flex: 1;\r\n    text-align: center;\r\n}\r\n  \r\n  .docs-footer-copyright[_ngcontent-c14] {\r\n    display: flex;\r\n    flex: 1;\r\n    justify-content: flex-end;\r\n    flex-direction: column;\r\n    min-width: 225px;\r\n    text-align: center;\r\n}\r\n  \r\n  mat-grid-tile {\r\n    background: lightblue;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBR0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7RUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztFQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7RUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztFQUVBO0lBQ0ksT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7RUFFQTtJQUNJLGFBQWE7SUFDYixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztFQUVBO0lBQ0kscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG5cclxuICAuZG9jcy1mb290ZXJbX25nY29udGVudC1jMTRdIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5kb2NzLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kb2NzLWZvb3Rlci1saXN0W19uZ2NvbnRlbnQtYzE0XSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5kb2NzLWZvb3Rlcltfbmdjb250ZW50LWMxNF0ge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5kb2NzLWZvb3Rlci12ZXJzaW9uW19uZ2NvbnRlbnQtYzE0XSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZG9jcy1mb290ZXItY29weXJpZ2h0W19uZ2NvbnRlbnQtYzE0XSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAyMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWdyaWQtdGlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <div style=\"margin:auto;\">CALCULETTE DST</div>\n    <!-- \n    <span><img src=\"./assets/logo.png\"></span>\n    <span class=\"example-fill-remaining-space\"></span>\n    <span class=\"align-center\"></span>\n    <span class=\"example-spacer\"></span>    \n    <button mat-button [routerLink] =\"['/portfolio']\">Portfolio</button>   \n    <button mat-button>Aide</button>\n    <button mat-button>Contact</button>\n    <button mat-button [routerLink] =\"['/home']\" ><mat-icon title=\"Home Page\">home</mat-icon></button>\n   \n    <button mat-button (click)=\"onLogoutClick()\"><mat-icon title=\"Profile\">account_circle</mat-icon></button>\n\n    <button mat-button [routerLink] =\"['/settings']\"><mat-icon title=\"Settings\">settings</mat-icon></button>\n    \n    <button mat-button (click)=\"onLogoutClick()\"><mat-icon title=\"Logout\">exit_to_app</mat-icon></button>\n    \n    <span>{{language}}\n      <mat-select [ngModel]=\"language\" (selectionChange)=\"switchLanguage($event)\">\n        <mat-option *ngFor=\"let lang of languages\" [value]=\"lang.value\">\n          {{lang.viewValue | uppercase}}\n        </mat-option>\n      </mat-select>\n    </span>\n    -->\n  </mat-toolbar-row>\n</mat-toolbar>\n\n\n<!-- <span translate=\"header.logout\"></span> -->"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router) {
        this.translate = translate;
        this.router = router;
        this.languages = [
            { value: 'fr_FR', viewValue: 'fr' },
            { value: 'en_GB', viewValue: 'en' }
        ];
    }
    HeaderComponent.prototype.switchLanguage = function (_a) {
        var language = _a.value;
        this.translate.use(language);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        this.router.navigate(["login"]);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/zone/zone.component.css":
/*!*****************************************!*\
  !*** ./src/app/zone/zone.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subtitle-design{\r\n    background-color: #b2b5dc;\r\n    height: 25px;\r\n    font-size: initial;\r\n    border-radius: 5px;\r\n    padding-left: 5px;\r\n    color: darkblue;\r\n}\r\n\r\n.mat-form-field {   \r\n    width: 60%;\r\n    height: 70px;\r\n}\r\n\r\n.titre {\r\n    background-color: rgb(245, 243, 243); \r\n}\r\n\r\n.buttons {\r\n    margin: 20px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZS96b25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3pvbmUvem9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlLWRlc2lnbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmI1ZGM7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHsgICBcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi50aXRyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDMsIDI0Myk7IFxyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/zone/zone.component.detail.css":
/*!************************************************!*\
  !*** ./src/app/zone/zone.component.detail.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titre {\r\n\r\n}\r\n\r\n.cellule_50 {\r\n    text-align: left;\r\n    width: 50%;\r\n}\r\n\r\n.tableau {\r\n    border: 10px;\r\n    margin-top: 0px;\r\n    padding-top: 0px;\r\n    text-align: center;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.header {\r\n\r\n}\r\n\r\n.page {\r\n    text-align: center;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.bouton {\r\n    text-align: center;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9uZS96b25lLmNvbXBvbmVudC5kZXRhaWwuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3pvbmUvem9uZS5jb21wb25lbnQuZGV0YWlsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRyZSB7XHJcblxyXG59XHJcblxyXG4uY2VsbHVsZV81MCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnRhYmxlYXUge1xyXG4gICAgYm9yZGVyOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG5cclxufVxyXG5cclxuLnBhZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvdXRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/zone/zone.component.detail.html":
/*!*************************************************!*\
  !*** ./src/app/zone/zone.component.detail.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  \r\n  <div mat-dialog-title class=\"titre\">Détail Zone</div>\r\n\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"tableau\">\r\n  \r\n    <ng-container matColumnDef=\"gauche\">\r\n      \r\n      <td mat-cell *matCellDef=\"let element\" class=\"cellule_50\"> {{element.gauche}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"droite\">\r\n\r\n      <td mat-cell *matCellDef=\"let element\" class=\"cellule_50\"> {{element.droite}} </td>\r\n    </ng-container>\r\n\r\n    \r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  </table>\r\n\r\n  <br>\r\n<!--\r\n<table class=\"bouton\">\r\n  <tr><td class=\"cellule_50\">Nom</td><td class=\"cellule_50\">France/Paris</td></tr>\r\n  <tr><td class=\"cellule_50\">GMT</td><td class=\"cellule_50\">+1</td></tr>\r\n  <tr><td class=\"cellule_50\">DST</td><td class=\"cellule_50\">European_Union</td></tr>\r\n</table>\r\n\r\n\r\n<br>\r\n\r\n<table class=\"tableau\">\r\n  <tr>\r\n    <td class=\"cellule_100\" colspan=\"2\"> \r\n      <mat-form-field class=\"cellule_100\">\r\n          <mat-label class=\"cellule_100\"></mat-label>\r\n          <mat-select [(value)]=\"anneeSelectionnee\" (selectionChange)=\"nouvelleAnnee()\" class=\"cellule_100\">\r\n            <mat-option *ngFor=\"let annee of annees\" [value]=\"annee\" class=\"cellule_100\">\r\n              {{annee}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n    </td>\r\n  </tr>\r\n  <tr><td class=\"cellule_50\">DST On</td><td class=\"cellule_50\">2019/03/31 02:00</td></tr>\r\n  <tr><td class=\"cellule_50\">DST Off</td><td class=\"cellule_50\">2019/10/31 03:00</td></tr>\r\n\r\n</table>\r\n\r\n  <br>\r\n-->\r\n  <div class=\"bouton\" mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=true cdkFocusInitial><mat-icon>done</mat-icon></button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/zone/zone.component.html":
/*!******************************************!*\
  !*** ./src/app/zone/zone.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"titre\">\n<!--\n\n  <div class=\"titre\">\n    <b>{{label_titre}}</b>\n    <span *ngIf=\"(visible) && (zone != undefined)\">&nbsp;(GMT+{{zone.heures}})</span>\n    <span *ngIf=\"(visible) && (zone != undefined) && (zone.dst != null) && (dst == true)\">&nbsp;<a (click)=\"changementDetail()\"><img src=\"assets/dston.png\"></a></span>\n    <span *ngIf=\"(visible) && (zone != undefined) && (zone.dst != null) && (dst == false)\">&nbsp;<a (click)=\"changementDetail()\"><img src=\"assets/dstoff.png\"></a></span>\n    <span *ngIf=\"(visible) && (zone != undefined) && (zone.dst == null)\">&nbsp;<img src=\"assets/nodst.png\"></span>\n    <span *ngIf=\"(visible) && (zone != undefined) && (defaut)\">&nbsp;<a (click)=\"memorisationZone()\"><img src=\"assets/pointer.png\"/></a></span>\n  </div>\n-->\n  <br>\n  <div *ngIf=\"visible\">\n      <form>\n          <mat-form-field>\n            <input type=\"text\" placeholder=\"{{label_endroit}}\" aria-label=\"Number\" matInput [formControl]=\"zoneControl\" [matAutocomplete]=\"auto\">\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"changeZone($event)\">\n              <mat-option *ngFor=\"let nomZone of filteredListeNomZones | async\" [value]=\"nomZone\">\n                {{nomZone}}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n          &nbsp;&nbsp;\n          <button *ngIf=\"defaut\" mat-raised-button color=\"secondary\" (click)=\"memorisationZone()\">\n              <mat-icon>save</mat-icon>\n          </button>\n          <button *ngIf=\"!defaut\"  mat-button color=\"secondary\">\n            <mat-icon></mat-icon>\n        </button>\n        </form>\n  </div>\n\n<!--\n  <div *ngIf=\"visible\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>{{label_endroit}}</mat-label>\n      <mat-select [(ngModel)]=\"dateDST.nomZone\" (selectionChange)=\"changeZone($event)\">\n        <mat-option *ngFor=\"let nom of listeNomsZones; let j = index\" [value]=\"nom\"><span translate=\"{{nom}}\"></span></mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n-->\n  \n  <div *ngIf=\"visible\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label style=\"display: inline-block;font-size: 15px;margin: 0px;padding: 0px;\">{{label_heure}}</mat-label>\n      <input matInput type=\"datetime-local\" [(ngModel)]=\"dateLocaleFormattee\" readonly=\"{{readOnly}}\">\n    </mat-form-field>\n    &nbsp;&nbsp;\n    <button mat-raised-button color=\"secondary\" (click)=\"zoomZone()\">\n        <mat-icon>zoom_in</mat-icon>\n    </button>\n  </div>\n<!--\n  <div *ngIf=\"(visible) && (detail)\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>DST On</mat-label>\n      <input matInput type=\"datetime-local\" [(ngModel)]=\"dateDstOnFormattee\" readonly=\"true\">\n    </mat-form-field>\n  </div>\n\n  <div *ngIf=\"(visible) && (detail)\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>DST Off</mat-label>\n      <input matInput type=\"datetime-local\" [(ngModel)]=\"dateDstOffFormattee\" readonly=\"true\">\n    </mat-form-field>\n  </div>\n  <br>\n-->\n\n  </div>"

/***/ }),

/***/ "./src/app/zone/zone.component.ts":
/*!****************************************!*\
  !*** ./src/app/zone/zone.component.ts ***!
  \****************************************/
/*! exports provided: ZoneComponent, PopUpDetailZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneComponent", function() { return ZoneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpDetailZone", function() { return PopUpDetailZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _zonedstdata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zonedstdata */ "./src/app/zonedstdata.ts");


//import {ZoneService} from '../core/zone.service';





var ZoneComponent = /** @class */ (function () {
    // CONSTRUCTOR LISTE ZONES WS
    /*  constructor(private api : ZoneService) {
        this.api.getZones()
        .subscribe(listezones => {
          this.zones = listezones;
        },
         err=>{ }
        );
      }
    */
    // CONSTRUCTOR LISTE ZONES LOCALES (Map pour les données this.zones et Array pour le menu liste this.listeNomZones )
    function ZoneComponent(dialog) {
        this.dialog = dialog;
        this.retourInitial = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modification = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.detail = false;
        this.zones = new Map();
        this.listeNomZones = [];
        this.zoneControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.ws = [{ "id": 140, "nom": "Jordan", "dst": { "id": 19, "nom": "Jordania", "nom_regle": "JORDANIA", "methode_on": "Standard", "methode_off": "Standard", "debut_on": 2019, "debut_off": 2019, "fin_on": 2099, "fin_off": 2099, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 4, "mois_off": 10, "mois_on": 3, "jour_off": 4, "heures_on": 0, "heures_off": 0 }, "id_iso_3166_2": "JO", "indicatif_tel": "962", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 2, "nom": "Albania", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "AL", "indicatif_tel": "355", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 4, "nom": "Andorra", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "AD", "indicatif_tel": "376", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 13, "nom": "Australia/Adelaide", "dst": { "id": 1, "nom": "Autralia", "nom_regle": "AUTRALIA", "methode_on": "Standard", "methode_off": "Standard", "debut_on": 2006, "debut_off": 2007, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 1, "decile_off": 1, "jour_on": 0, "mois_off": 4, "mois_on": 10, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "AU", "indicatif_tel": "61", "sens": 1, "minutes": 30, "heures": 9 }, { "id": 15, "nom": "Australia/Broken_Hill", "dst": { "id": 1, "nom": "Autralia", "nom_regle": "AUTRALIA", "methode_on": "Standard", "methode_off": "Standard", "debut_on": 2006, "debut_off": 2007, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 1, "decile_off": 1, "jour_on": 0, "mois_off": 4, "mois_on": 10, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "AU", "indicatif_tel": "61", "sens": 1, "minutes": 30, "heures": 9 }, { "id": 21, "nom": "Australia/Hobart", "dst": { "id": 1, "nom": "Autralia", "nom_regle": "AUTRALIA", "methode_on": "Standard", "methode_off": "Standard", "debut_on": 2006, "debut_off": 2007, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 1, "decile_off": 1, "jour_on": 0, "mois_off": 4, "mois_on": 10, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "AU", "indicatif_tel": "61", "sens": 1, "minutes": 0, "heures": 10 }, { "id": 25, "nom": "Australia/Sydney", "dst": { "id": 1, "nom": "Autralia", "nom_regle": "AUTRALIA", "methode_on": "Standard", "methode_off": "Standard", "debut_on": 2006, "debut_off": 2007, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 1, "decile_off": 1, "jour_on": 0, "mois_off": 4, "mois_on": 10, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "AU", "indicatif_tel": "61", "sens": 1, "minutes": 0, "heures": 10 }, { "id": 29, "nom": "Austria", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "AT", "indicatif_tel": "43", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 31, "nom": "Bahamas", "dst": { "id": 2, "nom": "Bahamas", "nom_regle": "BAHAMAS", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 8, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "BS", "indicatif_tel": "242", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 36, "nom": "Belgium", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "BE", "indicatif_tel": "32", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 39, "nom": "Bermuda", "dst": { "id": 2, "nom": "Bahamas", "nom_regle": "BAHAMAS", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 8, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "BM", "indicatif_tel": "441", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 42, "nom": "Bosnia Herzegovina", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "BA", "indicatif_tel": "387", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 45, "nom": "Brazil/Campo_Grande", "dst": { "id": 3, "nom": "Brazil", "nom_regle": "BRAZIL", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2017, "debut_off": 2017, "fin_on": 2999, "fin_off": 2999, "operateur_on": ">", "operateur_off": ">", "decile_on": 1, "decile_off": 14, "jour_on": 0, "mois_off": 2, "mois_on": 11, "jour_off": 0, "heures_on": 0, "heures_off": 0 }, "id_iso_3166_2": "BR", "indicatif_tel": "55", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 49, "nom": "Brazil/Sao_Paulo", "dst": { "id": 3, "nom": "Brazil", "nom_regle": "BRAZIL", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2017, "debut_off": 2017, "fin_on": 2999, "fin_off": 2999, "operateur_on": ">", "operateur_off": ">", "decile_on": 1, "decile_off": 14, "jour_on": 0, "mois_off": 2, "mois_on": 11, "jour_off": 0, "heures_on": 0, "heures_off": 0 }, "id_iso_3166_2": "BR", "indicatif_tel": "55", "sens": -1, "minutes": 0, "heures": 3 }, { "id": 51, "nom": "Bulgaria", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "BG", "indicatif_tel": "359", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 58, "nom": "Canada/Edmonton", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "CA", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 7 }, { "id": 59, "nom": "Canada/Halifax", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "CA", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 60, "nom": "Canada/Montreal", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "CA", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 62, "nom": "Canada/St_Johns", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "CA", "indicatif_tel": "1", "sens": -1, "minutes": 30, "heures": 3 }, { "id": 64, "nom": "Canada/Vancouver", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "CA", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 8 }, { "id": 65, "nom": "Canada/Winnipeg", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "CA", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 70, "nom": "Chile/Easter Pascua Island y Salas y Gomez", "dst": { "id": 5, "nom": "Chile", "nom_regle": "CHILE", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2016, "debut_off": 2016, "fin_on": 2999, "fin_off": 2999, "operateur_on": ">", "operateur_off": ">", "decile_on": 8, "decile_off": 8, "jour_on": 0, "mois_off": 5, "mois_on": 8, "jour_off": 0, "heures_on": 4, "heures_off": 3 }, "id_iso_3166_2": "", "indicatif_tel": "56", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 71, "nom": "Chile/Santiago", "dst": { "id": 5, "nom": "Chile", "nom_regle": "CHILE", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2016, "debut_off": 2016, "fin_on": 2999, "fin_off": 2999, "operateur_on": ">", "operateur_off": ">", "decile_on": 8, "decile_off": 8, "jour_on": 0, "mois_off": 5, "mois_on": 8, "jour_off": 0, "heures_on": 4, "heures_off": 3 }, "id_iso_3166_2": "CL", "indicatif_tel": "56", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 80, "nom": "Croatia", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "HR", "indicatif_tel": "385", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 81, "nom": "Cuba", "dst": { "id": 6, "nom": "Cuba", "nom_regle": "CUBA", "methode_on": "Standard", "methode_off": "Standard", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 0, "heures_off": 0 }, "id_iso_3166_2": "CU", "indicatif_tel": "53", "sens": -1, "minutes": 0, "heures": 3 }, { "id": 82, "nom": "Cyprus", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "CY", "indicatif_tel": "357", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 83, "nom": "Czech Republic", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "CZ", "indicatif_tel": "420", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 84, "nom": "Denmark/Copenhagen", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "DK", "indicatif_tel": "45", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 85, "nom": "Denmark/Faroe Islands", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "FO", "indicatif_tel": "298", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 86, "nom": "Denmark/Greenland", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "GL", "indicatif_tel": "299", "sens": -1, "minutes": 0, "heures": 3 }, { "id": 96, "nom": "Estonia", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "EE", "indicatif_tel": "372", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 98, "nom": "Fiji Islands", "dst": { "id": 18, "nom": "Fidji", "nom_regle": "FIDJI", "methode_on": "Standard", "methode_off": "Standard", "debut_on": 2018, "debut_off": 2018, "fin_on": 2018, "fin_off": 2018, "operateur_on": "=", "operateur_off": "=", "decile_on": 4, "decile_off": 14, "jour_on": 0, "mois_off": 1, "mois_on": 11, "jour_off": 0, "heures_on": 2, "heures_off": 3 }, "id_iso_3166_2": "FJ", "indicatif_tel": "679", "sens": 1, "minutes": 0, "heures": 12 }, { "id": 99, "nom": "Finland", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "FI", "indicatif_tel": "358", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 108, "nom": "France/Paris", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "FR", "indicatif_tel": "33", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 313, "nom": "Uruguay", "dst": null, "id_iso_3166_2": "UY", "indicatif_tel": "598", "sens": -1, "minutes": 0, "heures": 3 }, { "id": 110, "nom": "France/Saint Pierre and Miquelon", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "PM", "indicatif_tel": "508", "sens": -1, "minutes": 0, "heures": 3 }, { "id": 115, "nom": "Germany", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "DE", "indicatif_tel": "49", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 117, "nom": "Greece", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "GR", "indicatif_tel": "30", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 125, "nom": "Hungary", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "HU", "indicatif_tel": "36", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 131, "nom": "Iran", "dst": { "id": 14, "nom": "Iran", "nom_regle": "IRAN", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2017, "debut_off": 2017, "fin_on": 2019, "fin_off": 2019, "operateur_on": "=", "operateur_off": "=", "decile_on": 22, "decile_off": 22, "jour_on": 0, "mois_off": 9, "mois_on": 3, "jour_off": 0, "heures_on": 0, "heures_off": 0 }, "id_iso_3166_2": "IR", "indicatif_tel": "98", "sens": 1, "minutes": 30, "heures": 3 }, { "id": 133, "nom": "Ireland", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "IE", "indicatif_tel": "353", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 134, "nom": "Isle of Man", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "IM", "indicatif_tel": "44", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 135, "nom": "Israel", "dst": { "id": 15, "nom": "Israel", "nom_regle": "ZION", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2013, "debut_off": 2013, "fin_on": 2999, "fin_off": 2999, "operateur_on": "last", "operateur_off": "last", "decile_on": 22, "decile_off": 0, "jour_on": 5, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "IL", "indicatif_tel": "972", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 136, "nom": "Italy", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "IT", "indicatif_tel": "39", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 150, "nom": "Latvia", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "LV", "indicatif_tel": "371", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 151, "nom": "Lebanon", "dst": { "id": 8, "nom": "Lebanon", "nom_regle": "LEBANON", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 0, "heures_off": 0 }, "id_iso_3166_2": "LB", "indicatif_tel": "961", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 155, "nom": "Liechtenstein", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "LI", "indicatif_tel": "423", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 156, "nom": "Lithuania", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "LT", "indicatif_tel": "370", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 157, "nom": "Luxembourg", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "LU", "indicatif_tel": "352", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 158, "nom": "Macedonia", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "MK", "indicatif_tel": "389", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 164, "nom": "Malta", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "MT", "indicatif_tel": "356", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 168, "nom": "Mexico/Chihuahua", "dst": { "id": 9, "nom": "Mexico", "nom_regle": "MEXICO", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": "last", "decile_on": 1, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 4, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "MX", "indicatif_tel": "52", "sens": -1, "minutes": 0, "heures": 7 }, { "id": 170, "nom": "Mexico/Mexico_City", "dst": { "id": 9, "nom": "Mexico", "nom_regle": "MEXICO", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": "last", "decile_on": 1, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 4, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "MX", "indicatif_tel": "52", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 171, "nom": "Mexico/Tijuana", "dst": { "id": 9, "nom": "Mexico", "nom_regle": "MEXICO", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": "last", "decile_on": 1, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 4, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "MX", "indicatif_tel": "52", "sens": -1, "minutes": 0, "heures": 8 }, { "id": 176, "nom": "Moldova", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "MD", "indicatif_tel": "373", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 177, "nom": "Monaco", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "MC", "indicatif_tel": "377", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 179, "nom": "Montenegro", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "ME", "indicatif_tel": "382", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 180, "nom": "Morocco", "dst": { "id": 17, "nom": "Marroco", "nom_regle": "MARROCO", "methode_on": "Standard", "methode_off": "Standard", "debut_on": 2008, "debut_off": 2014, "fin_on": 2999, "fin_off": 2999, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 9, "mois_on": 3, "jour_off": 0, "heures_on": 0, "heures_off": 0 }, "id_iso_3166_2": "MA", "indicatif_tel": "212", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 186, "nom": "Netherlands/Amsterdam", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "NL", "indicatif_tel": "31", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 195, "nom": "New Zealand/Wellington", "dst": { "id": 10, "nom": "New_Zealand", "nom_regle": "NEW ZEALAND", "methode_on": "Standard", "methode_off": "Standard", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": ">", "decile_on": 0, "decile_off": 1, "jour_on": 0, "mois_off": 4, "mois_on": 9, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "NZ", "indicatif_tel": "64", "sens": 1, "minutes": 0, "heures": 12 }, { "id": 196, "nom": "New Zeland/Ross Dependancy/Antartic", "dst": { "id": 10, "nom": "New_Zealand", "nom_regle": "NEW ZEALAND", "methode_on": "Standard", "methode_off": "Standard", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": ">", "decile_on": 0, "decile_off": 1, "jour_on": 0, "mois_off": 4, "mois_on": 9, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "NZ", "indicatif_tel": "642409", "sens": 1, "minutes": 0, "heures": 12 }, { "id": 201, "nom": "Norway/Oslo", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "NO", "indicatif_tel": "47", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 206, "nom": "Palestine", "dst": { "id": 11, "nom": "Palestine", "nom_regle": "PALESTINE", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 6, "mois_off": 10, "mois_on": 3, "jour_off": 6, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "PS", "indicatif_tel": "970", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 209, "nom": "Paraguay", "dst": { "id": 12, "nom": "Paraguay", "nom_regle": "PARA", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 1, "decile_off": 21, "jour_on": 0, "mois_off": 3, "mois_on": 10, "jour_off": 0, "heures_on": 0, "heures_off": 0 }, "id_iso_3166_2": "PY", "indicatif_tel": "595", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 212, "nom": "Poland", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "PL", "indicatif_tel": "48", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 213, "nom": "Portugal/Azores", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "PT", "indicatif_tel": "351", "sens": -1, "minutes": 0, "heures": 1 }, { "id": 214, "nom": "Portugal/Lisbon", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "PT", "indicatif_tel": "351", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 215, "nom": "Portugal/Madeira", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "PT", "indicatif_tel": "351", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 218, "nom": "Romania", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "RO", "indicatif_tel": "40", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 11, "nom": "Argentina/Falkland Islands/Malvinas", "dst": { "id": 20, "nom": "Falklands", "nom_regle": "FALKLANDS", "methode_on": "Standard", "methode_off": "Standard", "debut_on": 2019, "debut_off": 2019, "fin_on": 2099, "fin_off": 2099, "operateur_on": ">", "operateur_off": ">", "decile_on": 1, "decile_off": 15, "jour_on": 0, "mois_off": 4, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "FK", "indicatif_tel": "500", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 235, "nom": "Samoa", "dst": { "id": 16, "nom": "Samoa", "nom_regle": "WS", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2012, "debut_off": 2012, "fin_on": 2999, "fin_off": 2999, "operateur_on": "last", "operateur_off": ">", "decile_on": 0, "decile_off": 1, "jour_on": 0, "mois_off": 4, "mois_on": 9, "jour_off": 0, "heures_on": 3, "heures_off": 4 }, "id_iso_3166_2": "WS", "indicatif_tel": "685", "sens": -1, "minutes": 0, "heures": 11 }, { "id": 236, "nom": "San Marino", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "SM", "indicatif_tel": "378", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 240, "nom": "Serbia", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "RS", "indicatif_tel": "381", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 244, "nom": "Slovakia", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "SK", "indicatif_tel": "421", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 245, "nom": "Slovenia", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "SI", "indicatif_tel": "386", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 251, "nom": "Spain", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "ES", "indicatif_tel": "34", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 252, "nom": "Spain/Canary Islands", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "ES", "indicatif_tel": "34", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 257, "nom": "Sweden", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "SE", "indicatif_tel": "46", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 258, "nom": "Switzerland", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "CH", "indicatif_tel": "41", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 259, "nom": "Syria", "dst": { "id": 13, "nom": "Syria", "nom_regle": "SYRIA", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 5, "mois_off": 10, "mois_on": 3, "jour_off": 5, "heures_on": 0, "heures_off": 0 }, "id_iso_3166_2": "SY", "indicatif_tel": "963", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 273, "nom": "Ukraine", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "UA", "indicatif_tel": "380", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 279, "nom": "United Kingdom/Gibraltar", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "GI", "indicatif_tel": "350", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 280, "nom": "United Kingdom/Great Britan and Northern Ireland", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "GB", "indicatif_tel": "44", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 288, "nom": "United States/Adak", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "US", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 10 }, { "id": 290, "nom": "United States/Anchorage", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "US", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 9 }, { "id": 292, "nom": "United States/Arizona Navajo Reservation", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "US", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 7 }, { "id": 293, "nom": "United States/Chicago", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "US", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 294, "nom": "United States/Denver", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "US", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 7 }, { "id": 297, "nom": "United States/Los_Angeles", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "US", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 8 }, { "id": 299, "nom": "United States/New_York", "dst": { "id": 4, "nom": "North_America", "nom_regle": "CANADA/US", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 7, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "US", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 306, "nom": "Vatican", "dst": { "id": 7, "nom": "European_Union", "nom_regle": "EU", "methode_on": "UTC", "methode_off": "UTC", "debut_on": 2006, "debut_off": 1996, "fin_on": 2037, "fin_off": 2037, "operateur_on": "last", "operateur_off": "last", "decile_on": 0, "decile_off": 0, "jour_on": 0, "mois_off": 10, "mois_on": 3, "jour_off": 0, "heures_on": 1, "heures_off": 1 }, "id_iso_3166_2": "VA", "indicatif_tel": "379", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 1, "nom": "Afghanistan", "dst": null, "id_iso_3166_2": "AF", "indicatif_tel": "93", "sens": 1, "minutes": 30, "heures": 4 }, { "id": 3, "nom": "Algeria", "dst": null, "id_iso_3166_2": "DZ", "indicatif_tel": "213", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 5, "nom": "Angola", "dst": null, "id_iso_3166_2": "AO", "indicatif_tel": "244", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 6, "nom": "Anguilla", "dst": null, "id_iso_3166_2": "AI", "indicatif_tel": "264", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 7, "nom": "Antartica/Marie Byrd Land", "dst": null, "id_iso_3166_2": "AA", "indicatif_tel": "0", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 8, "nom": "Antigua and Barbuda", "dst": null, "id_iso_3166_2": "AG", "indicatif_tel": "268", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 9, "nom": "Argentina", "dst": null, "id_iso_3166_2": "AR", "indicatif_tel": "54", "sens": -1, "minutes": 0, "heures": 3 }, { "id": 10, "nom": "Argentina/Antartica", "dst": null, "id_iso_3166_2": "AR", "indicatif_tel": "54", "sens": -1, "minutes": 0, "heures": 3 }, { "id": 12, "nom": "Armenia", "dst": null, "id_iso_3166_2": "AM", "indicatif_tel": "374", "sens": 1, "minutes": 0, "heures": 4 }, { "id": 14, "nom": "Australia/Brisbane", "dst": null, "id_iso_3166_2": "AU", "indicatif_tel": "61", "sens": 1, "minutes": 0, "heures": 10 }, { "id": 16, "nom": "Australia/Christmas Island", "dst": null, "id_iso_3166_2": "CX", "indicatif_tel": "61", "sens": 1, "minutes": 0, "heures": 7 }, { "id": 17, "nom": "Australia/Cocos Keeling Islands", "dst": null, "id_iso_3166_2": "CC", "indicatif_tel": "61891", "sens": 1, "minutes": 30, "heures": 6 }, { "id": 18, "nom": "Australia/Darwin", "dst": null, "id_iso_3166_2": "AU", "indicatif_tel": "61", "sens": 1, "minutes": 30, "heures": 9 }, { "id": 19, "nom": "Australia/Eucla", "dst": null, "id_iso_3166_2": "AU", "indicatif_tel": "61", "sens": 1, "minutes": 45, "heures": 8 }, { "id": 20, "nom": "Australia/Heard Island and McDonald Islands", "dst": null, "id_iso_3166_2": "HM", "indicatif_tel": "61", "sens": 1, "minutes": 0, "heures": 5 }, { "id": 22, "nom": "Australia/Macquarie Island", "dst": null, "id_iso_3166_2": "AU", "indicatif_tel": "61", "sens": 1, "minutes": 0, "heures": 11 }, { "id": 23, "nom": "Australia/Norfolk Island", "dst": null, "id_iso_3166_2": "NF", "indicatif_tel": "672", "sens": 1, "minutes": 0, "heures": 11 }, { "id": 24, "nom": "Australia/Perth", "dst": null, "id_iso_3166_2": "AU", "indicatif_tel": "61", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 26, "nom": "Australian Antarctic Territory - Casey", "dst": null, "id_iso_3166_2": "AU", "indicatif_tel": "61", "sens": 1, "minutes": 0, "heures": 11 }, { "id": 27, "nom": "Australian Antarctic Territory - Davis", "dst": null, "id_iso_3166_2": "AU", "indicatif_tel": "61", "sens": 1, "minutes": 0, "heures": 7 }, { "id": 28, "nom": "Australian Antarctic Territory - Mawson", "dst": null, "id_iso_3166_2": "AU", "indicatif_tel": "61", "sens": 1, "minutes": 0, "heures": 5 }, { "id": 30, "nom": "Azerbaijan", "dst": null, "id_iso_3166_2": "AZ", "indicatif_tel": "994", "sens": 1, "minutes": 0, "heures": 4 }, { "id": 32, "nom": "Bahrain", "dst": null, "id_iso_3166_2": "BH", "indicatif_tel": "973", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 33, "nom": "Bangladesh", "dst": null, "id_iso_3166_2": "BD", "indicatif_tel": "880", "sens": 1, "minutes": 0, "heures": 6 }, { "id": 34, "nom": "Barbados", "dst": null, "id_iso_3166_2": "BB", "indicatif_tel": "246", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 35, "nom": "Belarus", "dst": null, "id_iso_3166_2": "BY", "indicatif_tel": "375", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 37, "nom": "Belize", "dst": null, "id_iso_3166_2": "BZ", "indicatif_tel": "501", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 38, "nom": "Benin", "dst": null, "id_iso_3166_2": "BJ", "indicatif_tel": "229", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 40, "nom": "Bhutan", "dst": null, "id_iso_3166_2": "BT", "indicatif_tel": "975", "sens": 1, "minutes": 30, "heures": 5 }, { "id": 41, "nom": "Bolivia", "dst": null, "id_iso_3166_2": "BO", "indicatif_tel": "591", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 43, "nom": "Botswana", "dst": null, "id_iso_3166_2": "BW", "indicatif_tel": "267", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 44, "nom": "Brazil/Belem", "dst": null, "id_iso_3166_2": "BR", "indicatif_tel": "55", "sens": -1, "minutes": 0, "heures": 3 }, { "id": 46, "nom": "Brazil/Noronha", "dst": null, "id_iso_3166_2": "BR", "indicatif_tel": "55", "sens": -1, "minutes": 0, "heures": 2 }, { "id": 47, "nom": "Brazil/Porto_Velho", "dst": null, "id_iso_3166_2": "BR", "indicatif_tel": "55", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 48, "nom": "Brazil/Rio_Branco", "dst": null, "id_iso_3166_2": "BR", "indicatif_tel": "55", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 50, "nom": "Brunei", "dst": null, "id_iso_3166_2": "BN", "indicatif_tel": "673", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 52, "nom": "Burkina Faso", "dst": null, "id_iso_3166_2": "BF", "indicatif_tel": "226", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 53, "nom": "Burundi", "dst": null, "id_iso_3166_2": "BI", "indicatif_tel": "257", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 54, "nom": "Cambodia", "dst": null, "id_iso_3166_2": "KH", "indicatif_tel": "855", "sens": 1, "minutes": 0, "heures": 7 }, { "id": 55, "nom": "Cameroon", "dst": null, "id_iso_3166_2": "CM", "indicatif_tel": "237", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 56, "nom": "Canada/Coral_Harbour", "dst": null, "id_iso_3166_2": "CA", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 57, "nom": "Canada/Dawson_Creek", "dst": null, "id_iso_3166_2": "CA", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 7 }, { "id": 61, "nom": "Canada/Regina", "dst": null, "id_iso_3166_2": "CA", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 63, "nom": "Canada/Swift_Current", "dst": null, "id_iso_3166_2": "CA", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 66, "nom": "Cape / Cabo Verde", "dst": null, "id_iso_3166_2": "CV", "indicatif_tel": "238", "sens": -1, "minutes": 0, "heures": 1 }, { "id": 67, "nom": "Central African Republic", "dst": null, "id_iso_3166_2": "CF", "indicatif_tel": "236", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 68, "nom": "Chad", "dst": null, "id_iso_3166_2": "TD", "indicatif_tel": "235", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 69, "nom": "Chile/Chilean Antartic Territory and Magallanes", "dst": null, "id_iso_3166_2": "CL", "indicatif_tel": "5661", "sens": -1, "minutes": 0, "heures": 3 }, { "id": 72, "nom": "China", "dst": null, "id_iso_3166_2": "CN", "indicatif_tel": "86", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 73, "nom": "China/Hong_Kong", "dst": null, "id_iso_3166_2": "HK", "indicatif_tel": "86", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 74, "nom": "China/Macao", "dst": null, "id_iso_3166_2": "MO", "indicatif_tel": "853", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 75, "nom": "Colombia", "dst": null, "id_iso_3166_2": "CO", "indicatif_tel": "57", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 76, "nom": "Comoros", "dst": null, "id_iso_3166_2": "KM", "indicatif_tel": "269", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 77, "nom": "Congo / Zaire / Kinshasa", "dst": null, "id_iso_3166_2": "CD", "indicatif_tel": "243", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 78, "nom": "Congo /Lubumbashi", "dst": null, "id_iso_3166_2": "CG", "indicatif_tel": "242", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 79, "nom": "Costa Rica", "dst": null, "id_iso_3166_2": "CR", "indicatif_tel": "506", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 87, "nom": "Djibouti", "dst": null, "id_iso_3166_2": "DJ", "indicatif_tel": "253", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 88, "nom": "Dominica", "dst": null, "id_iso_3166_2": "DM", "indicatif_tel": "767", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 89, "nom": "Dominican Republic", "dst": null, "id_iso_3166_2": "DO", "indicatif_tel": "809", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 90, "nom": "Ecuador/Galapagos Islands", "dst": null, "id_iso_3166_2": "EC", "indicatif_tel": "593", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 91, "nom": "Ecuador/Quito", "dst": null, "id_iso_3166_2": "EC", "indicatif_tel": "593", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 92, "nom": "Egypt", "dst": null, "id_iso_3166_2": "EG", "indicatif_tel": "20", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 93, "nom": "El Salvador", "dst": null, "id_iso_3166_2": "SV", "indicatif_tel": "503", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 94, "nom": "Equatorial Guinea", "dst": null, "id_iso_3166_2": "GQ", "indicatif_tel": "240", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 95, "nom": "Eritrea", "dst": null, "id_iso_3166_2": "ER", "indicatif_tel": "291", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 97, "nom": "Ethiopia", "dst": null, "id_iso_3166_2": "ET", "indicatif_tel": "251", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 100, "nom": "France/Adelie Land", "dst": null, "id_iso_3166_2": "FR", "indicatif_tel": "262262002", "sens": 1, "minutes": 0, "heures": 10 }, { "id": 101, "nom": "France/Antilles", "dst": null, "id_iso_3166_2": "GP", "indicatif_tel": "590", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 102, "nom": "France/French Guiana", "dst": null, "id_iso_3166_2": "GF", "indicatif_tel": "594", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 103, "nom": "France/French Polynesia", "dst": null, "id_iso_3166_2": "PF", "indicatif_tel": "689", "sens": -1, "minutes": 0, "heures": 10 }, { "id": 104, "nom": "France/Gambier", "dst": null, "id_iso_3166_2": "FR", "indicatif_tel": "689", "sens": -1, "minutes": 0, "heures": 9 }, { "id": 105, "nom": "France/Marquesas", "dst": null, "id_iso_3166_2": "FR", "indicatif_tel": "689", "sens": -1, "minutes": 30, "heures": 9 }, { "id": 106, "nom": "France/Mayotte", "dst": null, "id_iso_3166_2": "YT", "indicatif_tel": "269", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 107, "nom": "France/New Caledonia", "dst": null, "id_iso_3166_2": "NC", "indicatif_tel": "687", "sens": 1, "minutes": 0, "heures": 11 }, { "id": 109, "nom": "France/Reunion", "dst": null, "id_iso_3166_2": "RE", "indicatif_tel": "262", "sens": 1, "minutes": 0, "heures": 4 }, { "id": 111, "nom": "France/Wallis and Futuna", "dst": null, "id_iso_3166_2": "WF", "indicatif_tel": "681", "sens": 1, "minutes": 0, "heures": 12 }, { "id": 112, "nom": "Gabon", "dst": null, "id_iso_3166_2": "GA", "indicatif_tel": "241", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 113, "nom": "Gambia", "dst": null, "id_iso_3166_2": "GM", "indicatif_tel": "220", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 114, "nom": "Georgia", "dst": null, "id_iso_3166_2": "GE", "indicatif_tel": "995", "sens": 1, "minutes": 0, "heures": 4 }, { "id": 116, "nom": "Ghana", "dst": null, "id_iso_3166_2": "GH", "indicatif_tel": "233", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 118, "nom": "Grenada", "dst": null, "id_iso_3166_2": "GD", "indicatif_tel": "1473", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 119, "nom": "Guatemala", "dst": null, "id_iso_3166_2": "GT", "indicatif_tel": "502", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 120, "nom": "Guinea", "dst": null, "id_iso_3166_2": "GN", "indicatif_tel": "224", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 121, "nom": "Guinea-Bissau", "dst": null, "id_iso_3166_2": "GW", "indicatif_tel": "245", "sens": -1, "minutes": 0, "heures": 1 }, { "id": 122, "nom": "Guyana", "dst": null, "id_iso_3166_2": "GY", "indicatif_tel": "592", "sens": -1, "minutes": 0, "heures": 3 }, { "id": 123, "nom": "Haiti", "dst": null, "id_iso_3166_2": "HT", "indicatif_tel": "509", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 124, "nom": "Honduras", "dst": null, "id_iso_3166_2": "HN", "indicatif_tel": "503", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 126, "nom": "Iceland", "dst": null, "id_iso_3166_2": "IS", "indicatif_tel": "354", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 127, "nom": "India", "dst": null, "id_iso_3166_2": "IN", "indicatif_tel": "91", "sens": 1, "minutes": 30, "heures": 5 }, { "id": 128, "nom": "Indonesia/Jakarta", "dst": null, "id_iso_3166_2": "ID", "indicatif_tel": "62", "sens": 1, "minutes": 0, "heures": 7 }, { "id": 129, "nom": "Indonesia/Jayapura", "dst": null, "id_iso_3166_2": "ID", "indicatif_tel": "62", "sens": 1, "minutes": 0, "heures": 9 }, { "id": 130, "nom": "Indonesia/Makassar", "dst": null, "id_iso_3166_2": "ID", "indicatif_tel": "62", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 132, "nom": "Iraq", "dst": null, "id_iso_3166_2": "IQ", "indicatif_tel": "964", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 137, "nom": "Ivory Coast", "dst": null, "id_iso_3166_2": "CI", "indicatif_tel": "225", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 138, "nom": "Jamaica", "dst": null, "id_iso_3166_2": "JM", "indicatif_tel": "876", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 139, "nom": "Japan", "dst": null, "id_iso_3166_2": "JP", "indicatif_tel": "81", "sens": 1, "minutes": 0, "heures": 9 }, { "id": 141, "nom": "Kazakhstan/Astana", "dst": null, "id_iso_3166_2": "KZ", "indicatif_tel": "76", "sens": 1, "minutes": 0, "heures": 6 }, { "id": 142, "nom": "Kazakhstan/Oral", "dst": null, "id_iso_3166_2": "KZ", "indicatif_tel": "76", "sens": 1, "minutes": 0, "heures": 5 }, { "id": 143, "nom": "Kenya", "dst": null, "id_iso_3166_2": "KE", "indicatif_tel": "254", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 144, "nom": "Kiribati/Gilbert Islands", "dst": null, "id_iso_3166_2": "KI", "indicatif_tel": "686", "sens": 1, "minutes": 0, "heures": 12 }, { "id": 145, "nom": "Kiribati/Line Islands", "dst": null, "id_iso_3166_2": "KI", "indicatif_tel": "686", "sens": 1, "minutes": 0, "heures": 14 }, { "id": 146, "nom": "Kiribati/Phoenix Islands/Rawaki", "dst": null, "id_iso_3166_2": "KI", "indicatif_tel": "686", "sens": 1, "minutes": 0, "heures": 13 }, { "id": 147, "nom": "Kuwait", "dst": null, "id_iso_3166_2": "KW", "indicatif_tel": "965", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 148, "nom": "Kyrgyzstan", "dst": null, "id_iso_3166_2": "KG", "indicatif_tel": "996", "sens": 1, "minutes": 0, "heures": 6 }, { "id": 149, "nom": "Laos", "dst": null, "id_iso_3166_2": "LA", "indicatif_tel": "856", "sens": 1, "minutes": 0, "heures": 7 }, { "id": 152, "nom": "Lesotho", "dst": null, "id_iso_3166_2": "LS", "indicatif_tel": "266", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 153, "nom": "Liberia", "dst": null, "id_iso_3166_2": "LR", "indicatif_tel": "231", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 154, "nom": "Libya", "dst": null, "id_iso_3166_2": "LY", "indicatif_tel": "218", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 159, "nom": "Madagascar", "dst": null, "id_iso_3166_2": "MG", "indicatif_tel": "261", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 160, "nom": "Malawi", "dst": null, "id_iso_3166_2": "MW", "indicatif_tel": "265", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 161, "nom": "Malaysia", "dst": null, "id_iso_3166_2": "MY", "indicatif_tel": "60", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 162, "nom": "Maldives", "dst": null, "id_iso_3166_2": "MV", "indicatif_tel": "960", "sens": 1, "minutes": 0, "heures": 5 }, { "id": 163, "nom": "Mali", "dst": null, "id_iso_3166_2": "ML", "indicatif_tel": "223", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 165, "nom": "Mauritania", "dst": null, "id_iso_3166_2": "MR", "indicatif_tel": "222", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 166, "nom": "Mauritius", "dst": null, "id_iso_3166_2": "MU", "indicatif_tel": "230", "sens": 1, "minutes": 0, "heures": 4 }, { "id": 167, "nom": "Mexico/Cancun", "dst": null, "id_iso_3166_2": "MX", "indicatif_tel": "52", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 169, "nom": "Mexico/Hermosillo", "dst": null, "id_iso_3166_2": "MX", "indicatif_tel": "52", "sens": -1, "minutes": 0, "heures": 7 }, { "id": 172, "nom": "Micronesia/Kosrae", "dst": null, "id_iso_3166_2": "FM", "indicatif_tel": "691", "sens": 1, "minutes": 0, "heures": 11 }, { "id": 173, "nom": "Micronesia/Ponape", "dst": null, "id_iso_3166_2": "FM", "indicatif_tel": "691", "sens": 1, "minutes": 0, "heures": 11 }, { "id": 174, "nom": "Micronesia/Truk", "dst": null, "id_iso_3166_2": "FM", "indicatif_tel": "691", "sens": 1, "minutes": 0, "heures": 10 }, { "id": 175, "nom": "Micronesia/Yap", "dst": null, "id_iso_3166_2": "FM", "indicatif_tel": "691", "sens": 1, "minutes": 0, "heures": 10 }, { "id": 178, "nom": "Mongolia", "dst": null, "id_iso_3166_2": "MN", "indicatif_tel": "976", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 181, "nom": "Mozambique", "dst": null, "id_iso_3166_2": "MZ", "indicatif_tel": "258", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 182, "nom": "Myanmar / Birmania / Burma", "dst": null, "id_iso_3166_2": "MM", "indicatif_tel": "95", "sens": 1, "minutes": 30, "heures": 6 }, { "id": 183, "nom": "Namibia", "dst": null, "id_iso_3166_2": "NA", "indicatif_tel": "264", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 184, "nom": "Nauru", "dst": null, "id_iso_3166_2": "NR", "indicatif_tel": "674", "sens": 1, "minutes": 0, "heures": 12 }, { "id": 185, "nom": "Nepal", "dst": null, "id_iso_3166_2": "NP", "indicatif_tel": "977", "sens": 1, "minutes": 45, "heures": 5 }, { "id": 187, "nom": "Netherlands/Aruba", "dst": null, "id_iso_3166_2": "AW", "indicatif_tel": "297", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 188, "nom": "Netherlands/Bonaire, Sint Eustatius and Saba/Antilles", "dst": null, "id_iso_3166_2": "BQ", "indicatif_tel": "599", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 189, "nom": "Netherlands/Curacao", "dst": null, "id_iso_3166_2": "CW", "indicatif_tel": "5999", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 190, "nom": "Netherlands/Sint Maarten", "dst": null, "id_iso_3166_2": "SX", "indicatif_tel": "1721", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 192, "nom": "New Zealand/Cook Islands", "dst": null, "id_iso_3166_2": "CK", "indicatif_tel": "682", "sens": -1, "minutes": 0, "heures": 10 }, { "id": 193, "nom": "New Zealand/Niue", "dst": null, "id_iso_3166_2": "NU", "indicatif_tel": "683", "sens": -1, "minutes": 0, "heures": 11 }, { "id": 194, "nom": "New Zealand/Tokelau", "dst": null, "id_iso_3166_2": "TK", "indicatif_tel": "690", "sens": 1, "minutes": 0, "heures": 13 }, { "id": 197, "nom": "Nicaragua", "dst": null, "id_iso_3166_2": "NI", "indicatif_tel": "505", "sens": -1, "minutes": 0, "heures": 6 }, { "id": 198, "nom": "Niger", "dst": null, "id_iso_3166_2": "NE", "indicatif_tel": "227", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 199, "nom": "Nigeria", "dst": null, "id_iso_3166_2": "NG", "indicatif_tel": "234", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 200, "nom": "North Korea", "dst": null, "id_iso_3166_2": "KP", "indicatif_tel": "850", "sens": 1, "minutes": 0, "heures": 9 }, { "id": 202, "nom": "Norway/Peter I Island", "dst": null, "id_iso_3166_2": "NO", "indicatif_tel": "47", "sens": -1, "minutes": 0, "heures": 2 }, { "id": 203, "nom": "Norway/Queen Maud Land", "dst": null, "id_iso_3166_2": "NO", "indicatif_tel": "47", "sens": -1, "minutes": 0, "heures": 1 }, { "id": 204, "nom": "Oman", "dst": null, "id_iso_3166_2": "OM", "indicatif_tel": "968", "sens": 1, "minutes": 0, "heures": 4 }, { "id": 205, "nom": "Pakistan", "dst": null, "id_iso_3166_2": "PK", "indicatif_tel": "92", "sens": 1, "minutes": 0, "heures": 5 }, { "id": 207, "nom": "Panama", "dst": null, "id_iso_3166_2": "PA", "indicatif_tel": "507", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 208, "nom": "Papua New Guinea", "dst": null, "id_iso_3166_2": "PG", "indicatif_tel": "675", "sens": 1, "minutes": 0, "heures": 10 }, { "id": 210, "nom": "Peru", "dst": null, "id_iso_3166_2": "PE", "indicatif_tel": "51", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 211, "nom": "Philippines", "dst": null, "id_iso_3166_2": "PH", "indicatif_tel": "63", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 216, "nom": "Puerto Rico", "dst": null, "id_iso_3166_2": "PR", "indicatif_tel": "1787", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 217, "nom": "Qatar", "dst": null, "id_iso_3166_2": "QA", "indicatif_tel": "974", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 219, "nom": "Russia/Irkutsk", "dst": null, "id_iso_3166_2": "RU", "indicatif_tel": "7", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 220, "nom": "Russia/Kaliningrad", "dst": null, "id_iso_3166_2": "RU", "indicatif_tel": "7", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 221, "nom": "Russia/Kamchatka", "dst": null, "id_iso_3166_2": "RU", "indicatif_tel": "7", "sens": 1, "minutes": 0, "heures": 12 }, { "id": 222, "nom": "Russia/Krasnoyarsk", "dst": null, "id_iso_3166_2": "RU", "indicatif_tel": "7", "sens": 1, "minutes": 0, "heures": 7 }, { "id": 223, "nom": "Russia/Magadan", "dst": null, "id_iso_3166_2": "RU", "indicatif_tel": "7", "sens": 1, "minutes": 0, "heures": 11 }, { "id": 224, "nom": "Russia/Moscow", "dst": null, "id_iso_3166_2": "RU", "indicatif_tel": "7", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 225, "nom": "Russia/Omsk", "dst": null, "id_iso_3166_2": "RU", "indicatif_tel": "7", "sens": 1, "minutes": 0, "heures": 6 }, { "id": 226, "nom": "Russia/Sakhalin", "dst": null, "id_iso_3166_2": "RU", "indicatif_tel": "7", "sens": 1, "minutes": 0, "heures": 11 }, { "id": 227, "nom": "Russia/Samara", "dst": null, "id_iso_3166_2": "RU", "indicatif_tel": "7", "sens": 1, "minutes": 0, "heures": 4 }, { "id": 228, "nom": "Russia/Vladivostok", "dst": null, "id_iso_3166_2": "RU", "indicatif_tel": "7", "sens": 1, "minutes": 0, "heures": 10 }, { "id": 229, "nom": "Russia/Yakutsk", "dst": null, "id_iso_3166_2": "RU", "indicatif_tel": "7", "sens": 1, "minutes": 0, "heures": 9 }, { "id": 230, "nom": "Russia/Yekaterinburg", "dst": null, "id_iso_3166_2": "RU", "indicatif_tel": "7", "sens": 1, "minutes": 0, "heures": 5 }, { "id": 231, "nom": "Rwanda", "dst": null, "id_iso_3166_2": "RW", "indicatif_tel": "250", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 232, "nom": "Saint Kitts and Nevis", "dst": null, "id_iso_3166_2": "KN", "indicatif_tel": "1869", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 233, "nom": "Saint Lucia", "dst": null, "id_iso_3166_2": "LC", "indicatif_tel": "1758", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 234, "nom": "Saint Vincent and the Grenadines", "dst": null, "id_iso_3166_2": "VC", "indicatif_tel": "1784", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 237, "nom": "Sao Tome and Principe", "dst": null, "id_iso_3166_2": "ST", "indicatif_tel": "239", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 238, "nom": "Saudi Arabia", "dst": null, "id_iso_3166_2": "SA", "indicatif_tel": "966", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 239, "nom": "Senegal", "dst": null, "id_iso_3166_2": "SN", "indicatif_tel": "221", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 241, "nom": "Seychelles", "dst": null, "id_iso_3166_2": "SC", "indicatif_tel": "248", "sens": 1, "minutes": 0, "heures": 4 }, { "id": 242, "nom": "Sierra Leone", "dst": null, "id_iso_3166_2": "SL", "indicatif_tel": "232", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 243, "nom": "Singapore", "dst": null, "id_iso_3166_2": "SG", "indicatif_tel": "65", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 246, "nom": "Solomon Islands", "dst": null, "id_iso_3166_2": "SB", "indicatif_tel": "677", "sens": 1, "minutes": 0, "heures": 11 }, { "id": 247, "nom": "Somalia", "dst": null, "id_iso_3166_2": "SO", "indicatif_tel": "252", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 248, "nom": "South Africa", "dst": null, "id_iso_3166_2": "ZA", "indicatif_tel": "27", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 249, "nom": "South Korea", "dst": null, "id_iso_3166_2": "KR", "indicatif_tel": "82", "sens": 1, "minutes": 0, "heures": 9 }, { "id": 250, "nom": "South Sudan", "dst": null, "id_iso_3166_2": "SS", "indicatif_tel": "211", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 253, "nom": "Sri Lanka", "dst": null, "id_iso_3166_2": "LK", "indicatif_tel": "94", "sens": 1, "minutes": 30, "heures": 5 }, { "id": 254, "nom": "Sudan", "dst": null, "id_iso_3166_2": "SD", "indicatif_tel": "249", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 255, "nom": "Suriname", "dst": null, "id_iso_3166_2": "SR", "indicatif_tel": "597", "sens": -1, "minutes": 30, "heures": 3 }, { "id": 256, "nom": "Swaziland", "dst": null, "id_iso_3166_2": "SZ", "indicatif_tel": "268", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 260, "nom": "Taiwan", "dst": null, "id_iso_3166_2": "TW", "indicatif_tel": "886", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 261, "nom": "Tajikistan", "dst": null, "id_iso_3166_2": "TJ", "indicatif_tel": "992", "sens": 1, "minutes": 0, "heures": 5 }, { "id": 262, "nom": "Tanzania", "dst": null, "id_iso_3166_2": "TZ", "indicatif_tel": "255", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 263, "nom": "Thailand", "dst": null, "id_iso_3166_2": "TH", "indicatif_tel": "66", "sens": 1, "minutes": 0, "heures": 7 }, { "id": 264, "nom": "Timor-Leste", "dst": null, "id_iso_3166_2": "TL", "indicatif_tel": "670", "sens": 1, "minutes": 0, "heures": 9 }, { "id": 265, "nom": "Togo", "dst": null, "id_iso_3166_2": "TG", "indicatif_tel": "228", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 266, "nom": "Tonga", "dst": null, "id_iso_3166_2": "TO", "indicatif_tel": "676", "sens": 1, "minutes": 0, "heures": 13 }, { "id": 267, "nom": "Trinidad and Tobago", "dst": null, "id_iso_3166_2": "TT", "indicatif_tel": "868", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 268, "nom": "Tunisia", "dst": null, "id_iso_3166_2": "TN", "indicatif_tel": "216", "sens": 1, "minutes": 0, "heures": 1 }, { "id": 269, "nom": "Turkey", "dst": null, "id_iso_3166_2": "TR", "indicatif_tel": "90", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 270, "nom": "Turkmenistan", "dst": null, "id_iso_3166_2": "TM", "indicatif_tel": "993", "sens": 1, "minutes": 0, "heures": 5 }, { "id": 271, "nom": "Tuvalu", "dst": null, "id_iso_3166_2": "TV", "indicatif_tel": "688", "sens": 1, "minutes": 0, "heures": 12 }, { "id": 272, "nom": "Uganda", "dst": null, "id_iso_3166_2": "UG", "indicatif_tel": "256", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 274, "nom": "United Arab Emirates", "dst": null, "id_iso_3166_2": "AE", "indicatif_tel": "971", "sens": 1, "minutes": 0, "heures": 4 }, { "id": 275, "nom": "United Kingdom/Ascension Islands", "dst": null, "id_iso_3166_2": "GB", "indicatif_tel": "247", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 276, "nom": "United Kingdom/British Antartic Territory", "dst": null, "id_iso_3166_2": "GB", "indicatif_tel": "44", "sens": -1, "minutes": 0, "heures": 3 }, { "id": 277, "nom": "United Kingdom/Cayman Islands", "dst": null, "id_iso_3166_2": "KY", "indicatif_tel": "1345", "sens": -1, "minutes": 0, "heures": 5 }, { "id": 278, "nom": "United Kingdom/Diego Garcia", "dst": null, "id_iso_3166_2": "IO", "indicatif_tel": "246", "sens": 1, "minutes": 0, "heures": 6 }, { "id": 281, "nom": "United Kingdom/Montserrat", "dst": null, "id_iso_3166_2": "MS", "indicatif_tel": "1664", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 282, "nom": "United Kingdom/Pitcairn", "dst": null, "id_iso_3166_2": "PN", "indicatif_tel": "64", "sens": 1, "minutes": 0, "heures": 8 }, { "id": 283, "nom": "United Kingdom/Saint Helena, Ascension and Tristan da Cunha", "dst": null, "id_iso_3166_2": "SH", "indicatif_tel": "290", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 284, "nom": "United Kingdom/South Georgia and the South Sandwich Islands", "dst": null, "id_iso_3166_2": "GS", "indicatif_tel": "500", "sens": -1, "minutes": 0, "heures": 2 }, { "id": 286, "nom": "United Kingdom/Virgin Islands", "dst": null, "id_iso_3166_2": "VG", "indicatif_tel": "1284", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 287, "nom": "United States Minor Outlying Islands", "dst": null, "id_iso_3166_2": "UM", "indicatif_tel": "1", "sens": 1, "minutes": 0, "heures": 13 }, { "id": 289, "nom": "United States/American Samoa", "dst": null, "id_iso_3166_2": "AS", "indicatif_tel": "1684", "sens": -1, "minutes": 0, "heures": 11 }, { "id": 291, "nom": "United States/Arizona", "dst": null, "id_iso_3166_2": "US", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 7 }, { "id": 295, "nom": "United States/Guam", "dst": null, "id_iso_3166_2": "GU", "indicatif_tel": "671", "sens": 1, "minutes": 0, "heures": 10 }, { "id": 296, "nom": "United States/Hawai", "dst": null, "id_iso_3166_2": "US", "indicatif_tel": "1", "sens": -1, "minutes": 0, "heures": 10 }, { "id": 298, "nom": "United States/Marshall Islands", "dst": null, "id_iso_3166_2": "MH", "indicatif_tel": "692", "sens": 1, "minutes": 0, "heures": 12 }, { "id": 300, "nom": "United States/Northern Mariana Islands", "dst": null, "id_iso_3166_2": "MP", "indicatif_tel": "1670", "sens": 1, "minutes": 0, "heures": 10 }, { "id": 301, "nom": "United States/Palau", "dst": null, "id_iso_3166_2": "PW", "indicatif_tel": "680", "sens": 1, "minutes": 0, "heures": 9 }, { "id": 302, "nom": "United States/Virgin Islands", "dst": null, "id_iso_3166_2": "VI", "indicatif_tel": "1340", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 303, "nom": "Uruguay", "dst": null, "id_iso_3166_2": "UY", "indicatif_tel": "598", "sens": -1, "minutes": 0, "heures": 3 }, { "id": 304, "nom": "Uzbekistan", "dst": null, "id_iso_3166_2": "UZ", "indicatif_tel": "998", "sens": 1, "minutes": 0, "heures": 6 }, { "id": 305, "nom": "Vanuatu", "dst": null, "id_iso_3166_2": "VU", "indicatif_tel": "678", "sens": 1, "minutes": 0, "heures": 11 }, { "id": 307, "nom": "Venezuela", "dst": null, "id_iso_3166_2": "VE", "indicatif_tel": "58", "sens": -1, "minutes": 0, "heures": 4 }, { "id": 308, "nom": "Vietnam", "dst": null, "id_iso_3166_2": "VN", "indicatif_tel": "84", "sens": 1, "minutes": 0, "heures": 7 }, { "id": 309, "nom": "Western Sahara", "dst": null, "id_iso_3166_2": "EH", "indicatif_tel": "212", "sens": 1, "minutes": 0, "heures": 0 }, { "id": 310, "nom": "Yemen", "dst": null, "id_iso_3166_2": "YE", "indicatif_tel": "967", "sens": 1, "minutes": 0, "heures": 3 }, { "id": 311, "nom": "Zambia", "dst": null, "id_iso_3166_2": "ZM", "indicatif_tel": "260", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 312, "nom": "Zimbabwe", "dst": null, "id_iso_3166_2": "ZW", "indicatif_tel": "263", "sens": 1, "minutes": 0, "heures": 2 }, { "id": 285, "nom": "United Kingdom/Turks and Caicos Islands", "dst": { "id": 2, "nom": "Bahamas", "nom_regle": "BAHAMAS", "methode_on": "Wall", "methode_off": "Wall", "debut_on": 2006, "debut_off": 2006, "fin_on": 2037, "fin_off": 2037, "operateur_on": ">", "operateur_off": ">", "decile_on": 8, "decile_off": 1, "jour_on": 0, "mois_off": 11, "mois_on": 3, "jour_off": 0, "heures_on": 2, "heures_off": 2 }, "id_iso_3166_2": "TC", "indicatif_tel": "1649", "sens": -1, "minutes": 0, "heures": 4 }];
        for (var i = 0; i < this.ws.length; i++) {
            var element = this.ws[i];
            var dst;
            if (element.dst != null) {
                dst = new _zonedstdata__WEBPACK_IMPORTED_MODULE_5__["DST"](element.dst.id, element.dst.nom, element.dst.nom_regle, element.dst.methode_on, element.dst.methode_off, element.dst.debut_on, element.dst.debut_off, element.dst.fin_on, element.dst.fin_off, element.dst.operateur_on, element.dst.operateur_off, element.dst.decile_on, element.dst.decile_off, element.dst.jour_on, element.dst.mois_off, element.dst.mois_on, element.dst.jour_off, element.dst.heures_on, element.dst.heures_off);
            }
            ;
            var zone = new _zonedstdata__WEBPACK_IMPORTED_MODULE_5__["ZoneDST"](element.id, element.nom, dst, element.id_iso_3166_2, element.indicatif_tel, element.sens, element.minutes, element.heures);
            this.zones.set(zone.nom, zone);
            this.listeNomZones.push(zone.nom);
            dst = null;
        }
        ;
        this.listeNomZones.sort();
    }
    ZoneComponent.prototype.zoomZone = function () {
        var dialogRef = this.dialog.open(PopUpDetailZone, {
            width: '100%',
            data: {
                date: this.dateDST,
                zone: this.zone,
                dateLocaleFormattee: this.dateLocaleFormattee,
                dateOnFormattee: this.dateDstOnFormattee,
                dateOffFormattee: this.dateDstOffFormattee
            }
        });
        dialogRef.afterClosed().subscribe(function (result) { });
    };
    ZoneComponent.prototype.ngOnInit = function () {
        this.filtrageZoneSaisie();
        this.retourInitial.emit(this.dateDST);
    };
    ZoneComponent.prototype.ngOnChanges = function (changes) {
        //this.traceChanges(changes);
        this.recuperationZone();
        this.majDateHeures();
        this.formattageDates();
        this.modification.emit(this.dateDST);
    };
    ZoneComponent.prototype.filtrageZoneSaisie = function () {
        var _this = this;
        this.filteredListeNomZones = this.zoneControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filter(value); }));
    };
    ZoneComponent.prototype.changeZone = function () {
        this.dateDST.nomZone = this.zoneControl.value;
        if (this.readOnly) {
            this.recuperationZone();
            this.modification.emit(this.dateDST);
            this.datesFormatteesANull();
        }
        else {
            this.recuperationZone();
            this.deformattageDates();
            this.locale2utc();
            this.modification.emit(this.dateDST);
            this.utc2locale();
            this.formattageDates();
        }
    };
    ZoneComponent.prototype.formattageDates = function () {
        this.dateLocaleFormattee = this.formattageDate(this.dateDST.dateLocale);
        this.dateDstOnFormattee = this.formattageDate(this.dateDST.dateDSTon);
        this.dateDstOffFormattee = this.formattageDate(this.dateDST.dateDSToff);
    };
    ZoneComponent.prototype.datesFormatteesANull = function () {
        this.dateLocaleFormattee = null;
        this.dateDstOnFormattee = null;
        this.dateDstOffFormattee = null;
    };
    ZoneComponent.prototype.deformattageDates = function () {
        this.dateDST.dateLocale = this.deformattageDate(this.dateLocaleFormattee);
        this.dateDST.dateDSTon = this.deformattageDate(this.dateDstOnFormattee);
        this.dateDST.dateDSToff = this.deformattageDate(this.dateDstOffFormattee);
    };
    ZoneComponent.prototype.traceChanges = function (changes) {
        for (var propName in changes) {
            var changedProp = changes[propName];
            var from = JSON.stringify(changedProp.previousValue);
            var to = JSON.stringify(changedProp.currentValue);
            console.log(propName + "\nCHANGED FROM:\n" + from + "\nTO:\n" + to);
        }
    };
    ZoneComponent.prototype.changementDetail = function () {
        this.detail = !this.detail;
    };
    ZoneComponent.prototype.memorisationZone = function () {
        if (this.defaut) {
            var date = new Date();
            date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
            document.cookie = "zone_Defaut_" + this.label_titre + "=" + this.dateDST.nomZone + "; expires=" + date.toUTCString() + "; path=/";
        }
        ;
    };
    ZoneComponent.prototype.recuperationZone = function () {
        // RECUPERATION NOM ZONE DEFAUT (si le cas)
        if ((this.dateDST.nomZone == undefined) && (this.defaut)) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + "zone_Defaut_" + this.label_titre + "=");
            if (parts.length == 2) {
                this.dateDST.nomZone = parts.pop().split(";").shift();
            }
            ;
        }
        ;
        // RECUPERATION ZONE SUR LA BASE DU NOM 
        this.zone = this.zones.get(this.dateDST.nomZone);
        this.zoneControl.setValue(this.dateDST.nomZone);
        if (this.zone != undefined) {
            if (this.zone.sens > 0) {
                this.dateDST.gmt = '+' + (this.zone.sens * this.zone.heures);
            }
            else {
                this.dateDST.gmt = '' + (this.zone.sens * this.zone.heures);
            }
            if (this.zone.minutes < 10) {
                this.dateDST.gmt = this.dateDST.gmt + ':0' + this.zone.minutes;
            }
            else {
                this.dateDST.gmt = this.dateDST.gmt + ':' + this.zone.minutes;
            }
            ;
            //if(this.dateDST.nomZone == 'Australia/Broken_Hill') {console.log(JSON.stringify(this.dateDST.gmt))};
            //if(this.dateDST.nomZone == 'Australia/Broken_Hill') {console.log(JSON.stringify(this.zone))};
        }
    };
    ZoneComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.listeNomZones.filter(function (nomZone) { return nomZone.toLowerCase().includes(filterValue); });
    };
    ZoneComponent.prototype.formattageDate = function (date) {
        if (date != undefined) {
            //yyyy-
            var dateFormattee = date.getFullYear() + "-";
            //yyyy-MM
            if ((date.getMonth() + 1) < 10) {
                dateFormattee = dateFormattee + "0" + (date.getMonth() + 1) + "-";
            }
            else {
                dateFormattee = dateFormattee + (date.getMonth() + 1) + "-";
            }
            ;
            //yyyy-MM-dd
            if (date.getDate() < 10) {
                dateFormattee = dateFormattee + "0" + date.getDate() + "T";
            }
            else {
                dateFormattee = dateFormattee + date.getDate() + "T";
            }
            ;
            //yyyy-MM-ddThh
            if (date.getHours() < 10) {
                dateFormattee = dateFormattee + "0" + date.getHours() + ":";
            }
            else {
                dateFormattee = dateFormattee + date.getHours() + ":";
            }
            ;
            //yyyy-MM-ddThh:mm
            if (date.getMinutes() < 10) {
                dateFormattee = dateFormattee + "0" + date.getMinutes();
            }
            else {
                dateFormattee = dateFormattee + date.getMinutes();
            }
            ;
        }
        return dateFormattee;
    };
    ZoneComponent.prototype.deformattageDate = function (dateFormattee) {
        if (dateFormattee != undefined) {
            var date = new Date(parseInt(dateFormattee.substr(0, 4), 10), parseInt(dateFormattee.substr(5, 2), 10) - 1, parseInt(dateFormattee.substr(8, 2), 10), parseInt(dateFormattee.substr(11, 2), 10), parseInt(dateFormattee.substr(14, 2), 10), parseInt("0", 10));
        }
        ;
        return date;
    };
    ZoneComponent.prototype.majDateHeures = function () {
        if (this.dateDST.nomZone != undefined) {
            if (this.dateDST.dateLocale == undefined) {
                // CAS DATE LOCALE ET DATE UTC NON DEFINIES => PAS D'ACTION
                if (this.dateDST.dateUTC == undefined) {
                }
                // CAS DATE UTC DEFINIE MAIS PAS DATE LOCALE => utc2locale()
                else {
                    this.utc2locale();
                }
            }
            else {
                // CAS DATE LOCALE DEFINIE MAIS PAS DATE UTC => locale2utc()
                if (this.dateDST.dateUTC == undefined) {
                    this.locale2utc();
                }
                // CAS DATE LOCALE ET DATE UTC DEFINIES => PAR DEFAUT DATE LOCALE MAITRE
                else {
                    this.locale2utc();
                }
            }
            ;
        }
        ;
    };
    ZoneComponent.prototype.utc2locale = function () {
        if ((this.zone != undefined) && (this.dateDST.dateUTC != undefined)) {
            // Application différence de fuseau horaire
            this.dateDST.dateLocaleSansDST = new Date(this.dateDST.dateUTC.getTime() + (3600000 * (this.zone.sens * this.zone.heures)) + (60000 * (this.zone.sens * this.zone.minutes)));
            // Base par défaut
            this.dateDST.dateLocale = this.dateDST.dateLocaleSansDST;
            // Application règles de DST
            if (this.zone.dst != null) {
                // CALCUL DE LA DATE ON
                this.dateDST.dateDSTon = this.dateon(this.dateDST.dateLocale, this.zone);
                this.dateDST.dateDSTon = this.heureDSTon(this.dateDST.dateDSTon, this.zone);
                // CALCUL DE LA DATE OFF
                this.dateDST.dateDSToff = this.dateoff(this.dateDST.dateLocale, this.zone);
                this.dateDST.dateDSToff = this.heureDSToff(this.dateDST.dateDSToff, this.zone);
                // CAS HEMISPHERE NORD
                if (this.dateDST.dateDSToff > this.dateDST.dateDSTon) {
                    if ((this.dateDST.dateUTC >= this.dateDST.dateDSTon) && (this.dateDST.dateUTC < this.dateDST.dateDSToff)) {
                        this.dateDST.dateLocale = new Date(this.dateDST.dateLocale.getTime() + 3600000);
                        this.dateDST.dst = true;
                    }
                    else {
                        this.dateDST.dst = false;
                    }
                }
                // CAS HEMISPHERE SUD
                if (this.dateDST.dateDSToff < this.dateDST.dateDSTon) {
                    if ((this.dateDST.dateUTC >= this.dateDST.dateDSTon) || (this.dateDST.dateUTC < this.dateDST.dateDSToff)) {
                        this.dateDST.dateLocale = new Date(this.dateDST.dateLocale.getTime() + 3600000);
                        this.dateDST.dst = true;
                    }
                    else {
                        this.dateDST.dst = false;
                    }
                }
            }
        }
        else {
            // Cas zone non définie ou heure utc non définie
            this.dateDST.dateLocale = this.dateDST.dateUTC;
        }
        ;
    };
    ZoneComponent.prototype.locale2utc = function () {
        if ((this.dateDST.nomZone != undefined) && (this.dateDST.dateLocale != undefined)) {
            // Application différence de fuseau horaire
            this.dateDST.dateUTC = new Date(this.dateDST.dateLocale.getTime() - (3600000 * (this.zone.sens * this.zone.heures)) - (60000 * (this.zone.sens * this.zone.minutes)));
            // Application règles de DST
            if (this.zone.dst != null) {
                // CALCUL DE LA DATE ON
                this.dateDST.dateDSTon = this.dateon(this.dateDST.dateLocale, this.zone);
                this.dateDST.dateDSTon = this.heureDSTon(this.dateDST.dateDSTon, this.zone);
                // CALCUL DE LA DATE OFF
                this.dateDST.dateDSToff = this.dateoff(this.dateDST.dateLocale, this.zone);
                this.dateDST.dateDSToff = this.heureDSToff(this.dateDST.dateDSToff, this.zone);
                // CAS HEMISPHERE NORD
                if (this.dateDST.dateDSToff > this.dateDST.dateDSTon) {
                    if ((this.dateDST.dateLocale >= this.dateDST.dateDSTon) && (this.dateDST.dateLocale < this.dateDST.dateDSToff)) {
                        this.dateDST.dateUTC = new Date(this.dateDST.dateUTC.getTime() - 3600000);
                        this.dateDST.dateLocaleSansDST = new Date(this.dateDST.dateLocale.getTime() - 3600000);
                        this.dateDST.dst = true;
                    }
                    else {
                        this.dateDST.dst = false;
                        this.dateDST.dateLocaleSansDST = this.dateDST.dateLocale;
                    }
                }
                // CAS HEMISPHERE SUD
                if (this.dateDST.dateDSToff < this.dateDST.dateDSTon) {
                    if ((this.dateDST.dateLocale < this.dateDST.dateDSTon) && (this.dateDST.dateLocale >= this.dateDST.dateDSToff)) {
                        this.dateDST.dst = false;
                        this.dateDST.dateLocaleSansDST = this.dateDST.dateLocale;
                    }
                    else {
                        this.dateDST.dateUTC = new Date(this.dateDST.dateUTC.getTime() - 3600000);
                        this.dateDST.dateLocaleSansDST = new Date(this.dateDST.dateLocale.getTime() - 3600000);
                        this.dateDST.dst = true;
                    }
                }
            }
        }
        else {
            // Cas zone non définie ou heure locale
            this.dateDST.dateUTC = this.dateDST.dateLocale;
            this.dateDST.dateLocaleSansDST = this.dateDST.dateLocale;
        }
        ;
    };
    ZoneComponent.prototype.dateon = function (date, zone) {
        var dateTravail;
        if (zone.dst.operateur_on == "=") {
            dateTravail = new Date(date.getFullYear(), zone.dst.mois_on - 1, zone.dst.decile_on, 10, 0, 0);
            return dateTravail;
        }
        ;
        if (zone.dst.operateur_on == ">") {
            dateTravail = new Date(date.getFullYear(), zone.dst.mois_on - 1, zone.dst.decile_on, 10, 0, 0);
            while (dateTravail.getDay() != zone.dst.jour_on) {
                dateTravail = new Date((dateTravail.getTime()) + 86400000);
            }
            ;
            return dateTravail;
        }
        ;
        if (zone.dst.operateur_on == "last") {
            dateTravail = new Date(date.getFullYear(), zone.dst.mois_on, 1, 10, 0, 0);
            dateTravail = new Date((dateTravail.getTime()) - 86400000);
            while (dateTravail.getDay() != zone.dst.jour_on) {
                dateTravail = new Date((dateTravail.getTime()) - 86400000);
            }
            ;
            return dateTravail;
        }
        ;
    };
    ZoneComponent.prototype.dateoff = function (date, zone) {
        var dateTravail;
        if (zone.dst.operateur_off == "=") {
            dateTravail = new Date(date.getFullYear(), zone.dst.mois_off - 1, zone.dst.decile_off, 10, 0, 0);
            return dateTravail;
        }
        ;
        if (zone.dst.operateur_off == ">") {
            dateTravail = new Date(date.getFullYear(), zone.dst.mois_off - 1, zone.dst.decile_off, 10, 0, 0);
            while (dateTravail.getDay() != zone.dst.jour_off) {
                dateTravail = new Date((dateTravail.getTime()) + 86400000);
            }
            ;
            return dateTravail;
        }
        ;
        if (zone.dst.operateur_off == "last") {
            dateTravail = new Date(date.getFullYear(), zone.dst.mois_off, 1, 10, 0, 0);
            dateTravail = new Date((dateTravail.getTime()) - 86400000);
            while (dateTravail.getDay() != zone.dst.jour_off) {
                dateTravail = new Date((dateTravail.getTime()) - 86400000);
            }
            ;
            return dateTravail;
        }
        ;
    };
    ZoneComponent.prototype.heureDSTon = function (date, zone) {
        var dateTravail = date;
        // basé sur l'heure UTC
        if (zone.dst.methode_on == "UTC") {
            dateTravail.setHours(((zone.dst.heures_on + (zone.sens * zone.heures)) + (zone.sens * zone.minutes)));
            return dateTravail;
        }
        ;
        // basé sur l'heure horloge
        if (zone.dst.methode_on == "Wall") {
            dateTravail.setHours(zone.dst.heures_on);
            return dateTravail;
        }
        ;
        // basé sur l'heure horloge sans DST
        if (zone.dst.methode_on == "Standard") {
            dateTravail.setHours(zone.dst.heures_on);
            return dateTravail;
        }
        ;
    };
    ZoneComponent.prototype.heureDSToff = function (date, zone) {
        var dateTravail = date;
        // basé sur l'heure UTC
        if (zone.dst.methode_off == "UTC") {
            dateTravail.setHours(((zone.dst.heures_off + (zone.sens * zone.heures)) + (zone.sens * zone.minutes)) + 1);
            return dateTravail;
        }
        ;
        // basé sur l'heure horloge
        if (zone.dst.methode_off == "Wall") {
            dateTravail.setHours(zone.dst.heures_off);
            return dateTravail;
        }
        ;
        // basé sur l'heure horloge sans DST
        if (zone.dst.methode_off == "Standard") {
            dateTravail.setHours(zone.dst.heures_off + 1);
            return dateTravail;
        }
        ;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ZoneComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ZoneComponent.prototype, "defaut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ZoneComponent.prototype, "readOnly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ZoneComponent.prototype, "label_titre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ZoneComponent.prototype, "label_heure", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ZoneComponent.prototype, "label_endroit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _zonedstdata__WEBPACK_IMPORTED_MODULE_5__["DateDST"])
    ], ZoneComponent.prototype, "dateDST", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZoneComponent.prototype, "retourInitial", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZoneComponent.prototype, "modification", void 0);
    ZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zone',
            template: __webpack_require__(/*! ./zone.component.html */ "./src/app/zone/zone.component.html"),
            styles: [__webpack_require__(/*! ./zone.component.css */ "./src/app/zone/zone.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ZoneComponent);
    return ZoneComponent;
}());

var PopUpDetailZone = /** @class */ (function () {
    function PopUpDetailZone(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['gauche', 'droite'];
        this.dataSource = [];
        this.annees = ['2018', '2019', '2020', '2021'];
        this.anneeSelectionnee = '2019';
        if ((this.data.zone != undefined) && (this.data.date != undefined)) {
            // NOM ZONE
            this.ligne = {
                gauche: 'Nom',
                droite: this.data.zone.nom
            };
            this.dataSource.push(this.ligne);
            // Date
            this.ligne = {
                gauche: 'Date',
                droite: this.data.dateLocaleFormattee.replace('-', '/').replace('-', '/').replace('T', ' ')
            };
            this.dataSource.push(this.ligne);
            // GMT
            this.ligne = {
                gauche: 'GMT',
                droite: this.data.date.gmt
            };
            this.dataSource.push(this.ligne);
            // SI DST DEFINI
            if (this.data.zone.dst != undefined) {
                // Nom DST
                this.ligne = {
                    gauche: 'DST - Nom',
                    droite: this.data.zone.dst.nom
                };
                this.dataSource.push(this.ligne);
                if ((this.data.dateOnFormattee != undefined) && (this.data.dateOffFormattee != undefined)) {
                    // Date DST On
                    this.ligne = {
                        gauche: 'DST - Début',
                        droite: this.data.dateOnFormattee.replace('-', '/').replace('-', '/').replace('T', ' ')
                    };
                    this.dataSource.push(this.ligne);
                    // Date DST Off
                    this.ligne = {
                        gauche: 'DST - Fin',
                        droite: this.data.dateOffFormattee.replace('-', '/').replace('-', '/').replace('T', ' ')
                    };
                    this.dataSource.push(this.ligne);
                    // DST Horaires
                    var horaire;
                    if (this.data.date.dst == true) {
                        horaire = 'Eté';
                    }
                    else {
                        horaire = 'Hiver';
                    }
                    this.ligne = {
                        gauche: 'DST - Horaires',
                        droite: horaire
                    };
                    this.dataSource.push(this.ligne);
                }
                ;
            }
            else {
                this.ligne = {
                    gauche: 'DST',
                    droite: 'Pas appliqué'
                };
                this.dataSource.push(this.ligne);
            }
        }
    }
    PopUpDetailZone.prototype.nouvelleAnnee = function () {
        //alert(this.anneeSelectionnee);
    };
    PopUpDetailZone = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zone-detail',
            template: __webpack_require__(/*! ./zone.component.detail.html */ "./src/app/zone/zone.component.detail.html"),
            styles: [__webpack_require__(/*! ./zone.component.detail.css */ "./src/app/zone/zone.component.detail.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], PopUpDetailZone);
    return PopUpDetailZone;
}());



/***/ }),

/***/ "./src/app/zonedstdata.ts":
/*!********************************!*\
  !*** ./src/app/zonedstdata.ts ***!
  \********************************/
/*! exports provided: ZoneDSTList, DST, ZoneDST, DateDST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneDSTList", function() { return ZoneDSTList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DST", function() { return DST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneDST", function() { return ZoneDST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateDST", function() { return DateDST; });
var ZoneDSTList = /** @class */ (function () {
    function ZoneDSTList() {
    }
    return ZoneDSTList;
}());

var DST = /** @class */ (function () {
    function DST(aId, aNom, aNom_regle, aMethode_on, aMethode_off, aDebut_on, aDebut_off, aFin_on, aFin_off, aOperateur_on, aOperateur_off, aDecile_on, aDecile_off, aJour_on, aMois_off, aMois_on, aJour_off, aHeures_on, ahHures_off) {
        this.id = aId;
        this.nom = aNom;
        this.nom_regle = aNom_regle;
        this.methode_on = aMethode_on;
        this.methode_off = aMethode_off;
        this.debut_on = aDebut_on;
        this.debut_off = aDebut_off;
        this.fin_on = aFin_on;
        this.fin_off = aFin_off;
        this.operateur_on = aOperateur_on;
        this.operateur_off = aOperateur_off;
        this.decile_on = aDecile_on;
        this.decile_off = aDecile_off;
        this.jour_on = aJour_on;
        this.mois_off = aMois_off;
        this.mois_on = aMois_on;
        this.jour_off = aJour_off;
        this.heures_on = aHeures_on;
        this.heures_off = ahHures_off;
    }
    ;
    return DST;
}());

var ZoneDST = /** @class */ (function () {
    function ZoneDST(aId, aNom, aDst, aId_iso_3166_2, aIndicatif_tel, aSens, aMinutes, aHeures) {
        this.id = aId;
        this.nom = aNom;
        this.dst = aDst;
        this.id_iso_3166_2 = aId_iso_3166_2;
        this.indicatif_tel = aIndicatif_tel;
        this.sens = aSens;
        this.minutes = aMinutes;
        this.heures = aHeures;
    }
    ;
    return ZoneDST;
}());

var DateDST = /** @class */ (function () {
    function DateDST(aNomZone, aDateLocale, aDateLocaleSansDST, aDateUTC, aDst, aGmt, aDateDSTon, aDateDSToff) {
        this.nomZone = aNomZone;
        this.dateLocale = aDateLocale;
        this.dateLocaleSansDST = aDateLocaleSansDST;
        this.dateUTC = aDateUTC;
        this.dst = aDst;
        this.gmt = aGmt;
        this.dateDSTon = aDateDSTon;
        this.dateDSToff = aDateDSToff;
    }
    ;
    return DateDST;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Public\JAVA-SCRIPT\ANGULAR\ANGULAR7\DST-ANGULAR7-MATERIAL\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map