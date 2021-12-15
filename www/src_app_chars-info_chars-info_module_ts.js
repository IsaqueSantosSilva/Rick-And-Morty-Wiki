(self["webpackChunkrick_and_morty_wiki"] = self["webpackChunkrick_and_morty_wiki"] || []).push([["src_app_chars-info_chars-info_module_ts"],{

/***/ 4276:
/*!*********************************************************!*\
  !*** ./src/app/chars-info/chars-info-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharsInfoPageRoutingModule": () => (/* binding */ CharsInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _chars_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chars-info.page */ 2284);




const routes = [
    {
        path: '',
        component: _chars_info_page__WEBPACK_IMPORTED_MODULE_0__.CharsInfoPage
    }
];
let CharsInfoPageRoutingModule = class CharsInfoPageRoutingModule {
};
CharsInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CharsInfoPageRoutingModule);



/***/ }),

/***/ 1447:
/*!*************************************************!*\
  !*** ./src/app/chars-info/chars-info.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharsInfoPageModule": () => (/* binding */ CharsInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _chars_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chars-info-routing.module */ 4276);
/* harmony import */ var _chars_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chars-info.page */ 2284);








let CharsInfoPageModule = class CharsInfoPageModule {
};
CharsInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chars_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.CharsInfoPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule
        ],
        declarations: [_chars_info_page__WEBPACK_IMPORTED_MODULE_1__.CharsInfoPage]
    })
], CharsInfoPageModule);



/***/ }),

/***/ 2284:
/*!***********************************************!*\
  !*** ./src/app/chars-info/chars-info.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharsInfoPage": () => (/* binding */ CharsInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_chars_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chars-info.page.html */ 8886);
/* harmony import */ var _chars_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chars-info.page.scss */ 4464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);






let CharsInfoPage = class CharsInfoPage {
    constructor(ActivatedRoute, http) {
        this.ActivatedRoute = ActivatedRoute;
        this.http = http;
        this.api = 'https://rickandmortyapi.com/api/character/';
    }
    ngOnInit() {
        this.charsId = this.ActivatedRoute.snapshot.paramMap.get('id');
        this.http.get(this.api + this.charsId)
            .subscribe(res => {
            this.char = res;
        });
    }
};
CharsInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
CharsInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-chars-info',
        template: _raw_loader_chars_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chars_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CharsInfoPage);



/***/ }),

/***/ 4464:
/*!*************************************************!*\
  !*** ./src/app/chars-info/chars-info.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  margin: auto;\n  max-width: 400px;\n  width: 95%;\n  position: relative;\n  opacity: 0.99;\n}\n\nion-card-title {\n  text-align: center;\n}\n\n.container {\n  margin-top: 10px;\n  border-radius: 5px;\n  display: grid;\n  place-items: start;\n  padding: 0.5rem;\n}\n\n.container p {\n  font-weight: 600;\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJzLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFBRiIsImZpbGUiOiJjaGFycy1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogOTUlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvcGFjaXR5OiAwLjk5O1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBzdGFydDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBwIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 8886:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chars-info/chars-info.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar *ngIf=\"char\">\n    <ion-title slot=\"start\">{{ char.name }}</ion-title>\n    <div class=\"centered-elements-div\" slot=\"start\">\n      <img width=\"40\" src=\"../../assets/icon/favicon.png\" alt=\"\" />\n      <h1>Rick and Morty Wiki</h1>\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"dark\" routerLink=\"/characters\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col sizeMd=\"4\" offsetMd=\"4\">\n        <ion-card *ngIf=\"char\">\n          <ion-card-content>\n            <ion-img src=\"{{ char.image }}\"></ion-img>\n            <ion-card-title>{{ char.name }}</ion-card-title>\n            <div class=\"container\">\n              <p>Status: <span id=\"status\">{{ char.status }}</span></p>\n              <p>Gender: {{ char.gender }}</p>\n              <p>Last Locattion: {{ char.location.name }}</p>\n              <p>Origin: {{ char.origin.name }}</p>\n              <p>Species: {{ char.species }}</p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chars-info_chars-info_module_ts.js.map