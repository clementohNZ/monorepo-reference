exports.ids = ["user-profile-user-profile-module"];
exports.modules = {

/***/ "G9k0":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Iq5M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "oIEy");
/* harmony import */ var _clementohnz_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clementohnz/core */ "QIHB");
/* harmony import */ var _clementohnz_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clementohnz_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "HKMU");






class UserProfileComponent {
    constructor(getUserByEmailUseCase, activatedRoute) {
        this.getUserByEmailUseCase = getUserByEmailUseCase;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            this.getUserByEmailUseCase
                .execute({ email: params.email, platform: `Angular` })
                .subscribe((user) => {
                this.user = user;
            });
        });
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clementohnz_core__WEBPACK_IMPORTED_MODULE_2__["GetUserByEmailUseCase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 3, vars: 3, template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.user));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `app-user-profile`,
                templateUrl: `./user-profile.component.html`,
                styleUrls: [`./user-profile.component.scss`],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_clementohnz_core__WEBPACK_IMPORTED_MODULE_2__["GetUserByEmailUseCase"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]]
            }] }]; }, null); })();


/***/ }),

/***/ "TBb5":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "HKMU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "Iq5M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "oIEy");
/* harmony import */ var _clementohnz_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clementohnz/data */ "R/y+");
/* harmony import */ var _clementohnz_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clementohnz_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.component */ "G9k0");
/* harmony import */ var _clementohnz_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clementohnz/core */ "QIHB");
/* harmony import */ var _clementohnz_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_clementohnz_core__WEBPACK_IMPORTED_MODULE_5__);








const routes = [
    {
        path: ``,
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"],
    },
];
class UserProfileModule {
}
UserProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserProfileModule });
UserProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UserProfileModule_Factory(t) { return new (t || UserProfileModule)(); }, providers: [{ provide: _clementohnz_core__WEBPACK_IMPORTED_MODULE_5__["UserRepository"], useClass: _clementohnz_data__WEBPACK_IMPORTED_MODULE_3__["UserWebRepository"] }], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserProfileModule, { declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [],
                providers: [{ provide: _clementohnz_core__WEBPACK_IMPORTED_MODULE_5__["UserRepository"], useClass: _clementohnz_data__WEBPACK_IMPORTED_MODULE_3__["UserWebRepository"] }],
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=user-profile-user-profile-module.js.map