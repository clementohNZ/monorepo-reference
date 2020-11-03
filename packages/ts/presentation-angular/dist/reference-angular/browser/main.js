(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/clem/projects-stuff/stuff-monorepo-reference/packages/ts/presentation-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "334H":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Iq5M");
/* harmony import */ var _angular_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-environment.service */ "DMUs");
/* harmony import */ var _angular_logging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-logging.service */ "c9Mc");
/* harmony import */ var _angular_platform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular-platform.service */ "YnBx");
/* eslint @typescript-eslint/no-empty-function: 0 */ // --> OFF
/* eslint @typescript-eslint/explicit-function-return-type: 0 */ // --> OFF





class ServicesModule {
}
ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, providers: [
        _angular_environment_service__WEBPACK_IMPORTED_MODULE_1__["AngularEnvironmentService"],
        _angular_logging_service__WEBPACK_IMPORTED_MODULE_2__["AngularLoggingService"],
        _angular_platform_service__WEBPACK_IMPORTED_MODULE_3__["AngularPlatformService"],
    ], imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [],
                exports: [],
                providers: [
                    _angular_environment_service__WEBPACK_IMPORTED_MODULE_1__["AngularEnvironmentService"],
                    _angular_logging_service__WEBPACK_IMPORTED_MODULE_2__["AngularLoggingService"],
                    _angular_platform_service__WEBPACK_IMPORTED_MODULE_3__["AngularPlatformService"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    name: `local`,
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

/***/ "DMUs":
/*!*********************************************************!*\
  !*** ./src/app/services/angular-environment.service.ts ***!
  \*********************************************************/
/*! exports provided: AngularEnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEnvironmentService", function() { return AngularEnvironmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Iq5M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");



class AngularEnvironmentService {
    isProduction() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production;
    }
    getEnvironmentName() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].name;
    }
}
AngularEnvironmentService.ɵfac = function AngularEnvironmentService_Factory(t) { return new (t || AngularEnvironmentService)(); };
AngularEnvironmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AngularEnvironmentService, factory: AngularEnvironmentService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularEnvironmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "LV4Q":
/*!**********************************************!*\
  !*** ./src/app/ngrx/actions/auth.actions.ts ***!
  \**********************************************/
/*! exports provided: AuthStoreActions, LoginUserAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStoreActions", function() { return AuthStoreActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserAction", function() { return LoginUserAction; });
/**************************************
 *
 *  KEYS
 *
 *************************************/
var AuthStoreActions;
(function (AuthStoreActions) {
    AuthStoreActions["LOGIN_USER"] = "[Authentication Store] LOGIN_USER";
    AuthStoreActions["LOGIN_SUCCESSFUL"] = "[Authentication Store] LOGIN_SUCCESSFUL";
})(AuthStoreActions || (AuthStoreActions = {}));
/**
 * Attempt to login the user.
 */
class LoginUserAction {
    constructor(email, password) {
        this.type = AuthStoreActions.LOGIN_USER;
        this.payload = { email, password };
    }
}


/***/ }),

/***/ "SDlX":
/*!***********************************************!*\
  !*** ./src/app/ngrx/reducers/auth.reducer.ts ***!
  \***********************************************/
/*! exports provided: authStoreInitialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authStoreInitialState", function() { return authStoreInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ "LV4Q");

const authStoreInitialState = {
    user: null,
    isLoggedIn: false,
};
function authReducer(state = authStoreInitialState, action) {
    switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthStoreActions"].LOGIN_SUCCESSFUL:
            const loginSuccessfulPayload = action.payload;
            return Object.assign(Object.assign({}, state), { isLoggedIn: true, user: loginSuccessfulPayload });
        default:
            return state;
    }
}


/***/ }),

/***/ "SUiD":
/*!****************************************!*\
  !*** ./src/app/ngrx/reducers/index.ts ***!
  \****************************************/
/*! exports provided: REDUCER_KEY_AUTH, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCER_KEY_AUTH", function() { return REDUCER_KEY_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.reducer */ "SDlX");

const REDUCER_KEY_AUTH = `auth`;
const reducers = {
    [REDUCER_KEY_AUTH]: _auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"],
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Iq5M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "oIEy");



class AppComponent {
    constructor() {
        this.title = `reference-angular`;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `app-root`,
                templateUrl: `./app.component.html`,
                styleUrls: [`./app.component.scss`],
            }]
    }], null, null); })();


/***/ }),

/***/ "YnBx":
/*!******************************************************!*\
  !*** ./src/app/services/angular-platform.service.ts ***!
  \******************************************************/
/*! exports provided: AngularPlatformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPlatformService", function() { return AngularPlatformService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "HKMU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "Iq5M");



class AngularPlatformService {
    constructor(platformId) {
        this.platformId = platformId;
    }
    isBrowser() {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId);
    }
    isServer() {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId);
    }
}
AngularPlatformService.ɵfac = function AngularPlatformService_Factory(t) { return new (t || AngularPlatformService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
AngularPlatformService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AngularPlatformService, factory: AngularPlatformService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngularPlatformService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: rootStateSetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootStateSetter", function() { return rootStateSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Iq5M");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "iLUd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "oIEy");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "4KQp");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ngrx_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngrx/reducers */ "SUiD");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.module */ "334H");












function rootStateSetter(reducer) {
    return (state, action) => {
        if (action.type === `SET_ROOT_STATE`) {
            return action.payload;
        }
        return reducer(state, action);
    };
}
const metaReducers = [rootStateSetter];
const routes = [];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: `serverApp` }),
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                initialNavigation: `enabled`,
            }),
            _services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_ngrx_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"], { metaReducers }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: `serverApp` }),
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                        initialNavigation: `enabled`,
                    }),
                    _services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_ngrx_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"], { metaReducers }),
                ],
                // providers: [{ provide: ErrorHandler, useClass: SentryErrorLogger }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "c9Mc":
/*!*****************************************************!*\
  !*** ./src/app/services/angular-logging.service.ts ***!
  \*****************************************************/
/*! exports provided: LoggingColor, LoggingType, AngularLoggingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingColor", function() { return LoggingColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingType", function() { return LoggingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularLoggingService", function() { return AngularLoggingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Iq5M");


var LoggingColor;
(function (LoggingColor) {
    LoggingColor["GREY"] = "#bababa";
    LoggingColor["BLUE"] = "#4fc1ff";
    LoggingColor["ORANGE"] = "#ffb04f";
    LoggingColor["RED"] = "#d8494a";
})(LoggingColor || (LoggingColor = {}));
var LoggingType;
(function (LoggingType) {
    LoggingType["DEBUG"] = "COMPOSER - Debugging";
    LoggingType["INFO"] = "COMPOSER - Information";
    LoggingType["WARNING"] = "COMPOSER - Warning";
    LoggingType["CRITICAL"] = "COMPOSER - Critical";
})(LoggingType || (LoggingType = {}));
class AngularLoggingService {
    constructor() {
        this.debugLogger = AngularLoggingService.generateLogger(LoggingType.DEBUG);
        this.infoLogger = AngularLoggingService.generateLogger(LoggingType.INFO, LoggingColor.BLUE);
        this.warningLogger = AngularLoggingService.generateLogger(LoggingType.WARNING, LoggingColor.ORANGE);
        this.errorLogger = AngularLoggingService.generateLogger(LoggingType.CRITICAL, LoggingColor.RED);
    }
    /**
     * Higher-order function used to generate loggers with their respective styles.
     *
     * @param type - the type of error. This does not need to match the methods available on DOM {@link Console}
     * @param color - {@link LoggingColor}
     */
    static generateLogger(type, color = LoggingColor.GREY) {
        return console.log.bind(null, `%c${type}`, this.generateStyle(color));
    }
    /**
     * Generates style that wraps {@link LoggingType} in the console
     * @param color - {@link LoggingColor}
     */
    static generateStyle(color) {
        // 10/10/2019 - issue inserting enum directly into return string. Have to place in variable first.
        const convertedColor = `${color}`;
        return `padding:0.2em 0.4em;border-radius:1.5em;background-color:${convertedColor};font-weight:600;color:#333`;
    }
    debug(...args) {
        this.debugLogger(...args);
    }
    info(...args) {
        this.infoLogger(...args);
    }
    warn(...args) {
        this.warningLogger(...args);
    }
    error(...args) {
        this.errorLogger(...args);
    }
}
AngularLoggingService.ɵfac = function AngularLoggingService_Factory(t) { return new (t || AngularLoggingService)(); };
AngularLoggingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AngularLoggingService, factory: AngularLoggingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularLoggingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Iq5M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "oIEy");




const routes = [
    {
        path: `login`,
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~login-login-module~user-profile-user-profile-module"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "F4UR")).then((m) => m.LoginModule),
    },
    {
        path: `profile`,
        loadChildren: () => Promise.all(/*! import() | user-profile-user-profile-module */[__webpack_require__.e("default~login-login-module~user-profile-user-profile-module"), __webpack_require__.e("user-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ./user-profile/user-profile.module */ "TBb5")).then((m) => m.UserProfileModule),
    },
    {
        path: ``,
        redirectTo: `login`,
        pathMatch: `full`,
    },
];
class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Iq5M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/compiler */ "TyUM");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "iLUd");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener(`DOMContentLoaded`, () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch((err) => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map