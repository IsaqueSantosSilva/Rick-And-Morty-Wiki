(self["webpackChunkrick_and_morty_wiki"] = self["webpackChunkrick_and_morty_wiki"] || []).push([["src_app_characters_characters_module_ts"],{

/***/ 8180:
/*!*********************************************************!*\
  !*** ./src/app/characters/characters-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharactersPageRoutingModule": () => (/* binding */ CharactersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _characters_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters.page */ 33);




const routes = [
    {
        path: '',
        component: _characters_page__WEBPACK_IMPORTED_MODULE_0__.CharactersPage
    }
];
let CharactersPageRoutingModule = class CharactersPageRoutingModule {
};
CharactersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CharactersPageRoutingModule);



/***/ }),

/***/ 3020:
/*!*************************************************!*\
  !*** ./src/app/characters/characters.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharactersPageModule": () => (/* binding */ CharactersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _characters_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters-routing.module */ 8180);
/* harmony import */ var _characters_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characters.page */ 33);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);









let CharactersPageModule = class CharactersPageModule {
};
CharactersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _characters_routing_module__WEBPACK_IMPORTED_MODULE_0__.CharactersPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_characters_page__WEBPACK_IMPORTED_MODULE_1__.CharactersPage]
    })
], CharactersPageModule);



/***/ }),

/***/ 33:
/*!***********************************************!*\
  !*** ./src/app/characters/characters.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharactersPage": () => (/* binding */ CharactersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_characters_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./characters.page.html */ 665);
/* harmony import */ var _characters_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characters.page.scss */ 7139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);





let CharactersPage = class CharactersPage {
    constructor(http) {
        this.http = http;
        this.chars = [];
        this.page = 1;
        this.maxPages = 43;
        this.getInfo();
    }
    getInfo(infiniteScroll) {
        this.http.get(`https://rickandmortyapi.com/api/character?page=${this.page}`)
            .subscribe(res => {
            this.chars = this.chars.concat(res["results"]);
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
CharactersPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
CharactersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-characters',
        template: _raw_loader_characters_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_characters_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CharactersPage);



/***/ }),

/***/ 7139:
/*!*************************************************!*\
  !*** ./src/app/characters/characters.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-searchbar {\n  width: 100%;\n  max-width: 815px;\n  border-radius: 3px;\n  margin: auto;\n}\n\nion-list {\n  width: 95%;\n  max-width: 800px;\n  margin: 0 auto;\n  opacity: 0.95;\n}\n\nion-button {\n  transition: all 0.2s ease-in-out;\n}\n\nion-button:hover {\n  transform: scale(1.1);\n}\n\nion-toolbar {\n  display: flex;\n}\n\nion-img {\n  border-radius: 3px;\n  box-shadow: 0px 0px 5px #000;\n  transition: 0.2s;\n}\n\nion-img:hover {\n  transform: scale(1.1);\n}\n\n@media screen and (max-width: 600px) {\n  ion-list p {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3RlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImNoYXJhY3RlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA4MTVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG9wYWNpdHk6IDAuOTU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pb24tYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzAwMDtcclxuICB0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbmlvbi1pbWc6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gIGlvbi1saXN0IHAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 665:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/characters/characters.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title slot=\"start\">Characters</ion-title>\r\n    <div class=\"centered-elements-div\" slot=\"start\">\r\n      <img width=\"40\" src=\"../../assets/icon/favicon.png\" alt=\"\" />\r\n      <h1>Rick and Morty Wiki</h1>\r\n    </div>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"dark\" routerLink=\"/home\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-searchbar placeholder='Try \"Rick Sanchez\"' [(ngModel)]=\"searchTerm\">\r\n  </ion-searchbar>\r\n\r\n  <ion-list *ngFor=\"let chars of chars | filter:searchTerm\">\r\n    <ion-item id=\"item\" [routerLink]=\"['/chars-info/' + chars.id]\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-img src=\"{{ chars.image }}\"></ion-img>\r\n      </ion-thumbnail>\r\n      <ion-label>{{ chars.name }}</ion-label>\r\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-infinite-scroll\r\n    (ionInfinite)=\"loadMore($event)\"\r\n    loadingSpinner=\"bubbles\"\r\n  >\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_characters_characters_module_ts.js.map