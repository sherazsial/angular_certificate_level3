(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/zipcode-entry/zipcode-entry.component */ 3813);
/* harmony import */ var _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forecasts-list/forecasts-list.component */ 726);
/* harmony import */ var _components_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/current-conditions/current-conditions.component */ 6263);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 4766);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/location.service */ 5434);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/weather.service */ 1125);
/* harmony import */ var _shared_components_tab_group_tab_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/tab-group/tab-group.component */ 3182);
/* harmony import */ var _services_cache_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/cache.service */ 248);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_3__.ZipcodeEntryComponent, _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_4__.ForecastsListComponent, _components_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent, _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_1__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule.register("/ngsw-worker.js", {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production
  }), _shared_components_tab_group_tab_group_component__WEBPACK_IMPORTED_MODULE_9__.TabGroupComponent],
  providers: [_services_location_service__WEBPACK_IMPORTED_MODULE_7__.LocationService, _services_weather_service__WEBPACK_IMPORTED_MODULE_8__.WeatherService, _services_cache_service__WEBPACK_IMPORTED_MODULE_10__.CacheService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 4766);
/* harmony import */ var _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/forecasts-list/forecasts-list.component */ 726);



const appRoutes = [{
  path: '',
  component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_1__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 6263:
/*!*******************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 2923);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 4207);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ 1125);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/location.service */ 5434);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.currentConditionsByZip = this.weatherService.getCurrentConditions();
    this.tabs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.computed)(() => {
      return this.currentConditionsByZip().map(conditions => ({
        title: `${conditions.data.name} (${conditions.zip})`
      }));
    });
  }
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: "app-current-conditions",
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 726:
/*!***********************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 5422);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 8314);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ 1125);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastsListComponent = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    route.params.subscribe(params => {
      this.zipcode = params["zipcode"];
      weatherService.getForecast(this.zipcode).subscribe(data => this.forecast = data);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: "app-forecasts-list",
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 4766:
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 3813:
/*!*********************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 2647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/location.service */ 5434);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor(service) {
    this.service = service;
  }
  addLocation(zipcode) {
    this.service.addLocation(zipcode);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService
  }];
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: "app-zipcode-entry",
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 248:
/*!*******************************************!*\
  !*** ./src/app/services/cache.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CacheService = class CacheService {
  constructor() {
    this.defaultDuration = 2 * 60 * 60 * 1000; // 2 hours, customizable
  }

  set(key, data) {
    const cacheEntry = {
      data,
      expirationTime: this.getExpirationTime(this.defaultDuration)
    };
    localStorage.setItem(key, JSON.stringify(cacheEntry));
  }
  get(key) {
    const cachedItem = localStorage.getItem(key);
    if (!cachedItem) {
      return null;
    }
    const expirationTime = JSON.parse(cachedItem).expirationTime;
    const data = JSON.parse(cachedItem).data;
    if (Date.now() > expirationTime) {
      localStorage.removeItem(key);
      return null;
    } else {
      return data;
    }
  }
  getExpirationTime(duration) {
    return Date.now() + duration;
  }
};
CacheService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: "root"
})], CacheService);


/***/ }),

/***/ 5434:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const LOCATIONS = "locations";
let LocationService = class LocationService {
  constructor() {
    this.$locations = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    this.locations = this.$locations.asReadonly();
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.$locations.set(JSON.parse(locString));
    }
  }
  addLocation(zipcode) {
    let locations = [...this.$locations()];
    if (!locations.includes(zipcode)) {
      locations.push(zipcode);
      this.$locations.set(locations);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.$locations()));
    }
  }
  removeLocation(removeIndex) {
    let locations = [...this.$locations()];
    const zipcode = locations[removeIndex];
    let index = locations.indexOf(zipcode);
    if (index !== -1) {
      locations.splice(index, 1);
      this.$locations.set(locations);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.$locations()));
    }
  }
  static #_ = this.ctorParameters = () => [];
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: "root"
})], LocationService);


/***/ }),

/***/ 1125:
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.service */ 5434);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache.service */ 248);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5746);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;






let WeatherService = class WeatherService {
  static #_ = WeatherService_1 = this;
  static #_2 = this.URL = "https://api.openweathermap.org/data/2.5";
  static #_3 = this.APPID = "5a4b2d457ecbef9eb2a71e480b947604";
  static #_4 = this.ICON_URL = "https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/";
  constructor(http) {
    this.http = http;
    this.locations = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_location_service__WEBPACK_IMPORTED_MODULE_0__.LocationService).locations;
    this.cacheService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CacheService);
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)([]);
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.effect)(() => {
      const difference = this.getDifference();
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.untracked)(() => {
        if (this.currentConditions().length > this.locations().length) {
          this.removeCurrentConditions(difference);
        } else if (this.currentConditions().length < this.locations().length) {
          this.addCurrentConditions(difference);
        }
      });
    });
  }
  addCurrentConditions(zipcode) {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    const url = `${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`;
    if (this.cacheService.get(url)) {
      const data = this.cacheService.get(url);
      this.updateCurrentConditions(zipcode, data);
    } else {
      this.http.get(url).subscribe(data => {
        this.updateCurrentConditions(zipcode, data);
        this.cacheService.set(url, data);
      });
    }
  }
  getForecast(zipcode) {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    const url = `${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`;
    if (this.cacheService.get(url)) {
      const data = this.cacheService.get(url);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(data);
    } else {
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => this.cacheService.set(url, data)));
    }
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) {
      return WeatherService_1.ICON_URL + "art_storm.png";
    } else if (id >= 501 && id <= 511) {
      return WeatherService_1.ICON_URL + "art_rain.png";
    } else if (id === 500 || id >= 520 && id <= 531) {
      return WeatherService_1.ICON_URL + "art_light_rain.png";
    } else if (id >= 600 && id <= 622) {
      return WeatherService_1.ICON_URL + "art_snow.png";
    } else if (id >= 801 && id <= 804) {
      return WeatherService_1.ICON_URL + "art_clouds.png";
    } else if (id === 741 || id === 761) {
      return WeatherService_1.ICON_URL + "art_fog.png";
    } else {
      return WeatherService_1.ICON_URL + "art_clear.png";
    }
  }
  removeCurrentConditions(zipcode) {
    this.currentConditions.update(conditions => {
      for (let i in conditions) {
        if (conditions[i].zip == zipcode) {
          conditions.splice(+i, 1);
        }
      }
      return conditions;
    });
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  updateCurrentConditions(zip, data) {
    this.currentConditions.update(conditions => [...conditions, {
      zip,
      data
    }]);
  }
  getDifference() {
    const locations = this.locations();
    const set1 = new Set(this.currentConditions().map(condition => condition.zip));
    const set2 = new Set(locations);
    const difference = [...this.currentConditions().map(condition => condition.zip).filter(item => !set2.has(item)), ...locations.filter(item => !set1.has(item))];
    return difference[0];
  }
  static #_5 = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }];
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: "root"
})], WeatherService);


/***/ }),

/***/ 3182:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/tab-group/tab-group.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabGroupComponent: () => (/* binding */ TabGroupComponent)
/* harmony export */ });
/* harmony import */ var C_Users_SherazSial_Desktop_Sifamo_Zertifikate_src_app_shared_components_tab_group_tab_group_component_ts_css_ngResource_C_Users_SherazSial_Desktop_Sifamo_Zertifikate_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAudGFicyB7CiAgICAgIHdpZHRoOiAxMDAlOwogICAgfQoKICAgIC50YWItdGl0bGVzIHsKICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBwYWRkaW5nOiAwOwogICAgfQoKICAgIC50YWItdGl0bGVzIGxpIHsKICAgICAgcGFkZGluZzogMTBweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7CiAgICAgIG1hcmdpbi1yaWdodDogNXB4OwogICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDsKICAgIH0KCiAgICAudGFiLXRpdGxlcyBsaS5hY3RpdmUgewogICAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmOwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogICAgLmNsb3NlLWJ0biB7CiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGNvbG9yOiAjZmYwMDAwOwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBtYXJnaW4tbGVmdDogMTBweDsKICAgIH0KCiAgICAudGFiLWNvbnRlbnQgewogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBib3JkZXItc3R5bGU6IHNvbGlkOwogICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIGJvcmRlci13aWR0aDogMXB4OwogICAgfQogIA_3D_3D_C_Users_SherazSial_Desktop_Sifamo_Zertifikate_src_app_shared_components_tab_group_tab_group_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/shared/components/tab-group/tab-group.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAudGFicyB7CiAgICAgIHdpZHRoOiAxMDAlOwogICAgfQoKICAgIC50YWItdGl0bGVzIHsKICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBwYWRkaW5nOiAwOwogICAgfQoKICAgIC50YWItdGl0bGVzIGxpIHsKICAgICAgcGFkZGluZzogMTBweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7CiAgICAgIG1hcmdpbi1yaWdodDogNXB4OwogICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDsKICAgIH0KCiAgICAudGFiLXRpdGxlcyBsaS5hY3RpdmUgewogICAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmOwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogICAgLmNsb3NlLWJ0biB7CiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGNvbG9yOiAjZmYwMDAwOwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBtYXJnaW4tbGVmdDogMTBweDsKICAgIH0KCiAgICAudGFiLWNvbnRlbnQgewogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBib3JkZXItc3R5bGU6IHNvbGlkOwogICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIGJvcmRlci13aWR0aDogMXB4OwogICAgfQogIA%3D%3D!./src/app/shared/components/tab-group/tab-group.component.ts */ 5946);
/* harmony import */ var C_Users_SherazSial_Desktop_Sifamo_Zertifikate_src_app_shared_components_tab_group_tab_group_component_ts_css_ngResource_C_Users_SherazSial_Desktop_Sifamo_Zertifikate_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAudGFicyB7CiAgICAgIHdpZHRoOiAxMDAlOwogICAgfQoKICAgIC50YWItdGl0bGVzIHsKICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBwYWRkaW5nOiAwOwogICAgfQoKICAgIC50YWItdGl0bGVzIGxpIHsKICAgICAgcGFkZGluZzogMTBweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7CiAgICAgIG1hcmdpbi1yaWdodDogNXB4OwogICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDsKICAgIH0KCiAgICAudGFiLXRpdGxlcyBsaS5hY3RpdmUgewogICAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmOwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogICAgLmNsb3NlLWJ0biB7CiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGNvbG9yOiAjZmYwMDAwOwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBtYXJnaW4tbGVmdDogMTBweDsKICAgIH0KCiAgICAudGFiLWNvbnRlbnQgewogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBib3JkZXItc3R5bGU6IHNvbGlkOwogICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIGJvcmRlci13aWR0aDogMXB4OwogICAgfQogIA_3D_3D_C_Users_SherazSial_Desktop_Sifamo_Zertifikate_src_app_shared_components_tab_group_tab_group_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_SherazSial_Desktop_Sifamo_Zertifikate_src_app_shared_components_tab_group_tab_group_component_ts_css_ngResource_C_Users_SherazSial_Desktop_Sifamo_Zertifikate_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAudGFicyB7CiAgICAgIHdpZHRoOiAxMDAlOwogICAgfQoKICAgIC50YWItdGl0bGVzIHsKICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBwYWRkaW5nOiAwOwogICAgfQoKICAgIC50YWItdGl0bGVzIGxpIHsKICAgICAgcGFkZGluZzogMTBweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7CiAgICAgIG1hcmdpbi1yaWdodDogNXB4OwogICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDsKICAgIH0KCiAgICAudGFiLXRpdGxlcyBsaS5hY3RpdmUgewogICAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmOwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogICAgLmNsb3NlLWJ0biB7CiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGNvbG9yOiAjZmYwMDAwOwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBtYXJnaW4tbGVmdDogMTBweDsKICAgIH0KCiAgICAudGFiLWNvbnRlbnQgewogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBib3JkZXItc3R5bGU6IHNvbGlkOwogICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIGJvcmRlci13aWR0aDogMXB4OwogICAgfQogIA_3D_3D_C_Users_SherazSial_Desktop_Sifamo_Zertifikate_src_app_shared_components_tab_group_tab_group_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let TabGroupComponent = class TabGroupComponent {
  constructor() {
    this.tabs = [];
    this.closeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.selectedIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(0);
  }
  closeTab(index) {
    this.tabs.splice(index, 1);
    this.closeEmitter.emit(index);
  }
  selectTab(index) {
    this.selectedIndex.set(index);
  }
  static #_ = this.propDecorators = {
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    closeEmitter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  };
};
TabGroupComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: "app-tab-group",
  template: ` <div class="tabs">
    <ul class="tab-titles">
      @for (tab of tabs; track i; let i = $index) {
        <li [class.active]="i === selectedIndex()" (click)="selectTab(i)">
          {{ tab.title }}
          <button class="close-btn" (click)="closeTab(i)">X</button>
        </li>
      }
    </ul>
    <div class="tab-content">
      <ng-content />
    </div>
  </div>`,
  standalone: true,
  styles: [(C_Users_SherazSial_Desktop_Sifamo_Zertifikate_src_app_shared_components_tab_group_tab_group_component_ts_css_ngResource_C_Users_SherazSial_Desktop_Sifamo_Zertifikate_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAudGFicyB7CiAgICAgIHdpZHRoOiAxMDAlOwogICAgfQoKICAgIC50YWItdGl0bGVzIHsKICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBwYWRkaW5nOiAwOwogICAgfQoKICAgIC50YWItdGl0bGVzIGxpIHsKICAgICAgcGFkZGluZzogMTBweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7CiAgICAgIG1hcmdpbi1yaWdodDogNXB4OwogICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDsKICAgIH0KCiAgICAudGFiLXRpdGxlcyBsaS5hY3RpdmUgewogICAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmOwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogICAgLmNsb3NlLWJ0biB7CiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGNvbG9yOiAjZmYwMDAwOwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBtYXJnaW4tbGVmdDogMTBweDsKICAgIH0KCiAgICAudGFiLWNvbnRlbnQgewogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBib3JkZXItc3R5bGU6IHNvbGlkOwogICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIGJvcmRlci13aWR0aDogMXB4OwogICAgfQogIA_3D_3D_C_Users_SherazSial_Desktop_Sifamo_Zertifikate_src_app_shared_components_tab_group_tab_group_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], TabGroupComponent);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 5946:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/tab-group/tab-group.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAudGFicyB7CiAgICAgIHdpZHRoOiAxMDAlOwogICAgfQoKICAgIC50YWItdGl0bGVzIHsKICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBwYWRkaW5nOiAwOwogICAgfQoKICAgIC50YWItdGl0bGVzIGxpIHsKICAgICAgcGFkZGluZzogMTBweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7CiAgICAgIG1hcmdpbi1yaWdodDogNXB4OwogICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDsKICAgIH0KCiAgICAudGFiLXRpdGxlcyBsaS5hY3RpdmUgewogICAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmOwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogICAgLmNsb3NlLWJ0biB7CiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGNvbG9yOiAjZmYwMDAwOwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICBtYXJnaW4tbGVmdDogMTBweDsKICAgIH0KCiAgICAudGFiLWNvbnRlbnQgewogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBib3JkZXItc3R5bGU6IHNvbGlkOwogICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgIGJvcmRlci13aWR0aDogMXB4OwogICAgfQogIA%3D%3D!./src/app/shared/components/tab-group/tab-group.component.ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
    .tabs {
      width: 100%;
    }

    .tab-titles {
      list-style-type: none;
      display: flex;
      padding: 0;
    }

    .tab-titles li {
      padding: 10px;
      cursor: pointer;
      position: relative;
      background: #e0e0e0;
      margin-right: 5px;
      border-radius: 5px 5px 0 0;
    }

    .tab-titles li.active {
      background: #007bff;
      color: white;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: #ff0000;
      font-weight: bold;
      cursor: pointer;
      margin-left: 10px;
    }

    .tab-content {
      padding: 10px;
      border-style: solid;
      border-radius: 8px;
      border-width: 1px;
    }
  `, "",{"version":3,"sources":["webpack://./src/app/shared/components/tab-group/tab-group.component.ts"],"names":[],"mappings":";IACI;MACE,WAAW;IACb;;IAEA;MACE,qBAAqB;MACrB,aAAa;MACb,UAAU;IACZ;;IAEA;MACE,aAAa;MACb,eAAe;MACf,kBAAkB;MAClB,mBAAmB;MACnB,iBAAiB;MACjB,0BAA0B;IAC5B;;IAEA;MACE,mBAAmB;MACnB,YAAY;IACd;;IAEA;MACE,uBAAuB;MACvB,YAAY;MACZ,cAAc;MACd,iBAAiB;MACjB,eAAe;MACf,iBAAiB;IACnB;;IAEA;MACE,aAAa;MACb,mBAAmB;MACnB,kBAAkB;MAClB,iBAAiB;IACnB","sourcesContent":["\n    .tabs {\n      width: 100%;\n    }\n\n    .tab-titles {\n      list-style-type: none;\n      display: flex;\n      padding: 0;\n    }\n\n    .tab-titles li {\n      padding: 10px;\n      cursor: pointer;\n      position: relative;\n      background: #e0e0e0;\n      margin-right: 5px;\n      border-radius: 5px 5px 0 0;\n    }\n\n    .tab-titles li.active {\n      background: #007bff;\n      color: white;\n    }\n\n    .close-btn {\n      background: transparent;\n      border: none;\n      color: #ff0000;\n      font-weight: bold;\n      cursor: pointer;\n      margin-left: 10px;\n    }\n\n    .tab-content {\n      padding: 10px;\n      border-style: solid;\n      border-radius: 8px;\n      border-width: 1px;\n    }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4207:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.close {
    cursor: pointer;
}

.flex {
    display: flex;
    justify-content: space-between;
}


.current-condition {
    padding: 15px;
    background: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 0 5px 5px 5px;
    display: flex;
    justify-content: center;
}

.current-condition h4 {
    margin: 0 0 10px;
    font-weight: normal;
}

.current-condition p {
    margin: 5px 0;
}

.current-condition a {
    color: #2a77c3;
    text-decoration: underline;
    font-size: 0.9em;
}


.close {
    cursor: pointer;
    font-size: 20px;
    color: #ff0000;
    position: absolute;
    top: 5px;
    right: 5px;
}

.tab-content {
    display: flex;
    justify-content: center;
}

.info-content {
    align-content: center;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;;;AAGA;IACI,eAAe;IACf,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":[".close {\r\n    cursor: pointer;\r\n}\r\n\r\n.flex {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n.current-condition {\r\n    padding: 15px;\r\n    background: #f7f7f7;\r\n    border: 1px solid #ddd;\r\n    border-radius: 0 5px 5px 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.current-condition h4 {\r\n    margin: 0 0 10px;\r\n    font-weight: normal;\r\n}\r\n\r\n.current-condition p {\r\n    margin: 5px 0;\r\n}\r\n\r\n.current-condition a {\r\n    color: #2a77c3;\r\n    text-decoration: underline;\r\n    font-size: 0.9em;\r\n}\r\n\r\n\r\n.close {\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n    color: #ff0000;\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n}\r\n\r\n.tab-content {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.info-content {\r\n    align-content: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8314:
/*!***********************************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.css?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 2923:
/*!********************************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (tabs().length > 0) {\r\n    <app-tab-group #tabGroupComponent (closeEmitter)=\"locationService.removeLocation($event)\"\r\n                   [tabs]=\"tabs()\">\r\n        @if (currentConditionsByZip()[tabGroupComponent.selectedIndex()]; as location) {\r\n            <div class=\"tab-content\">\r\n                <div class=\"current-condition\">\r\n                    <div class=\"info-content\">\r\n                        <h4>Current conditions: {{ location.data.weather[0].main }}</h4>\r\n                        <h4>Temperatures today:</h4>\r\n                        <p>\r\n                            Current {{ location.data.main.temp | number:'.0-0' }}\r\n                            - Max {{ location.data.main.temp_max | number:'.0-0' }}\r\n                            - Min {{ location.data.main.temp_min | number:'.0-0' }}\r\n                        </p>\r\n                        <p>\r\n                            <a [routerLink]=\"['/forecast', location.zip]\">Show 5-day forecast\r\n                                for {{ location.data.name }}</a>\r\n                        </p>\r\n                    </div>\r\n                    <img [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\">\r\n                </div>\r\n\r\n            </div>\r\n        }\r\n    </app-tab-group>\r\n}\r\n\r\n";

/***/ }),

/***/ 5422:
/*!************************************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\">5-day forecast for {{ forecast?.city.name }}</h3>\r\n\r\n        </div>\r\n        <ul class=\"list-group\">\r\n            <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\r\n                {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d' }}:\r\n                {{ dailyForecast.weather[0].main }}\r\n                - Min: {{ dailyForecast.temp.min | number:'.0-0' }}\r\n                - Max: {{ dailyForecast.temp.max | number:'.0-0' }}\r\n\r\n                <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<button [routerLink]=\"'/'\" class=\"btn btn-success\">< Back to main page</button>\r\n";

/***/ }),

/***/ 595:
/*!**************************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n\r\n  <app-zipcode-entry> </app-zipcode-entry>\r\n  <app-current-conditions></app-current-conditions>\r\n\r\n</div>\r\n";

/***/ }),

/***/ 2647:
/*!**********************************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\r\n  <h2>Enter a zipcode:</h2>\r\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\">\r\n  <br>\r\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode.value)\" >\r\n    Add location\r\n  </button>\r\n</div>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map