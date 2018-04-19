webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-root\">\n  <header>\n    <nav role=\"navigation\">\n      <div class=\"nav-wrapper container\">\n          <a id=\"logo-container\" href=\"#\" class=\"brand-logo\">Real estatium</a>\n          <ul class=\"right\">\n            <li><a href=\"#\"><i class=\"material-icons\">phone</i></a></li>\n          </ul>\n\n          <ul id=\"nav-mobile\" class=\"side-nav\">\n              <li><a href=\"#\"><img width=\"240\" src=\"https://memegenerator.net/img/instances/500x/65276035/not-sure-if-its-a-bug-or-a-feature.jpg\"></a></li>\n          </ul>\n          <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      </div>\n    </nav>\n  </header>\n  <main class=\"grey lighten-5\">\n    <app-home id=\"home-page\"></app-home>\n  </main>\n  <footer class=\"page-footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col l6 s12\">\n                <h5 class=\"white-text\">Real estatium info</h5>\n                <p class=\"grey-text text-lighten-4\">Some lorem ipsum dolor sit amet to add dummy content</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"footer-copyright\">\n        <div class=\"container\">\n            Made by <a class=\"orange-text text-lighten-3\" href=\"https://github.com/yannbf/frontend-code-challenge\">Yann Braga</a>\n        </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, ".app-root {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh; }\n\nmain {\n  background: #222222;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\n\nnav {\n  background: #222222; }\n\nfooter {\n  background: #222222; }\n\n@media only screen and (max-width: 992px) {\n  nav {\n    position: fixed;\n    z-index: 9999; }\n    nav .brand-logo {\n      font-size: 1.7rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Real Estatium';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages__ = __webpack_require__("../../../../../src/app/pages/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_reducers__ = __webpack_require__("../../../../../src/app/state/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__state_effects__ = __webpack_require__("../../../../../src/app/state/effects/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_mock__ = __webpack_require__("../../../../../src/app/services/mock/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__pages__["a" /* HomeComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forRoot({ estates: __WEBPACK_IMPORTED_MODULE_8__state_reducers__["a" /* advertisementReducer */] }),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_9__state_effects__["a" /* AdvertisementEffects */]]),
                __WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].production ? [] : __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument(),
                __WEBPACK_IMPORTED_MODULE_13__components_components_module__["a" /* ComponentsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services__["a" /* AdvertisementService */], __WEBPACK_IMPORTED_MODULE_11__services_mock__["a" /* AdvertisementServiceMock */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/advertisement-list-item/advertisement-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"advertisement-item\">\n  <div class=\"card hoverable medium large\">\n      <div *ngIf=\"advertisement.advertisementAssets; let assets\"\n           class=\"card-image\">\n           <a class=\"waves-effect waves-light white btn grey-text\"\n              *ngIf=\"!advertisement.advertisementPrice?.sellPrice\">Mieten</a>\n           <a class=\"waves-effect waves-light white btn grey-text\"\n              *ngIf=\"advertisement.advertisementPrice?.sellPrice\">Kaufen</a>\n\n           <img class=\"materialboxed\" [src]=\"assets[0].advertisementThumbnails.inventory_m?.url\">\n      </div>\n      <div class=\"card-content\" *ngIf=\"advertisement.realestateSummary; let summary\">\n        <span class=\"title activator grey-text text-darken-4\">{{advertisement.title}}<i class=\"material-icons right\">more_vert</i></span>\n        <p class=\"address\">\n          {{summary.address.postalCode}} {{summary.address.postalCode}} / {{summary.address.city}}\n        </p>\n        <div class=\"row estate-info\">\n            <div class=\"col s4\">\n              <strong *ngIf=\"advertisement.advertisementPrice?.baseRent; let price\">{{ price | currency:'EUR'}}</strong>\n              <strong *ngIf=\"!advertisement.advertisementPrice?.baseRent; let price\">{{ sellPrice | currency:'EUR'}}</strong>\n            </div>\n            <div>\n              <span class=\"col s4\" style=\"text-align: right;\">\n                {{summary.numberOfRooms}} Zimmer\n              </span>\n              <span class=\"col s4\">\n                ab {{summary.space.toFixed(2)}} m²\n              </span>\n            </div>\n        </div>\n      </div>\n      <div class=\"card-reveal\">\n        <span class=\"card-title grey-text text-darken-4\">{{advertisement.title}}<i class=\"material-icons right\">close</i></span>\n        <div *ngIf=\"advertisement.realestateSummary; let summary\">\n            <p><i class=\"material-icons left\">view_carousel</i> Number of rooms: {{summary.numberOfRooms}}</p>\n            <p><i class=\"material-icons left\">select_all</i> Space: {{summary.space.toFixed(2)}} m²</p>\n            <div *ngIf=\"summary.address; let address\">\n              <p><i class=\"material-icons left\">location_on</i> Address: {{address.fullAddress || 'Not specified'}}</p>\n            </div>\n        </div>\n        <p *ngIf=\"advertisement.advertisementPrice?.baseRent; let price\">\n          <i class=\"material-icons left\">euro_symbol</i>\n          Base rent: <strong>{{(price | currency:'EUR') || 'Not specified'}}</strong>\n        </p>\n        <p *ngIf=\"!advertisement.advertisementPrice?.baseRent; let price\">\n          <i class=\"material-icons left\">euro_symbol</i>\n          Sell price: <strong>{{(sellPrice | currency:'EUR') || 'Not specified'}}</strong>\n        </p>\n      </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/advertisement-list-item/advertisement-list-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-image {\n  position: relative; }\n  .card-image a {\n    left: 1.5rem;\n    padding: 0 0.8rem;\n    position: absolute;\n    text-transform: initial;\n    top: 1.5rem; }\n\n.card .card-content {\n  padding-top: 3rem; }\n  .card .card-content p {\n    color: #aaa; }\n  .card .card-content .address {\n    margin-bottom: 3rem;\n    margin-left: 0.2rem;\n    margin-top: 1rem; }\n  .card .card-content .title {\n    font-size: 18px;\n    font-weight: 400; }\n    .card .card-content .title i {\n      cursor: pointer; }\n  .card .card-content .estate-info {\n    font-size: 16px; }\n  @media only screen and (max-width: 968px) and (min-width: 600px) {\n    .card .card-content .estate-info {\n      font-size: 14px; }\n    .card .card-content .title {\n      font-size: 16px; } }\n\n.card-reveal p {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .card-reveal p i {\n    color: #feb902; }\n\n.card.medium .card-image + .card-content {\n  max-height: 100%;\n  padding: 3rem; }\n\n@media only screen and (max-width: 968px) and (min-width: 600px) {\n  .card.large {\n    height: 400px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/advertisement-list-item/advertisement-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisementListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvertisementListItemComponent = (function () {
    function AdvertisementListItemComponent() {
    }
    AdvertisementListItemComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], AdvertisementListItemComponent.prototype, "advertisement", void 0);
    AdvertisementListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-advertisement-list-item',
            template: __webpack_require__("../../../../../src/app/components/advertisement-list-item/advertisement-list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/advertisement-list-item/advertisement-list-item.component.scss")],
        })
    ], AdvertisementListItemComponent);
    return AdvertisementListItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/advertisement-list/advertisement-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ng-container *ngIf=\"error; else startLoading\">\n  <div class=\"empty-state\">\n    <p>There was an error when trying to fetch the advertisements.</p>\n    <p>Please try refreshing the page.</p>\n    <img src=\"assets/img/ErrorIcon.svg\">\n  </div>\n</ng-container>\n\n<ng-container #startLoading\n    *ngIf=\"isLoading; else checkAdvertisements\">\n  <section class=\"row\">\n      <div class=\"col s12 m6 l4\" *ngFor=\"let shimmer of [1,2,3,4,5,6]\">\n        <app-advertisement-placeholder></app-advertisement-placeholder>\n      </div>\n  </section>\n</ng-container>\n\n<ng-container #checkAdvertisements\n    *ngIf=\"!isLoading && !error && advertisements?.length <= 0; else showAdvertisements\">\n  <div class=\"empty-state\">\n    <p>Oops! there are no advertisements to show right now :(</p>\n    <p>Please try some other time!</p>\n    <img src=\"assets/img/EmptyIcon.svg\">\n  </div>\n</ng-container>\n\n<ng-template #showAdvertisements>\n  <div class=\"row\">\n    <div class=\"col s12 m6 l4\" *ngFor=\"let advertisement of advertisements\">\n      <app-advertisement-list-item [advertisement]=\"advertisement\"></app-advertisement-list-item>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/advertisement-list/advertisement-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".empty-state {\n  color: #aaa;\n  text-align: center; }\n  .empty-state img {\n    display: block;\n    height: 10rem;\n    margin: 2rem auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/advertisement-list/advertisement-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisementListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvertisementListComponent = (function () {
    function AdvertisementListComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], AdvertisementListComponent.prototype, "advertisements", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], AdvertisementListComponent.prototype, "isLoading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], AdvertisementListComponent.prototype, "error", void 0);
    AdvertisementListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-advertisement-list',
            template: __webpack_require__("../../../../../src/app/components/advertisement-list/advertisement-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/advertisement-list/advertisement-list.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
        })
    ], AdvertisementListComponent);
    return AdvertisementListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/advertisement-placeholder/advertisement-placeholder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card medium\">\n  <div class=\"card-image waves-effect waves-block waves-light\">\n    <app-shimmer class=\"img loading\"></app-shimmer>\n  </div>\n  <div class=\"card-content\">\n    <app-shimmer class=\"lg loading\"></app-shimmer>\n    <app-shimmer class=\"md loading\"></app-shimmer>\n    <div class=\"row\">\n      <div class=\"col s4\">\n        <app-shimmer class=\"lg loading\"></app-shimmer>\n      </div>\n      <div class=\"col s4\">\n          <app-shimmer class=\"lg loading\"></app-shimmer>\n      </div>\n      <div class=\"col s4\">\n          <app-shimmer class=\"lg loading\"></app-shimmer>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/advertisement-placeholder/advertisement-placeholder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisementPlaceholderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvertisementPlaceholderComponent = (function () {
    function AdvertisementPlaceholderComponent() {
    }
    AdvertisementPlaceholderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-advertisement-placeholder',
            template: __webpack_require__("../../../../../src/app/components/advertisement-placeholder/advertisement-placeholder.component.html"),
            styles: [
                "\n    .row{\n      margin-top: 2rem;\n    }\n  ",
            ],
        }),
        __metadata("design:paramtypes", [])
    ], AdvertisementPlaceholderComponent);
    return AdvertisementPlaceholderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/app/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__index__["a" /* AdvertisementListComponent */],
    __WEBPACK_IMPORTED_MODULE_2__index__["b" /* AdvertisementListItemComponent */],
    __WEBPACK_IMPORTED_MODULE_2__index__["c" /* AdvertisementPlaceholderComponent */],
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            declarations: COMPONENTS.slice(),
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__index__["d" /* ShimmerComponentModule */]],
            exports: COMPONENTS.concat([__WEBPACK_IMPORTED_MODULE_2__index__["d" /* ShimmerComponentModule */]]),
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__advertisement_list_advertisement_list_component__ = __webpack_require__("../../../../../src/app/components/advertisement-list/advertisement-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__advertisement_list_advertisement_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__advertisement_list_item_advertisement_list_item_component__ = __webpack_require__("../../../../../src/app/components/advertisement-list-item/advertisement-list-item.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__advertisement_list_item_advertisement_list_item_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advertisement_placeholder_advertisement_placeholder_component__ = __webpack_require__("../../../../../src/app/components/advertisement-placeholder/advertisement-placeholder.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__advertisement_placeholder_advertisement_placeholder_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shimmer_shimmer_component_module__ = __webpack_require__("../../../../../src/app/components/shimmer/shimmer.component.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__shimmer_shimmer_component_module__["a"]; });






/***/ }),

/***/ "../../../../../src/app/components/shimmer/shimmer.component.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShimmerComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shimmer_component__ = __webpack_require__("../../../../../src/app/components/shimmer/shimmer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shimmer_service__ = __webpack_require__("../../../../../src/app/components/shimmer/shimmer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShimmerComponentModule = (function () {
    function ShimmerComponentModule() {
    }
    ShimmerComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__shimmer_component__["a" /* ShimmerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__shimmer_component__["a" /* ShimmerComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shimmer_service__["a" /* ShimmerComponentService */]],
        })
    ], ShimmerComponentModule);
    return ShimmerComponentModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/shimmer/shimmer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes shimmer {\n  from {\n    background-position: -500px 0; }\n  to {\n    background-position: 500px 0; } }\n\n@keyframes shimmer {\n  from {\n    background-position: -500px 0; }\n  to {\n    background-position: 500px 0; } }\n\n:host {\n  display: inherit; }\n  :host.loading::after {\n    -webkit-animation: shimmer 1.3s infinite ease-out forwards;\n            animation: shimmer 1.3s infinite ease-out forwards;\n    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n    background-size: 800px 104px;\n    border-radius: 6px;\n    content: '\\A0';\n    display: inline-block;\n    margin-bottom: 5px;\n    width: 100%; }\n  :host.loading.paragraph::after, :host.loading.paragraph::before {\n    width: 100%; }\n  :host.loading.paragraph::before {\n    -webkit-animation: pulse 2s infinite ease-in-out;\n            animation: pulse 2s infinite ease-in-out;\n    border-radius: 6px;\n    content: '\\A0';\n    display: inline-block;\n    margin-bottom: 5px;\n    width: 100%; }\n  :host.loading.xl::after {\n    width: 100%; }\n  :host.loading.lg::after {\n    width: 90%; }\n  :host.loading.md::after {\n    width: 50%; }\n  :host.loading.sm::after {\n    width: 25%; }\n  :host.img.loading::after {\n    border-radius: 0;\n    height: 20rem;\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shimmer/shimmer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShimmerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shimmer_service__ = __webpack_require__("../../../../../src/app/components/shimmer/shimmer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShimmerComponent = (function () {
    function ShimmerComponent(shimmer) {
        var _this = this;
        this.shimmer = shimmer;
        this.isLoading = true;
        this.data = {};
        this.isLoadingSubscription = this.shimmer.isLoading.subscribe(function (data) {
            return _this.updateLoading(data);
        });
    }
    ShimmerComponent.prototype.ngOnDestroy = function () {
        this.isLoadingSubscription.unsubscribe();
    };
    ShimmerComponent.prototype.updateLoading = function (data) {
        if (!data) {
            return;
        }
        this.setData(data).process();
    };
    ShimmerComponent.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    ShimmerComponent.prototype.process = function () {
        this.setLoading();
    };
    ShimmerComponent.prototype.setLoading = function () {
        this.isLoading = this.data['isLoading'];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostBinding */])('class.loading'),
        __metadata("design:type", Object)
    ], ShimmerComponent.prototype, "isLoading", void 0);
    ShimmerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-shimmer',
            template: "<ng-content *ngIf=\"!isLoading\"></ng-content>",
            styles: [__webpack_require__("../../../../../src/app/components/shimmer/shimmer.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shimmer_service__["a" /* ShimmerComponentService */]])
    ], ShimmerComponent);
    return ShimmerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shimmer/shimmer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShimmerComponentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");

var ShimmerComponentService = (function () {
    function ShimmerComponentService() {
        this.isLoading$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.isLoading = this.isLoading$.asObservable();
    }
    ShimmerComponentService.prototype.setLoading = function (isLoading) {
        this.isLoading$.next({ isLoading: isLoading });
    };
    return ShimmerComponentService;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n    <div class=\"section no-pad-bot\" id=\"index-banner\">\n        <div class=\"container\">\n            <br><br>\n            <h1 class=\"header center\"><img src=\"assets/img/KeyLogo.svg\"></h1>\n            <div class=\"row center\">\n                <h5 class=\"header col s12 light\">The future of real estate is already here.</h5>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"section\">\n            <app-advertisement-list\n                [advertisements]=\"advertisements$ | async\"\n                [isLoading]=\"isLoading$ | async\"\n                [error]=\"error$ | async\">\n            </app-advertisement-list>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 768px) {\n  .logo {\n    width: 50%; } }\n\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 85%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_actions__ = __webpack_require__("../../../../../src/app/state/actions/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(store) {
        this.store = store;
        this.fetchStateData();
    }
    HomeComponent.prototype.fetchStateData = function () {
        this.advertisements$ = this.store.select(function (state) { return state.estates.advertisements; });
        this.isLoading$ = this.store.select(function (state) { return state.estates.isLoading; });
        this.error$ = this.store.select(function (state) { return state.estates.error; });
    };
    HomeComponent.prototype.ngOnInit = function () {
        $('.button-collapse').sideNav();
        this.getAdvertisements();
    };
    HomeComponent.prototype.getAdvertisements = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__state_actions__["b" /* LoadAdvertisementsAction */]());
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/services/advertisement.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvertisementService = (function () {
    function AdvertisementService(http) {
        this.http = http;
        this.baseUrl = 'https://api.mcmakler.de/v1';
    }
    AdvertisementService.prototype.getAdvertisements = function () {
        return this.http
            .get(this.baseUrl + "/advertisements")
            .map(function (res) { return res.data.splice(0, 10); });
    };
    AdvertisementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AdvertisementService);
    return AdvertisementService;
}());



/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__advertisement_service__ = __webpack_require__("../../../../../src/app/services/advertisement.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__advertisement_service__["a"]; });



/***/ }),

/***/ "../../../../../src/app/services/mock/advertisement.service.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisementServiceMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");


var AdvertisementServiceMock = (function () {
    function AdvertisementServiceMock() {
    }
    AdvertisementServiceMock.prototype.getAdvertisements = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(AdvertisementServiceMock.ADVERTISEMENTS.data);
    };
    // tslint:disable-next-line:member-ordering
    AdvertisementServiceMock.ADVERTISEMENTS = {
        data: [
            {
                advertisementPrice: {
                    baseRent: 305,
                },
                purpose: 0,
                title: 'Wegen Sanierungsarbeiten 2 Monate mietfrei! - Etagenwohnung mit Balkon',
                realestateSummary: {
                    address: {
                        street: 'Ursulastraße',
                        number: '33',
                        postalCode: '47226',
                        city: 'Duisburg',
                        fullAddress: 'Ursulastraße 33, 47226 Duisburg',
                        location: {
                            type: 'Point',
                            coordinates: [51.40515, 6.72894],
                        },
                    },
                    numberOfRooms: 3,
                    space: 56.889999999999986,
                },
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '59887491c62697f9ef3b3da0',
                            },
                            createdAt: {
                                sec: 1502114960,
                                usec: 248000,
                            },
                            updatedAt: {
                                sec: 1512291975,
                                usec: 734000,
                            },
                            fileId: 'thumbnail.59887490267115.54069533.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59887490267115.54069533.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 22233,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '59887491c62697f9ef3b3da4',
                            },
                            createdAt: {
                                sec: 1502114961,
                                usec: 258000,
                            },
                            updatedAt: {
                                sec: 1512291975,
                                usec: 813000,
                            },
                            fileId: 'thumbnail.598874911fc947.78385726.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.598874911fc947.78385726.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 150,
                                size: 5250,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '591ecfe4c6269715d84b0634',
                },
                hasFurniture: false,
                advertisementPrice: {
                    baseRent: 310,
                },
                userWishes: {
                    visibleAddress: true,
                },
                purpose: 0,
                title: 'Wegen Sanierungsarbeiten 2 Monate mietfrei! - Etagenwohnung mit Balkon',
                realestateSummary: {
                    address: {
                        street: 'Ursulastraße',
                        number: '37',
                        postalCode: '47226',
                        city: 'Duisburg',
                        fullAddress: 'Ursulastraße 37, 47226 Duisburg',
                        location: {
                            type: 'Point',
                            coordinates: [51.4052146, 6.7294402],
                        },
                    },
                    numberOfRooms: 3,
                    space: 57.48,
                },
                additionalId: 141188,
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '591ed0a0c6269740f56d4388',
                            },
                            createdAt: {
                                sec: 1495191711,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1512037296,
                                usec: 674000,
                            },
                            fileId: 'thumbnail.591ed09f980221.52363510.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.591ed09f980221.52363510.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 17979,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '591ed0a0c6269740f56d438c',
                            },
                            createdAt: {
                                sec: 1495191712,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1512037296,
                                usec: 760000,
                            },
                            fileId: 'thumbnail.591ed0a0960cf5.80327729.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.591ed0a0960cf5.80327729.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 150,
                                size: 3893,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '592be502c10d1dd147267893',
                },
                hasFurniture: false,
                advertisementPrice: {
                    sellPrice: 69000,
                },
                userWishes: {
                    visibleAddress: false,
                },
                purpose: 1,
                title: 'Schlagen Sie zu! Geräumige Wohnung in grüner Lage',
                additionalId: 141233,
                realestateSummary: {
                    address: {
                        street: 'Karl-Marx-Straße',
                        number: '26',
                        postalCode: '01445',
                        city: 'Radebeul',
                        location: {
                            type: 'Point',
                            coordinates: [51.1047, 13.6884],
                        },
                    },
                    numberOfRooms: 2,
                    space: 50,
                },
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '59412178c10d1d58090c70a2',
                            },
                            createdAt: {
                                sec: 1497440631,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1497440632,
                                usec: 0,
                            },
                            fileId: 'thumbnail.59412177b211e6.13622439.jpg',
                            filename: 'thumbnail_of_asset59412175686f7.jpg.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59412177b211e6.13622439.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 42106,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '59412178c10d1d58090c70a6',
                            },
                            createdAt: {
                                sec: 1497440632,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1497440632,
                                usec: 0,
                            },
                            fileId: 'thumbnail.594121784b3a95.89734520.jpg',
                            filename: 'thumbnail_of_asset59412175686f7.jpg.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.594121784b3a95.89734520.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 150,
                                size: 8111,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '592be610c10d1dd26167dab6',
                },
                hasFurniture: false,
                advertisementPrice: {
                    sellPrice: 579000,
                },
                userWishes: {
                    visibleAddress: false,
                },
                purpose: 1,
                title: 'Geräumiges Mehrfamilienhaus zum Wohlfühlen!',
                additionalId: 141236,
                realestateSummary: {
                    address: {
                        street: 'Meßflur',
                        number: '65',
                        postalCode: '54427',
                        city: 'Kell am See',
                        location: {
                            type: 'Point',
                            coordinates: [49.63803, 6.82317],
                        },
                    },
                    numberOfRooms: 12,
                    space: 435,
                },
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '595b80fbc10d1d39410ab143',
                            },
                            createdAt: {
                                sec: 1499169018,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1499169019,
                                usec: 0,
                            },
                            fileId: 'thumbnail.595b80fa85dbf3.31541532.jpg',
                            filename: 'thumbnail_of_asset595b80f7b08e5.jpg.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.595b80fa85dbf3.31541532.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 34873,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '595b80fbc10d1d39410ab147',
                            },
                            createdAt: {
                                sec: 1499169019,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1499169019,
                                usec: 0,
                            },
                            fileId: 'thumbnail.595b80fb293fd7.24503370.jpg',
                            filename: 'thumbnail_of_asset595b80f7b08e5.jpg.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.595b80fb293fd7.24503370.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 133,
                                size: 6357,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '592be63ac10d1dd2737d7946',
                },
                hasFurniture: false,
                advertisementPrice: {
                    sellPrice: 125000,
                },
                userWishes: {
                    visibleAddress: false,
                },
                purpose: 1,
                title: 'Zögern Sie nicht! Modernisierte Erdgeschosswohnung mit Terrasse und Balkon!',
                additionalId: 141237,
                realestateSummary: {
                    address: {
                        street: 'Franz-Mehring-Straße',
                        number: '11',
                        postalCode: '01237',
                        city: 'Dresden',
                        location: {
                            type: 'Point',
                            coordinates: [51.01704, 13.81044],
                        },
                    },
                    numberOfRooms: 2,
                    space: 54,
                },
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '595b7922c10d1d320b47f5d8',
                            },
                            createdAt: {
                                sec: 1499167009,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1499167010,
                                usec: 0,
                            },
                            fileId: 'thumbnail.595b7921ca2428.14890932.jpg',
                            filename: 'thumbnail_of_asset595b79208ea3f.jpg.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.595b7921ca2428.14890932.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 37272,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '595b7922c10d1d320b47f5dc',
                            },
                            createdAt: {
                                sec: 1499167010,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1499167010,
                                usec: 0,
                            },
                            fileId: 'thumbnail.595b7922739b52.44814031.jpg',
                            filename: 'thumbnail_of_asset595b79208ea3f.jpg.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.595b7922739b52.44814031.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 150,
                                size: 8409,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '592c0d0fc62697781e1cc585',
                },
                hasFurniture: false,
                advertisementPrice: {
                    baseRent: 452,
                },
                userWishes: {
                    visibleAddress: true,
                },
                purpose: 0,
                title: '2 Monate mietfrei! - Attraktive Etagenwohnung mit Balkon und Tiefgaragenstellplatz!',
                realestateSummary: {
                    address: {
                        street: 'Weißdornstraße',
                        number: '18',
                        postalCode: '47269',
                        city: 'Duisburg',
                        fullAddress: 'Weißdornstraße 18, 47269 Duisburg',
                        location: {
                            type: 'Point',
                            coordinates: [51.37195999999999, 6.78207],
                        },
                    },
                    numberOfRooms: 3,
                    space: 78.07000000000004,
                },
                additionalId: 141254,
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '592c0dc6c62697a76410bdc3',
                            },
                            createdAt: {
                                sec: 1496059334,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1512036391,
                                usec: 614000,
                            },
                            fileId: 'thumbnail.592c0dc5e1c526.60330796.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.592c0dc5e1c526.60330796.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 25480,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '592c0dc6c62697a76410bdc7',
                            },
                            createdAt: {
                                sec: 1496059334,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1512036391,
                                usec: 706000,
                            },
                            fileId: 'thumbnail.592c0dc6bc5767.08154796.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.592c0dc6bc5767.08154796.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 150,
                                size: 5216,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '59303d8fc626971e441a0021',
                },
                hasFurniture: false,
                advertisementPrice: {
                    baseRent: 746,
                },
                userWishes: {
                    visibleAddress: true,
                },
                purpose: 0,
                title: '+++ WG geeignet +++ Zögern Sie nicht - Lichtdurchflutete Wohnung mit großem Sonnenbalkon!',
                realestateSummary: {
                    address: {
                        street: 'Oststraße',
                        number: '66-68',
                        postalCode: '42551',
                        city: 'Velbert',
                        fullAddress: 'Oststraße 66-68, 42551 Velbert',
                        location: {
                            type: 'Point',
                            coordinates: [51.3383791, 7.0500452],
                        },
                    },
                    numberOfRooms: 4,
                    space: 122.36000000000003,
                },
                additionalId: 141284,
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '59304db6c62697361579ea0f',
                            },
                            createdAt: {
                                sec: 1496337845,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1512118867,
                                usec: 561000,
                            },
                            fileId: 'thumbnail.59304db4d74660.23560580.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59304db4d74660.23560580.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 32272,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '59304db6c62697361579ea13',
                            },
                            createdAt: {
                                sec: 1496337845,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1512118867,
                                usec: 644000,
                            },
                            fileId: 'thumbnail.59304db5ea5556.66627506.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59304db5ea5556.66627506.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 133,
                                size: 6601,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '59314b80c62697d12b40c689',
                },
                hasFurniture: false,
                advertisementPrice: {
                    baseRent: 1850,
                },
                userWishes: {
                    visibleAddress: true,
                },
                purpose: 0,
                title: 'Neuwertige Dachgeschosswohnung mit Terrasse!',
                realestateSummary: {
                    address: {
                        street: 'Nestorstraße',
                        number: '14',
                        postalCode: '10709',
                        city: 'Berlin',
                        fullAddress: 'Nestorstraße 14, 10709 Berlin',
                        location: {
                            type: 'Point',
                            coordinates: [52.4963586, 13.299348],
                        },
                    },
                    numberOfRooms: 3,
                    space: 157.23999999999998,
                },
                additionalId: 141286,
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '59c26958c626972efd017f3c',
                            },
                            createdAt: {
                                sec: 1505913175,
                                usec: 41000,
                            },
                            updatedAt: {
                                sec: 1512122362,
                                usec: 936000,
                            },
                            fileId: 'thumbnail.59c26956de1711.59947724.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59c26956de1711.59947724.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 19225,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '59c26958c626972efd017f40',
                            },
                            createdAt: {
                                sec: 1505913175,
                                usec: 927000,
                            },
                            updatedAt: {
                                sec: 1512122363,
                                usec: 22000,
                            },
                            fileId: 'thumbnail.59c26957da7fc0.23684679.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59c26957da7fc0.23684679.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 133,
                                size: 4793,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '593a9a99c62697bcf32d3ed1',
                },
                hasFurniture: false,
                advertisementPrice: {
                    baseRent: 520,
                },
                userWishes: {
                    visibleAddress: true,
                },
                purpose: 0,
                title: 'Freundliche Etagenwohnung mit 2 Balkonen und Ausblick ins Grüne!',
                realestateSummary: {
                    address: {
                        street: 'Rüsselsheimer Weg',
                        number: '7',
                        postalCode: '44892',
                        city: 'Bochum',
                        fullAddress: 'Rüsselsheimer Weg 7, 44892 Bochum',
                        location: {
                            type: 'Point',
                            coordinates: [51.4710647, 7.299620699999998],
                        },
                    },
                    numberOfRooms: 3,
                    space: 92.78000000000003,
                },
                additionalId: 141321,
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '593aa084c6269786ff78c43c',
                            },
                            createdAt: {
                                sec: 1497014403,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1511972451,
                                usec: 813000,
                            },
                            fileId: 'thumbnail.593aa0839aaad3.52569917.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.593aa0839aaad3.52569917.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 18665,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '593aa084c6269786ff78c440',
                            },
                            createdAt: {
                                sec: 1497014404,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1511972451,
                                usec: 892000,
                            },
                            fileId: 'thumbnail.593aa084659257.51480456.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.593aa084659257.51480456.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 150,
                                size: 4311,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '593eba58c62697db491324cf',
                },
                hasFurniture: true,
                advertisementPrice: {
                    baseRent: 890,
                },
                userWishes: {
                    visibleAddress: true,
                },
                purpose: 0,
                title: 'Möbliertes Wohnen in einer Luxus Wohnung',
                realestateSummary: {
                    address: {
                        street: 'Härtelstraße',
                        number: '10',
                        postalCode: '04107',
                        city: 'Leipzig',
                        fullAddress: 'Härtelstraße 10, 04107 Leipzig',
                        location: {
                            type: 'Point',
                            coordinates: [51.332769, 12.3759642],
                        },
                    },
                    numberOfRooms: 2,
                    space: 74,
                },
                additionalId: 141334,
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '593ec70cc62697da854b0e25',
                            },
                            createdAt: {
                                sec: 1497286411,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1507802411,
                                usec: 528000,
                            },
                            fileId: 'thumbnail.593ec70b795933.34393993.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.593ec70b795933.34393993.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 23955,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '593ec70cc62697da854b0e29',
                            },
                            createdAt: {
                                sec: 1497286412,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1507802411,
                                usec: 733000,
                            },
                            fileId: 'thumbnail.593ec70c4799e4.06911668.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.593ec70c4799e4.06911668.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 113,
                                size: 5387,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '5941363ac10d1d63863773d3',
                },
                hasFurniture: false,
                advertisementPrice: {
                    sellPrice: 37000,
                },
                userWishes: {
                    visibleAddress: false,
                },
                purpose: 1,
                title: 'Gemütliche Wohnung in denkmalgeschütztem Altbau in Chemnitz-Hilbersdorf!',
                additionalId: 141344,
                realestateSummary: {
                    address: {
                        street: 'Margaretenstraße',
                        number: '36',
                        postalCode: '09131',
                        city: 'Chemnitz',
                        location: {
                            type: 'Point',
                            coordinates: [50.85195, 12.94393],
                        },
                    },
                    numberOfRooms: 2,
                    space: 47.47,
                },
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '5978b09ec10d1dfd6652f4d3',
                            },
                            createdAt: {
                                sec: 1501081757,
                                usec: 431000,
                            },
                            updatedAt: {
                                sec: 1501081758,
                                usec: 407000,
                            },
                            fileId: 'thumbnail.5978b09d549d51.43128412.jpg',
                            filename: 'thumbnail_of_asset5978b0995d03d.jpg.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5978b09d549d51.43128412.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 52499,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '5978b09ec10d1dfd6652f4d7',
                            },
                            createdAt: {
                                sec: 1501081758,
                                usec: 226000,
                            },
                            updatedAt: {
                                sec: 1501081758,
                                usec: 407000,
                            },
                            fileId: 'thumbnail.5978b09e272126.73662503.jpg',
                            filename: 'thumbnail_of_asset5978b0995d03d.jpg.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5978b09e272126.73662503.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 133,
                                size: 8007,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '5949345cc6269710a06af34a',
                },
                hasFurniture: false,
                advertisementPrice: {
                    baseRent: 518,
                },
                userWishes: {
                    visibleAddress: true,
                },
                purpose: 0,
                title: '+++ FLATSCREEN ZUM EINZUG! +++ Großzügige Wohnung mit Balkon in ruhiger Lage - Perfekt für Familien!',
                realestateSummary: {
                    address: {
                        street: 'Im Bonnefeld',
                        number: '7',
                        postalCode: '47259',
                        city: 'Duisburg',
                        fullAddress: 'Im Bonnefeld 7, 47259 Duisburg',
                        location: {
                            type: 'Point',
                            coordinates: [51.35949000000001, 6.69369],
                        },
                    },
                    numberOfRooms: 4,
                    space: 99.62,
                },
                additionalId: 141372,
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '59493694c62697113b090ea0',
                            },
                            createdAt: {
                                sec: 1497970323,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1512291595,
                                usec: 725000,
                            },
                            fileId: 'thumbnail.59493693b3c579.88494534.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59493693b3c579.88494534.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 16459,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '59493694c62697113b090ea4',
                            },
                            createdAt: {
                                sec: 1497970324,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1512291595,
                                usec: 800000,
                            },
                            fileId: 'thumbnail.594936947e06a4.51472303.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.594936947e06a4.51472303.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 150,
                                size: 4485,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '59565ac0c6269741491b617c',
                },
                hasFurniture: false,
                advertisementPrice: {
                    baseRent: 9000,
                },
                userWishes: {
                    visibleAddress: true,
                },
                purpose: 0,
                title: 'IT Testobjekt für Bewerbungen',
                realestateSummary: {
                    address: {
                        street: 'Flughafenstraße',
                        number: '29',
                        postalCode: '12053',
                        city: 'Berlin',
                        fullAddress: 'Flughafenstraße 29, 12053 Berlin',
                        location: {
                            type: 'Point',
                            coordinates: [52.48124, 13.42968],
                        },
                    },
                    numberOfRooms: 3,
                    space: 125,
                },
                additionalId: 141402,
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '59565ad1c62697b67d756f14',
                            },
                            createdAt: {
                                sec: 1498831568,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1507641818,
                                usec: 667000,
                            },
                            fileId: 'thumbnail.59565ad05d4493.15534632.jpg',
                            filename: 'thumbnail_of_1482316736760.jpg.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59565ad05d4493.15534632.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 30717,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '59565ad1c62697b67d756f18',
                            },
                            createdAt: {
                                sec: 1498831569,
                                usec: 0,
                            },
                            updatedAt: {
                                sec: 1507641818,
                                usec: 756000,
                            },
                            fileId: 'thumbnail.59565ad0f1a133.42576050.jpg',
                            filename: 'thumbnail_of_1482316736760.jpg.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59565ad0f1a133.42576050.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 139,
                                size: 7683,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '5966429ec626976fcd1d6f75',
                },
                hasFurniture: false,
                advertisementPrice: {
                    baseRent: 2450,
                },
                userWishes: {
                    visibleAddress: true,
                },
                purpose: 0,
                title: 'Luxuriöse Doppelhaushälfte in idyllischer Lage',
                realestateSummary: {
                    address: {
                        street: 'Hasselwisch',
                        number: '13 a',
                        postalCode: '22397',
                        city: 'Hamburg',
                        fullAddress: 'Hasselwisch 13 a, 22397 Hamburg',
                        location: {
                            type: 'Point',
                            coordinates: [53.6974877, 10.1428967],
                        },
                    },
                    numberOfRooms: 6,
                    space: 190.01,
                },
                additionalId: 141483,
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '59f1daa2c62697ebe306c9d3',
                            },
                            createdAt: {
                                sec: 1509022369,
                                usec: 31000,
                            },
                            updatedAt: {
                                sec: 1511978354,
                                usec: 557000,
                            },
                            fileId: 'thumbnail.59f1daa0e8fe82.38067957.jpg',
                            filename: 'thumbnail_of_Bild 2.jpg.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59f1daa0e8fe82.38067957.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 22521,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '59f1daa2c62697ebe306c9d7',
                            },
                            createdAt: {
                                sec: 1509022369,
                                usec: 855000,
                            },
                            updatedAt: {
                                sec: 1511978354,
                                usec: 635000,
                            },
                            fileId: 'thumbnail.59f1daa1c8f352.55483475.jpg',
                            filename: 'thumbnail_of_Bild 2.jpg.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59f1daa1c8f352.55483475.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 131,
                                size: 4783,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
            {
                _id: {
                    $id: '5967473ac6269768d406c973',
                },
                hasFurniture: false,
                advertisementPrice: {
                    baseRent: 752,
                },
                userWishes: {
                    visibleAddress: true,
                },
                purpose: 0,
                title: 'Ihre Chance! Großzügige Wohnung selbst gestalten',
                realestateSummary: {
                    address: {
                        street: 'Kastanienweg',
                        number: '3',
                        postalCode: '50389',
                        city: 'Wesseling',
                        fullAddress: 'Kastanienweg 3, 50389 Wesseling',
                        location: {
                            type: 'Point',
                            coordinates: [50.8280009, 6.9676602],
                        },
                    },
                    numberOfRooms: 4,
                    space: 100.25,
                },
                additionalId: 141493,
                advertisementAssets: {
                    advertisementThumbnails: {
                        inventory_m: {
                            _id: {
                                $id: '596749d2c626978a4e0a7cec',
                            },
                            createdAt: {
                                sec: 1499941329,
                                usec: 78000,
                            },
                            updatedAt: {
                                sec: 1512056373,
                                usec: 547000,
                            },
                            fileId: 'thumbnail.596749d0e535a1.35414764.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.596749d0e535a1.35414764.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 610,
                                height: 300,
                                size: 21898,
                                thumbnail: 'inventory_m',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                        thumb_xs: {
                            _id: {
                                $id: '596749d2c626978a4e0a7cf0',
                            },
                            createdAt: {
                                sec: 1499941330,
                                usec: 7000,
                            },
                            updatedAt: {
                                sec: 1512056373,
                                usec: 627000,
                            },
                            fileId: 'thumbnail.596749d1eaa216.93498792.jpg',
                            filename: 'thumbnail_of_.jpg',
                            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.596749d1eaa216.93498792.jpg',
                            mimeType: 'image/jpg',
                            metadata: {
                                width: 200,
                                height: 113,
                                size: 4159,
                                thumbnail: 'thumb_xs',
                                transformation: 'ad_image_thumbails',
                                filesystem: 'thumbnails',
                            },
                        },
                    },
                },
            },
        ],
    };
    return AdvertisementServiceMock;
}());



/***/ }),

/***/ "../../../../../src/app/services/mock/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__advertisement_service_mock__ = __webpack_require__("../../../../../src/app/services/mock/advertisement.service.mock.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__advertisement_service_mock__["a"]; });



/***/ }),

/***/ "../../../../../src/app/state/actions/advertisement.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisementActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadAdvertisementsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadAdvertisementsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadAdvertisementsFailAction; });
var AdvertisementActionTypes;
(function (AdvertisementActionTypes) {
    AdvertisementActionTypes["LOAD_ADVERTISEMENTS"] = "[Advertisement] Load Advertisement";
    AdvertisementActionTypes["LOAD_ADVERTISEMENTS_SUCCESS"] = "[Advertisement] Load Advertisement Success";
    AdvertisementActionTypes["LOAD_ADVERTISEMENTS_FAIL"] = "[Advertisement] Load Advertisement Fail";
})(AdvertisementActionTypes || (AdvertisementActionTypes = {}));
var LoadAdvertisementsAction = (function () {
    function LoadAdvertisementsAction() {
        this.type = AdvertisementActionTypes.LOAD_ADVERTISEMENTS;
    }
    return LoadAdvertisementsAction;
}());

var LoadAdvertisementsSuccessAction = (function () {
    function LoadAdvertisementsSuccessAction(payload) {
        this.payload = payload;
        this.type = AdvertisementActionTypes.LOAD_ADVERTISEMENTS_SUCCESS;
    }
    return LoadAdvertisementsSuccessAction;
}());

var LoadAdvertisementsFailAction = (function () {
    function LoadAdvertisementsFailAction(payload) {
        this.payload = payload;
        this.type = AdvertisementActionTypes.LOAD_ADVERTISEMENTS_FAIL;
    }
    return LoadAdvertisementsFailAction;
}());



/***/ }),

/***/ "../../../../../src/app/state/actions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__advertisement_actions__ = __webpack_require__("../../../../../src/app/state/actions/advertisement.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__advertisement_actions__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__advertisement_actions__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__advertisement_actions__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__advertisement_actions__["d"]; });



/***/ }),

/***/ "../../../../../src/app/state/effects/advertisement.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisementEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__("../../../../../src/app/state/actions/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdvertisementEffects = (function () {
    function AdvertisementEffects(advertisementService, actions$) {
        var _this = this;
        this.advertisementService = advertisementService;
        this.actions$ = actions$;
        this.loadAdvertisements$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions__["a" /* AdvertisementActionTypes */].LOAD_ADVERTISEMENTS)
            .switchMap(function () {
            return _this.advertisementService
                .getAdvertisements()
                .map(function (advertisements) { return new __WEBPACK_IMPORTED_MODULE_6__actions__["d" /* LoadAdvertisementsSuccessAction */](advertisements); });
        })
            .catch(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_6__actions__["c" /* LoadAdvertisementsFailAction */](error)); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AdvertisementEffects.prototype, "loadAdvertisements$", void 0);
    AdvertisementEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services__["a" /* AdvertisementService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]])
    ], AdvertisementEffects);
    return AdvertisementEffects;
}());



/***/ }),

/***/ "../../../../../src/app/state/effects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__advertisement_effects__ = __webpack_require__("../../../../../src/app/state/effects/advertisement.effects.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__advertisement_effects__["a"]; });



/***/ }),

/***/ "../../../../../src/app/state/reducers/advertisement.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = advertisementReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/state/actions/index.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function advertisementReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* AdvertisementActionTypes */].LOAD_ADVERTISEMENTS: {
            return __assign({}, state, { isLoading: true, error: null });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* AdvertisementActionTypes */].LOAD_ADVERTISEMENTS_SUCCESS: {
            return __assign({}, state, { advertisements: action.payload, isLoading: false, error: null });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* AdvertisementActionTypes */].LOAD_ADVERTISEMENTS_FAIL: {
            return __assign({}, state, { isLoading: false, error: action.payload });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/state/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__advertisement_reducer__ = __webpack_require__("../../../../../src/app/state/reducers/advertisement.reducer.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__advertisement_reducer__["a"]; });



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map