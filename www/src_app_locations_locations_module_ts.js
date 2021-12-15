(self["webpackChunkrick_and_morty_wiki"] = self["webpackChunkrick_and_morty_wiki"] || []).push([["src_app_locations_locations_module_ts"],{

/***/ 6869:
/*!*******************************************************!*\
  !*** ./src/app/locations/locations-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsPageRoutingModule": () => (/* binding */ LocationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _locations_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations.page */ 2022);




const routes = [
    {
        path: '',
        component: _locations_page__WEBPACK_IMPORTED_MODULE_0__.LocationsPage
    }
];
let LocationsPageRoutingModule = class LocationsPageRoutingModule {
};
LocationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LocationsPageRoutingModule);



/***/ }),

/***/ 9157:
/*!***********************************************!*\
  !*** ./src/app/locations/locations.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsPageModule": () => (/* binding */ LocationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _locations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations-routing.module */ 6869);
/* harmony import */ var _locations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations.page */ 2022);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);









let LocationsPageModule = class LocationsPageModule {
};
LocationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _locations_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocationsPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_locations_page__WEBPACK_IMPORTED_MODULE_1__.LocationsPage]
    })
], LocationsPageModule);



/***/ }),

/***/ 2022:
/*!*********************************************!*\
  !*** ./src/app/locations/locations.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsPage": () => (/* binding */ LocationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_locations_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./locations.page.html */ 4368);
/* harmony import */ var _locations_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations.page.scss */ 4938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);





let LocationsPage = class LocationsPage {
    constructor(http) {
        this.http = http;
        this.locations = [];
        this.page = 1;
        this.maxPages = 7;
        this.getInfo();
    }
    getInfo(infiniteScroll) {
        this.http.get(`https://rickandmortyapi.com/api/location?page=${this.page}`)
            .subscribe(res => {
            this.locations = this.locations.concat(res["results"]);
            if (infiniteScroll) {
                infiniteScroll.target.complete();
            }
        });
    }
    loadMore(infiniteScroll) {
        this.page++;
        this.getInfo(infiniteScroll);
        if (this.page === this.maxPages) {
            infiniteScroll.enable(false);
        }
    }
};
LocationsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
LocationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-locations',
        template: _raw_loader_locations_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_locations_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LocationsPage);



/***/ }),

/***/ 4938:
/*!***********************************************!*\
  !*** ./src/app/locations/locations.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-searchbar {\n  width: 100%;\n  max-width: 815px;\n  border-radius: 3px;\n  margin: auto;\n}\n\nion-list {\n  width: 95%;\n  max-width: 800px;\n  margin: 0 auto;\n  opacity: 0.95;\n}\n\nion-button {\n  transition: all 0.2s ease-in-out;\n}\n\nion-button:hover {\n  transform: scale(1.1);\n}\n\nion-toolbar {\n  display: flex;\n}\n\nion-img {\n  border-radius: 3px;\n  box-shadow: 0px 0px 5px #000;\n  transition: 0.2s;\n}\n\nion-img:hover {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJsb2NhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA4MTVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG9wYWNpdHk6IDAuOTU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pb24tYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzAwMDtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG5pb24taW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 4368:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"start\">Locations</ion-title>\n    <div class=\"centered-elements-div\" slot=\"start\">\n      <img width=\"40\" src=\"../../assets/icon/favicon.png\" alt=\"\" />\n      <h1>Rick and Morty Wiki</h1>\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"dark\" routerLink=\"/home\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  \n  <ion-searchbar placeholder='Try \"Earth (C-137)\"' [(ngModel)]=\"searchTerm\">\n  </ion-searchbar>\n\n  <ion-list *ngFor=\"let locations of locations | filter:searchTerm\">\n    <ion-item id=\"item\" [routerLink]=\"['/locations-info/' + locations.id]\">\n      <ion-label>{{ locations.name }}</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll\n    (ionInfinite)=\"loadMore($event)\"\n    loadingSpinner=\"bubbles\"\n  >\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_locations_locations_module_ts.js.map