(self["webpackChunkrick_and_morty_wiki"] = self["webpackChunkrick_and_morty_wiki"] || []).push([["src_app_location-info_location-info_module_ts"],{

/***/ 4902:
/*!***************************************************************!*\
  !*** ./src/app/location-info/location-info-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationInfoPageRoutingModule": () => (/* binding */ LocationInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _location_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-info.page */ 706);




const routes = [
    {
        path: '',
        component: _location_info_page__WEBPACK_IMPORTED_MODULE_0__.LocationInfoPage
    }
];
let LocationInfoPageRoutingModule = class LocationInfoPageRoutingModule {
};
LocationInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LocationInfoPageRoutingModule);



/***/ }),

/***/ 5999:
/*!*******************************************************!*\
  !*** ./src/app/location-info/location-info.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationInfoPageModule": () => (/* binding */ LocationInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _location_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-info-routing.module */ 4902);
/* harmony import */ var _location_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-info.page */ 706);








let LocationInfoPageModule = class LocationInfoPageModule {
};
LocationInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _location_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocationInfoPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule
        ],
        declarations: [_location_info_page__WEBPACK_IMPORTED_MODULE_1__.LocationInfoPage]
    })
], LocationInfoPageModule);



/***/ }),

/***/ 706:
/*!*****************************************************!*\
  !*** ./src/app/location-info/location-info.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationInfoPage": () => (/* binding */ LocationInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_location_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./location-info.page.html */ 7746);
/* harmony import */ var _location_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-info.page.scss */ 1850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);






let LocationInfoPage = class LocationInfoPage {
    constructor(ActivatedRoute, http) {
        this.ActivatedRoute = ActivatedRoute;
        this.http = http;
    }
    ngOnInit() {
        this.locationsId = this.ActivatedRoute.snapshot.paramMap.get('id');
        this.http.get("https://rickandmortyapi.com/api/location/" + this.locationsId)
            .subscribe(res => {
            this.location = res;
        });
    }
};
LocationInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
LocationInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-location-info',
        template: _raw_loader_location_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_location_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LocationInfoPage);



/***/ }),

/***/ 1850:
/*!*******************************************************!*\
  !*** ./src/app/location-info/location-info.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  max-width: 300px;\n  margin: auto;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJsb2NhdGlvbi1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 7746:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location-info/location-info.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar *ngIf=\"location\">\n    <ion-title slot=\"start\">{{ location.name }}</ion-title>\n    <div class=\"centered-elements-div\" slot=\"start\">\n      <img width=\"40\" src=\"../../assets/icon/favicon.png\" alt=\"\" />\n      <h1>Rick and Morty Wiki</h1>\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"dark\" routerLink=\"/locations\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-card *ngIf=\"location\" id=\"container\">\n    <ion-card-content>\n      <ion-card-title class=\"name-title\">{{ location.name }}</ion-card-title>\n      <div class=\"container\">\n        <p>Dimension: {{ location.dimension }}</p>\n        <p>Created: {{ location.created }}</p>\n        <p>Type: {{ location.type }}</p>\n        <p>Residents: {{ location.residents.length }}</p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_location-info_location-info_module_ts.js.map