webpackJsonp([5],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_regexPatterns__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(_formBuilder, loader, commonService, navCtrl, globalvars, alertCtrl) {
        this._formBuilder = _formBuilder;
        this.loader = loader;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.globalvars = globalvars;
        this.alertCtrl = alertCtrl;
        this._passwordInputType = "password";
        this._passwordIcon = "eye-off";
        this._loginForm = this._formBuilder.group({
            //Email
            email: ["admin@gmail.com",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validators_regexPatterns__["a" /* regexPatterns */].email)
                ])
            ],
            //Password
            password: ["password",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)
                ])
            ],
        });
    }
    LoginPage.prototype._toggleViewPassword = function (event) {
        event.preventDefault();
        console.info("show password");
        if (this._passwordInputType === "password") {
            this._passwordInputType = "text";
            this._passwordIcon = "eye";
        }
        else {
            this._passwordIcon = "eye-off";
            this._passwordInputType = "password";
        }
        ;
    };
    ;
    LoginPage.prototype._login = function () {
        var _this = this;
        if (this._loginForm.valid) {
            var loading_1 = this.loader.create({
                content: 'loading.....'
            });
            loading_1.present();
            this.commonService.login(this._loginForm.value).then(function (result) {
                loading_1.dismiss();
                if (result.status == "success") {
                    _this.globalvars.setUserdata(JSON.stringify(result.data));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error',
                        message: result.msg,
                        buttons: ['OK'],
                    });
                    alert_1.present();
                    return false;
                }
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    message: 'Something Wrong',
                    buttons: ['OK'],
                });
                alert.present();
                return false;
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\xampp\htdocs\bro_app\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n	<div class="logo" align="center">\n		<img src="assets/imgs/bro-logo.png">\n	</div>\n	<form [formGroup]="_loginForm" (submit)="_login()" method="post" novalidate>\n		<div class="login-spacing">\n			<ion-item>\n	      <ion-label stacked color="transparent">Email</ion-label>\n	      <ion-input formControlName="email" type="email" id="email" [class.invalid]="_loginForm.controls.email.invalid && _loginForm.controls.dirty"></ion-input>\n	    </ion-item>\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.email.hasError(\'required\') && _loginForm.controls.email.touched">\n				<p ion-text text-wrap>Please Enter Email-ID</p>\n			</ion-item>\n			<ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.email.invalid  && _loginForm.controls.email.dirty && _loginForm.controls.email.value!=\'\'">\n				<p ion-text text-wrap>Please use correct email format, e.g.:someone@domain.com.</p>\n			</ion-item>\n	    <ion-item>\n	      <ion-label stacked color="transparent">Password</ion-label>\n	      <ion-input formControlName="password" [type]="_passwordInputType" ></ion-input>\n	    </ion-item>\n	    <ion-icon float-right name="{{_passwordIcon}}" (click)="_toggleViewPassword($event)" class="password-icon"></ion-icon>\n	     <ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.password.hasError(\'required\') && _loginForm.controls.password.touched">\n				<p ion-text text-wrap>Please Enter Password</p>\n			</ion-item>\n			<ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.password.invalid  && _loginForm.controls.password.dirty && _loginForm.controls.password.value!=\'\'">\n				<p ion-text text-wrap>Please enter atleast 6 characters.</p>\n			</ion-item>\n	   <!--  <p text-right>Forgot Password?</p> -->\n	    <div class="submit-btn">\n				<button ion-button block [disabled]="!_loginForm.valid" type="submit">Login</button>\n			</div>\n			\n	  </div>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\bro_app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chapter/chapter.module": [
		283,
		4
	],
	"../pages/commandery/commandery.module": [
		284,
		3
	],
	"../pages/council/council.module": [
		286,
		2
	],
	"../pages/login/login.module": [
		285,
		1
	],
	"../pages/profile/profile.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chapter_chapter__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_council_council__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_commandery_commandery__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_commonService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_globalVars__ = __webpack_require__(30);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chapter_chapter__["a" /* ChapterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_council_council__["a" /* CouncilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_commandery_commandery__["a" /* CommanderyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chapter/chapter.module#ChapterPageModule', name: 'ChapterPage', segment: 'chapter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/commandery/commandery.module#CommanderyPageModule', name: 'CommanderyPage', segment: 'commandery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/council/council.module#CouncilPageModule', name: 'CouncilPage', segment: 'council', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chapter_chapter__["a" /* ChapterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_council_council__["a" /* CouncilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_commandery_commandery__["a" /* CommanderyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__providers_commonService__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_globalVars__["a" /* GlobalVars */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regexPatterns; });
var regexPatterns = {
    nameStrings: /^[a-zA-Z]+$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/,
    numbersOnly: /^\d+$/
};

/* nameStrings Regex - Accepts english characters only, lowercase and uppercase
For all unicode characters use - /\p{L}/
Source: https://stackoverflow.com/questions/3617797/regex-to-match-only-letters */
/* email Regex
Source: http://emailregex.com/  - Javascript example*/
/* password Regex - Restrict passwords to:
https://stackoverflow.com/questions/14850553/javascript-regex-for-password-containing-at-least-8-characters-1-number-1-uppe
Characters: 1 Upper, 1 Lower, 1 Digit at minimum
Length: 6 characters
Start : Any
*/
/* phoneNumber - numbers Only
 */ 
//# sourceMappingURL=regexPatterns.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chapter_chapter__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_council_council__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_commandery_commandery__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_globalVars__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, globalvars, menuCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.globalvars = globalvars;
        this.menuCtrl = menuCtrl;
        this.showLevel1 = null;
        this.showLevel2 = null;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.user = this.globalvars.getUserdata();
        // used for an example of ngFor and navigation
        this.pages =
            [
                {
                    title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */], icon: 'ios-contact', visible: true, dropdown: false, multilevel: []
                },
                {
                    title: 'York Rite', component: '', icon: 'ios-boat', visible: true, dropdown: true,
                    multilevel: [
                        { title: 'Chapter', component: __WEBPACK_IMPORTED_MODULE_6__pages_chapter_chapter__["a" /* ChapterPage */], icon: '' },
                        { title: 'Council', component: __WEBPACK_IMPORTED_MODULE_7__pages_council_council__["a" /* CouncilPage */], icon: '' },
                        { title: 'Commandery', component: __WEBPACK_IMPORTED_MODULE_8__pages_commandery_commandery__["a" /* CommanderyPage */], icon: '' }
                    ]
                },
                { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */], icon: 'ios-power', visible: false, dropdown: false, multilevel: [] }
            ];
    }
    MyApp.prototype.toggleLevel1 = function (idx, dp, p) {
        if (dp == true) {
            if (this.isLevel1Shown(idx)) {
                this.showLevel1 = null;
            }
            else {
                this.showLevel1 = idx;
            }
        }
        else {
            this.menuCtrl.close();
            this.openPage(p);
        }
    };
    ;
    MyApp.prototype.toggleLevel2 = function (idx) {
        if (this.isLevel2Shown(idx)) {
            this.showLevel1 = null;
            this.showLevel2 = null;
        }
        else {
            this.showLevel1 = idx;
            this.showLevel2 = idx;
        }
    };
    ;
    MyApp.prototype.isLevel1Shown = function (idx) {
        return this.showLevel1 === idx;
    };
    MyApp.prototype.shs = function (p) {
        this.menuCtrl.close();
        this.openPage(p);
    };
    MyApp.prototype.isLevel2Shown = function (idx) {
        return this.showLevel1 === idx;
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    MyApp.prototype._logout = function (page) {
        this.globalvars.deleteUserdata();
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\xampp\htdocs\bro_app\src\app\app.html"*/'<!-- <ion-menu id="myMenu" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n       Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <div *ngFor="let p of pages" >\n        <button menuClose ion-item *ngIf="p.visible" (click)="openPage(p)">\n          <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}}\n        </button>\n      </div>\n      <div *ngFor="let p of pages" >\n        <button menuClose ion-item *ngIf="!p.visible && user" (click)="_logout()">\n          <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}}\n        </button>\n      </div>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> - -->\n\n\n<ion-menu id="myMenu" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <div *ngFor="let p of pages;let i = index;" (click)="toggleLevel1(\'idx\'+i,p.dropdown,p)" class="mainmenu">\n      <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}}\n      <ion-icon float-right [name]="isLevel1Shown(\'idx\'+i) ? \'ios-arrow-down\' : \'ios-arrow-forward\'"></ion-icon>\n      <div *ngIf="isLevel1Shown(\'idx\'+i)" class="submenu">\n        <p *ngFor="let s of p.multilevel" (click)="shs(s)">\n            {{s.title}}\n        </p>\n      </div>\n    </div>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\xampp\htdocs\bro_app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__providers_globalVars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\xampp\htdocs\bro_app\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\bro_app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\xampp\htdocs\bro_app\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\bro_app\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalVars = (function () {
    function GlobalVars() {
    }
    GlobalVars.prototype.setUserdata = function (value) {
        this.myGlobalVar = localStorage.setItem('userData', value);
    };
    GlobalVars.prototype.deleteUserdata = function () {
        this.myGlobalVar = localStorage.removeItem('userData');
    };
    GlobalVars.prototype.getUserdata = function () {
        this.myGlobalVar = JSON.parse(localStorage.getItem('userData'));
        return this.myGlobalVar;
    };
    GlobalVars.prototype.getId = function () {
        this.myGlobalVar = JSON.parse(localStorage.getItem('userData'));
        return this.myGlobalVar.id;
    };
    GlobalVars.prototype.getUserRole = function () {
        this.myGlobalVar = JSON.parse(localStorage.getItem('userData'));
        return this.myGlobalVar.role;
    };
    GlobalVars = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalVars);
    return GlobalVars;
}());

//# sourceMappingURL=globalVars.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {SERVER_URL} from './config';


var apiUrl = 'http://localhost/bro/Webservice/';
var CommonService = (function () {
    function CommonService(http) {
        this.http = http;
    }
    CommonService.prototype.login = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(apiUrl + 'users/login', data, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.profile = function (data) {
        //console.log(data);
        return this.http.get(apiUrl + "users/profile?id=" + data.id + "&role=" + data.role_id).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.chapter = function (data) {
        return this.http.get(apiUrl + "users/chapter?id=" + data.id).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.council = function (data) {
        return this.http.get(apiUrl + "users/council?id=" + data.id).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.commandery = function (data) {
        return this.http.get(apiUrl + "users/commandery?id=" + data.id).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.profileData = function (form) {
        var data = form;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(apiUrl + 'users/profile_update', data, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.chapterData = function (form) {
        var data = form;
        //var data = form;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(apiUrl + 'users/chapter_update', data, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.councilData = function (form) {
        var data = form;
        //var data = form;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(apiUrl + 'users/council_update', data, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.commData = function (form) {
        var data = form;
        //var data = form;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(apiUrl + 'users/comm_update', data, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CommonService);
    return CommonService;
}());

//# sourceMappingURL=commonService.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chapter_chapter__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { LoadingController,AlertController } from 'ionic-angular';





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(_formBuilder, navCtrl, commonService, alertCtrl, loader, menu, globalvars, navParams) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.menu = menu;
        this.globalvars = globalvars;
        this.navParams = navParams;
        this._passwordInputType = "password";
        this._passwordIcon = "eye-off";
        this.profile = this.globalvars.getUserdata();
        this.commonService.profile(this.profile).then(function (result) {
            _this.editdata = result.data;
            console.log(_this.editdata);
            if (_this.editdata != '') {
                _this.info = _this.editdata;
            }
        }, function (err) {
            // console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: 'Something Wrong',
                buttons: ['Ok'],
            });
            alert.present();
            return false;
        });
        setTimeout(function () {
            _this.onFormLoad(_this.info);
        }, 3000);
        this._profileForm = this._formBuilder.group({
            id: [""],
            //FIRTSNAME
            first_name: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            password: [""],
            middle_name: [""],
            //LASTNAME
            last_name: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //Email
            email: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //Home Phone
            phone: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //status
            status: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //IS ADMIN
            is_admin: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //MAESON
            mason: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //ADDRESS1
            address1: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //City
            city: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //State
            state: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //Zip
            zip: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //Bob
            dob: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            b_city: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //Zip
            b_state: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            mobile: [""],
            //password:[""],
            home_blue_lodge: [""],
            address2: [""],
            york_rite: [""],
            scottish_rite: [""],
            shriner: [""],
            grotto: [""],
            spouse: [""],
            kids1: [""],
            kids2: [""],
            kids3: [""],
            kids4: [""],
            work: [""],
            off_email: [""],
            notes: [""],
            w_address1: [""],
            w_address2: [""],
            w_city: [""],
            w_state: [""],
            w_zip: [""],
        });
        this.menu = menu;
        this.menu.enable(true, 'myMenu');
    }
    ProfilePage.prototype.onFormLoad = function (form) {
        var loading = this.loader.create({
            content: 'Loading...'
        });
        loading.present();
        this._profileForm = this._formBuilder.group({
            id: [form.info.id],
            first_name: [form.info.first_name,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            last_name: [form.info.last_name,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            middle_name: [form.info.middle_name],
            password: [""],
            email: [form.info.email,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            phone: [form.info.phone,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            status: [form.info.status,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            is_admin: [form.info.is_admin,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            mason: [form.personal.mason,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            address1: [form.home_address.address1,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            address2: [form.home_address.address2,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            city: [form.home_address.city,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            state: [form.home_address.state,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            zip: [form.home_address.zip,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            dob: [form.personal.dob,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            b_city: [form.personal.b_city,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            b_state: [form.personal.b_state,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            home_blue_lodge: [form.info.home_blue_lodge],
            york_rite: [form.affiliations.york_rite],
            scottish_rite: [form.affiliations.scottish_rite],
            shriner: [form.affiliations.shriner],
            grotto: [form.affiliations.grotto],
            spouse: [form.family.spouse],
            kids1: [form.family.kids1],
            kids2: [form.family.kids2],
            kids3: [form.family.kids3],
            kids4: [form.family.kids4],
            work: [form.personal.work],
            off_email: [form.personal.off_email],
            mobile: [form.personal.mobile],
            notes: [form.personal.notes],
            w_address1: [form.work_address.w_address1],
            w_address2: [form.work_address.w_address2],
            w_city: [form.work_address.w_city],
            w_state: [form.work_address.w_state],
            w_zip: [form.work_address.w_zip]
        });
        loading.dismiss();
    };
    ProfilePage.prototype._toggleViewPassword = function (event) {
        event.preventDefault();
        console.info("show password");
        if (this._passwordInputType === "password") {
            this._passwordInputType = "text";
            this._passwordIcon = "eye";
        }
        else {
            this._passwordIcon = "eye-off";
            this._passwordInputType = "password";
        }
        ;
    };
    ;
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype._submitProfile = function () {
        var _this = this;
        var loading = this.loader.create({
            content: 'Loading...'
        });
        if (this._profileForm.valid) {
            loading.present();
            this.commonService.profileData(this._profileForm.value).then(function (result) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: result.status.toUpperCase(),
                    message: result.msg,
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                //this.navCtrl.push(ChapterPage);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__chapter_chapter__["a" /* ChapterPage */]);
                            }
                        }],
                });
                alert.present();
            }, function (err) {
                console.log(err);
                loading.dismiss();
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    message: 'Something Wrong',
                    buttons: ['Ok'],
                });
                alert.present();
                return false;
            });
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\xampp\htdocs\bro_app\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n		<form [formGroup]="_profileForm" (submit)="_submitProfile()" method="post" novalidate [hidden]="formOne">\n	<ion-input  type="hidden" formControlName="id"></ion-input>\n	<ion-title>Personal Data</ion-title>\n    <ion-item>\n    <ion-label stacked color="transparent">Mason?</ion-label>\n    <ion-select formControlName="mason">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.mason.hasError(\'required\') && _profileForm.controls.mason.touched">\n				<p ion-text text-wrap>Mason is Required</p>\n	</ion-item>\n    \n    <ion-item>\n    <ion-label stacked color="transparent">Status</ion-label>\n    <ion-select formControlName="status">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Active">Active</ion-option>\n      <ion-option value="Inactive">Inactive</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.status.hasError(\'required\') && _profileForm.controls.status.touched">\n				<p ion-text text-wrap>Status is Required</p>\n </ion-item>\n\n    <ion-item>\n    <ion-label stacked color="transparent">Is Admin?</ion-label>\n    <ion-select formControlName="is_admin">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.is_admin.hasError(\'required\') && _profileForm.controls.is_admin.touched">\n				<p ion-text text-wrap>User is Required</p>\n	</ion-item>\n  \n   <ion-item>\n      <ion-label stacked color="transparent">Password</ion-label>\n       <ion-input formControlName="password" [type]="_passwordInputType"></ion-input>\n </ion-item>\n\n <ion-icon float-right name="{{_passwordIcon}}" (click)="_toggleViewPassword($event)" class="password-icon"></ion-icon>\n \n   <ion-item>\n	      <ion-label stacked color="transparent">Firstname</ion-label>\n	      <ion-input  type="text" formControlName="first_name"></ion-input>\n	    </ion-item>\n\n	     <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.first_name.hasError(\'required\') && _profileForm.controls.first_name.touched">\n				<p ion-text text-wrap>Please Enter Firstname</p>\n			</ion-item>\n    \n    <ion-item>\n	      <ion-label stacked color="transparent">Middle Name</ion-label>\n	      <ion-input  type="text" formControlName="middle_name"></ion-input>\n	    </ion-item>\n \n   <ion-item>\n	      <ion-label stacked color="transparent">Lastname</ion-label>\n	      <ion-input  type="text" formControlName="last_name"></ion-input>\n	    </ion-item>\n\n    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.last_name.hasError(\'required\') && _profileForm.controls.last_name.touched">\n				<p ion-text text-wrap>Please Enter Lastname</p>\n	</ion-item>\n   \n    	\n\n    <ion-item>\n\n	      <ion-label stacked color="transparent">Phone</ion-label>\n	      <ion-input  type="text" formControlName="mobile"></ion-input>\n	    </ion-item>\n    \n    <ion-item>\n	      <ion-label stacked color="transparent">Home phone</ion-label>\n	      <ion-input  type="text" formControlName="phone"></ion-input>\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.phone.hasError(\'required\') && _profileForm.controls.phone.touched">\n				<p ion-text text-wrap>Please Enter Phone Number</p>\n	 </ion-item>\n   \n	<ion-title>Home Address</ion-title>\n    \n   <ion-item>\n	      <ion-label stacked color="transparent">Address1</ion-label>\n	      <ion-input  type="text" formControlName="address1"></ion-input>\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.address1.hasError(\'required\') && _profileForm.controls.address1.touched">\n				<p ion-text text-wrap>Please Enter Address1</p>\n	  </ion-item>\n    \n    <ion-item>\n	      <ion-label stacked color="transparent">Address2</ion-label>\n	      <ion-input  type="text" formControlName="address2"></ion-input>\n	    </ion-item>\n    \n   <ion-item>\n	      <ion-label stacked color="transparent">City</ion-label>\n	      <ion-input  type="text" formControlName="city"></ion-input>\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.city.hasError(\'required\') && _profileForm.controls.city.touched">\n				<p ion-text text-wrap>Please Enter City</p>\n	  </ion-item>\n   \n    <ion-item>\n    <ion-label stacked color="transparent">State</ion-label>\n		 <ion-select formControlName="state">\n		 <ion-option value="" selected="selected">-None-</ion-option>\n		 <ion-option value="AL">Alabama</ion-option>\n		 <ion-option value="AK">Alaska</ion-option>\n		 <ion-option value="AZ">Arizona</ion-option>\n		 <ion-option value="AR">Arkansas</ion-option>\n		 <ion-option value="CA">California</ion-option>\n		 <ion-option value="CO">Colorado</ion-option>\n		 <ion-option value="CT">Connecticut</ion-option>\n		 <ion-option value="DE">Delaware</ion-option>\n		 <ion-option value="FL">Florida</ion-option>\n		 <ion-option value="GA">Georgia</ion-option>\n		 <ion-option value="HI">Hawaii</ion-option>\n		 <ion-option value="ID">Idaho</ion-option>\n		 <ion-option value="IL">Illinois</ion-option>\n		 <ion-option value="IN">Indiana</ion-option>\n		 <ion-option value="IA">Iowa</ion-option>\n		 <ion-option value="KS">Kansas</ion-option>\n		 <ion-option value="KY">Kentucky</ion-option>\n		 <ion-option value="LA">Louisiana</ion-option>\n		 <ion-option value="ME">Maine</ion-option>\n		<ion-option value="MD">Maryland</ion-option>\n		<ion-option value="MA">Massachusetts</ion-option>\n		<ion-option value="MI">Michigan</ion-option>\n		<ion-option value="MN">Minnesota</ion-option>\n		<ion-option value="MS">Mississippi</ion-option>\n		<ion-option value="MO">Missouri</ion-option>\n		<ion-option value="MT">Montana</ion-option>\n		<ion-option value="NE">Nebraska</ion-option>\n		<ion-option value="NV">Nevada</ion-option>\n		<ion-option value="NH">New Hampshire</ion-option>\n		<ion-option value="NJ">New Jersey</ion-option>\n		<ion-option value="NM">New Mexico</ion-option>\n		<ion-option value="NY">New York</ion-option>\n		<ion-option value="NC">North Carolina</ion-option>\n		<ion-option value="ND">North Dakota</ion-option>\n		<ion-option value="OH">Ohio</ion-option>\n		<ion-option value="OK">Oklahoma</ion-option>\n		<ion-option value="OR">Oregon</ion-option>\n		<ion-option value="PA">Pennsylvania</ion-option>\n		<ion-option value="RI">Rhode Island</ion-option>\n		<ion-option value="SC">South Carolina</ion-option>\n		<ion-option value="SD">South Dakota</ion-option>\n		<ion-option value="TN">Tennessee</ion-option>\n		<ion-option value="TX">Texas</ion-option>\n		<ion-option value="UT">Utah</ion-option>\n		<ion-option value="VT">Vermont</ion-option>\n		<ion-option value="VA">Virginia</ion-option>\n		<ion-option value="WA">Washington</ion-option>\n		<ion-option value="WV">West Virginia</ion-option>\n		<ion-option value="WI">Wisconsin</ion-option>\n		<ion-option value="WY">Wyoming</ion-option>\n</ion-select>\n  </ion-item>\n  <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.state.hasError(\'required\') && _profileForm.controls.state.touched">\n				<p ion-text text-wrap>State is Required</p>\n	  </ion-item>\n \n    <ion-item>\n	      <ion-label stacked color="transparent">Zip</ion-label>\n	      <ion-input  type="text" formControlName="zip"></ion-input>\n	    </ion-item>\n\n	     <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.zip.hasError(\'required\') && _profileForm.controls.zip.touched">\n				<p ion-text text-wrap>Please Enter Zip</p>\n	  </ion-item>\n    	\n   <ion-title>Affiliations</ion-title>\n\n    <ion-item>\n    <ion-label stacked color="transparent">York Rite?</ion-label>\n    <ion-select formControlName="york_rite">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n    \n    <ion-item>\n    <ion-label stacked color="transparent">Scottish Rite?</ion-label>\n    <ion-select formControlName="scottish_rite">\n     <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n    \n    <ion-item>\n    <ion-label stacked color="transparent">Shriners?</ion-label>\n    <ion-select formControlName="shriner">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n    \n    <ion-item>\n    <ion-label stacked color="transparent">Grotto?</ion-label>\n    <ion-select formControlName="grotto">\n     <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n   \n<ion-title>Family</ion-title>\n\n    <ion-item>\n	      <ion-label stacked color="transparent">Spouse</ion-label>\n	      <ion-input  type="text" formControlName="spouse"></ion-input>\n	    </ion-item>\n    \n   <ion-item>\n	      <ion-label stacked color="transparent">Kids</ion-label>\n	       <ion-input  type="text" formControlName="kids1"></ion-input>\n	    </ion-item>\n   \n    <ion-item>\n	       <ion-input  type="text" formControlName="kids2"></ion-input>\n	    </ion-item>\n  \n   <ion-item>\n	     \n	       <ion-input  type="text" formControlName="kids3"></ion-input>\n	    </ion-item>\n\n   <ion-item>\n	     \n	        <ion-input  type="text" formControlName="kids4"></ion-input>\n	    </ion-item>\n\n<ion-title>Work Address</ion-title>\n\n    <ion-item>\n	      <ion-label stacked color="transparent">Work</ion-label>\n	      <ion-input  type="text" formControlName="work"></ion-input>\n	    </ion-item>\n \n   <ion-item>\n	      <ion-label stacked color="transparent">Office Email</ion-label>\n	      <ion-input  type="text" formControlName="off_email"></ion-input>\n	    </ion-item>\n   \n \n	     <ion-item>\n	       <ion-label stacked color="transparent">Personal Email</ion-label>\n	      <ion-input  type="text" formControlName="email"></ion-input>\n	    </ion-item>\n\n    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.email.hasError(\'required\') && _profileForm.controls.email.touched">\n				<p ion-text text-wrap>Please Enter Email</p>\n	</ion-item>\n\n   \n   <ion-item>\n	      <ion-label stacked color="transparent">Address1</ion-label>\n	      <ion-input  type="text" formControlName="w_address1"></ion-input>\n	    </ion-item>\n\n   <ion-item>\n	      <ion-label stacked color="transparent">Address2</ion-label>\n	      <ion-input  type="text" formControlName="w_address2"></ion-input>\n	    </ion-item>\n    \n   <ion-item>\n	      <ion-label stacked color="transparent">Date of Birth</ion-label>\n	      <ion-input  type="text" formControlName="dob"></ion-input>\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.dob.hasError(\'required\') && _profileForm.controls.dob.touched">\n				<p ion-text text-wrap>Please Enter DOB</p>\n	</ion-item>\n    \n   <ion-item>\n	      <ion-label stacked color="transparent">Birth (City)</ion-label>\n	      <ion-input  type="text" formControlName="b_city"></ion-input>\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.b_city.hasError(\'required\') && _profileForm.controls.b_city.touched">\n				<p ion-text text-wrap>Please Enter Birth (City)</p>\n	</ion-item>\n   \n   <ion-item>\n	      <ion-label stacked color="transparent">Birth (State)</ion-label>\n		 <ion-select formControlName="b_state">\n		 <ion-option value="" selected="selected">-None-</ion-option>\n		 <ion-option value="AL">Alabama</ion-option>\n		 <ion-option value="AK">Alaska</ion-option>\n		 <ion-option value="AZ">Arizona</ion-option>\n		 <ion-option value="AR">Arkansas</ion-option>\n		 <ion-option value="CA">California</ion-option>\n		 <ion-option value="CO">Colorado</ion-option>\n		 <ion-option value="CT">Connecticut</ion-option>\n		 <ion-option value="DE">Delaware</ion-option>\n		 <ion-option value="FL">Florida</ion-option>\n		 <ion-option value="GA">Georgia</ion-option>\n		 <ion-option value="HI">Hawaii</ion-option>\n		 <ion-option value="ID">Idaho</ion-option>\n		 <ion-option value="IL">Illinois</ion-option>\n		 <ion-option value="IN">Indiana</ion-option>\n		 <ion-option value="IA">Iowa</ion-option>\n		 <ion-option value="KS">Kansas</ion-option>\n		 <ion-option value="KY">Kentucky</ion-option>\n		 <ion-option value="LA">Louisiana</ion-option>\n		 <ion-option value="ME">Maine</ion-option>\n		<ion-option value="MD">Maryland</ion-option>\n		<ion-option value="MA">Massachusetts</ion-option>\n		<ion-option value="MI">Michigan</ion-option>\n		<ion-option value="MN">Minnesota</ion-option>\n		<ion-option value="MS">Mississippi</ion-option>\n		<ion-option value="MO">Missouri</ion-option>\n		<ion-option value="MT">Montana</ion-option>\n		<ion-option value="NE">Nebraska</ion-option>\n		<ion-option value="NV">Nevada</ion-option>\n		<ion-option value="NH">New Hampshire</ion-option>\n		<ion-option value="NJ">New Jersey</ion-option>\n		<ion-option value="NM">New Mexico</ion-option>\n		<ion-option value="NY">New York</ion-option>\n		<ion-option value="NC">North Carolina</ion-option>\n		<ion-option value="ND">North Dakota</ion-option>\n		<ion-option value="OH">Ohio</ion-option>\n		<ion-option value="OK">Oklahoma</ion-option>\n		<ion-option value="OR">Oregon</ion-option>\n		<ion-option value="PA">Pennsylvania</ion-option>\n		<ion-option value="RI">Rhode Island</ion-option>\n		<ion-option value="SC">South Carolina</ion-option>\n		<ion-option value="SD">South Dakota</ion-option>\n		<ion-option value="TN">Tennessee</ion-option>\n		<ion-option value="TX">Texas</ion-option>\n		<ion-option value="UT">Utah</ion-option>\n		<ion-option value="VT">Vermont</ion-option>\n		<ion-option value="VA">Virginia</ion-option>\n		<ion-option value="WA">Washington</ion-option>\n		<ion-option value="WV">West Virginia</ion-option>\n		<ion-option value="WI">Wisconsin</ion-option>\n		<ion-option value="WY">Wyoming</ion-option>\n</ion-select>\n	    </ion-item>\n    \n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.b_state.hasError(\'required\') && _profileForm.controls.b_state.touched">\n				<p ion-text text-wrap>Birth (State) is Required</p>\n	</ion-item>\n   \n   <ion-item>\n	      <ion-label stacked color="transparent">City</ion-label>\n	      <ion-input  type="text" formControlName="w_city"></ion-input>\n	    </ion-item>\n  \n   <ion-item>\n	     <ion-label stacked color="transparent">State</ion-label>\n		 <ion-select formControlName="w_state" >\n		 <ion-option value="" selected="selected">-None-</ion-option>\n		 <ion-option value="AL">Alabama</ion-option>\n		 <ion-option value="AK">Alaska</ion-option>\n		 <ion-option value="AZ">Arizona</ion-option>\n		 <ion-option value="AR">Arkansas</ion-option>\n		 <ion-option value="CA">California</ion-option>\n		 <ion-option value="CO">Colorado</ion-option>\n		 <ion-option value="CT">Connecticut</ion-option>\n		 <ion-option value="DE">Delaware</ion-option>\n		 <ion-option value="FL">Florida</ion-option>\n		 <ion-option value="GA">Georgia</ion-option>\n		 <ion-option value="HI">Hawaii</ion-option>\n		 <ion-option value="ID">Idaho</ion-option>\n		 <ion-option value="IL">Illinois</ion-option>\n		 <ion-option value="IN">Indiana</ion-option>\n		 <ion-option value="IA">Iowa</ion-option>\n		 <ion-option value="KS">Kansas</ion-option>\n		 <ion-option value="KY">Kentucky</ion-option>\n		 <ion-option value="LA">Louisiana</ion-option>\n		 <ion-option value="ME">Maine</ion-option>\n		<ion-option value="MD">Maryland</ion-option>\n		<ion-option value="MA">Massachusetts</ion-option>\n		<ion-option value="MI">Michigan</ion-option>\n		<ion-option value="MN">Minnesota</ion-option>\n		<ion-option value="MS">Mississippi</ion-option>\n		<ion-option value="MO">Missouri</ion-option>\n		<ion-option value="MT">Montana</ion-option>\n		<ion-option value="NE">Nebraska</ion-option>\n		<ion-option value="NV">Nevada</ion-option>\n		<ion-option value="NH">New Hampshire</ion-option>\n		<ion-option value="NJ">New Jersey</ion-option>\n		<ion-option value="NM">New Mexico</ion-option>\n		<ion-option value="NY">New York</ion-option>\n		<ion-option value="NC">North Carolina</ion-option>\n		<ion-option value="ND">North Dakota</ion-option>\n		<ion-option value="OH">Ohio</ion-option>\n		<ion-option value="OK">Oklahoma</ion-option>\n		<ion-option value="OR">Oregon</ion-option>\n		<ion-option value="PA">Pennsylvania</ion-option>\n		<ion-option value="RI">Rhode Island</ion-option>\n		<ion-option value="SC">South Carolina</ion-option>\n		<ion-option value="SD">South Dakota</ion-option>\n		<ion-option value="TN">Tennessee</ion-option>\n		<ion-option value="TX">Texas</ion-option>\n		<ion-option value="UT">Utah</ion-option>\n		<ion-option value="VT">Vermont</ion-option>\n		<ion-option value="VA">Virginia</ion-option>\n		<ion-option value="WA">Washington</ion-option>\n		<ion-option value="WV">West Virginia</ion-option>\n		<ion-option value="WI">Wisconsin</ion-option>\n		<ion-option value="WY">Wyoming</ion-option>\n</ion-select>\n	    </ion-item>\n    \n\n   <ion-item>\n	      <ion-label stacked color="transparent">Zip</ion-label>\n	      <ion-input  type="text" formControlName="w_zip"></ion-input>\n	    </ion-item> \n		\n		<ion-item>\n	      <ion-label stacked color="transparent">Notes</ion-label>\n	      <ion-input  type="text" formControlName="notes"></ion-input>\n	    </ion-item>\n	\n	    <button ion-button full  [disabled]="!_profileForm.valid" type="submit">Save</button> \n	   \n</form>\n<!-- <ion-input type="text" placeholder="Enter Your First Name" value="{{profile.first_name}}">\n	\n</ion-input> -->\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\bro_app\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChapterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__council_council__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChapterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChapterPage = (function () {
    function ChapterPage(navCtrl, navParams, _formBuilder, globalvars, commonService, loader, menu, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._formBuilder = _formBuilder;
        this.globalvars = globalvars;
        this.commonService = commonService;
        this.loader = loader;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.user_id = this.globalvars.getUserdata();
        this.commonService.chapter(this.user_id).then(function (result) {
            _this.editdata = result.data;
            if (_this.editdata != '') {
                _this.chapter = _this.editdata;
            }
        }, function (err) {
            // console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: 'Something Wrong',
                buttons: ['Ok'],
            });
            alert.present();
            return false;
        });
        setTimeout(function () {
            _this.onFormLoad(_this.chapter);
        }, 3000);
        this._chapterForm = this._formBuilder.group({
            id: [""],
            user_id: [""],
            //chapter_name
            chapter_name: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //chapter_no
            chapter_no: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //district_no
            district_no: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //top_line_signer
            top_line_signer: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //second_line_signer
            second_line_signer: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //date_joined
            date_joined: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            most_high_priest: [""],
            year1: [""],
            district_high_priest: [""],
            year2: [""],
            hight_priest: [""],
            year3: [""],
            king: [""],
            scribe: [""],
            secretary: [""],
            treasurer: [""],
            capt_host: [""],
            principal_sojourner: [""],
            ra_captain: [""],
            master_vef_1: [""],
            master_vef_2: [""],
            master_vef_3: [""],
            chaptain: [""],
            sentinel: [""]
        });
        this.menu = menu;
        this.menu.enable(true, 'myMenu');
    }
    ChapterPage.prototype.onFormLoad = function (form) {
        var loading = this.loader.create({
            content: 'Loading...'
        });
        loading.present();
        this.user_id = this.globalvars.getUserdata();
        this._chapterForm = this._formBuilder.group({
            id: [form.id],
            user_id: [this.user_id.id],
            chapter_name: [form.chapter_name,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            chapter_no: [form.chapter_no,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            district_no: [form.district_no,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            top_line_signer: [form.top_line_signer,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            second_line_signer: [form.second_line_signer,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            date_joined: [form.date_joined,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            most_high_priest: [form.most_high_priest],
            year1: [form.year1],
            district_high_priest: [form.district_high_priest],
            year2: [form.year2],
            hight_priest: [form.hight_priest],
            year3: [form.year3],
            king: [form.king],
            scribe: [form.scribe],
            secretary: [form.secretary],
            treasurer: [form.treasurer],
            capt_host: [form.capt_host],
            principal_sojourner: [form.principal_sojourner],
            ra_captain: [form.ra_captain],
            master_vef_1: [form.master_vef_1],
            master_vef_2: [form.master_vef_2],
            master_vef_3: [form.master_vef_3],
            chaptain: [form.chaptain],
            sentinel: [form.sentinel]
        });
        loading.dismiss();
    };
    ChapterPage.prototype._submitChapter = function () {
        var _this = this;
        var loading = this.loader.create({
            content: 'Loading...'
        });
        if (this._chapterForm.valid) {
            loading.present();
            this.commonService.chapterData(this._chapterForm.value).then(function (result) {
                //console.log(result);
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: result.status.toUpperCase(),
                    message: result.msg,
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                //this.navCtrl.push(CouncilPage);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__council_council__["a" /* CouncilPage */]);
                            }
                        }],
                });
                alert.present();
            }, function (err) {
                console.log(err);
                loading.dismiss();
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    message: 'Something Wrong',
                    buttons: ['Ok'],
                });
                alert.present();
                return false;
            });
        }
    };
    ChapterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChapterPage');
    };
    ChapterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chapter',template:/*ion-inline-start:"D:\xampp\htdocs\bro_app\src\pages\chapter\chapter.html"*/'<!--\n  Generated template for the ChapterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>chapter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<form [formGroup]="_chapterForm" (submit)="_submitChapter()" method="post" novalidate [hidden]="formOne">\n    \n    <ion-input  type="hidden" formControlName="user_id"></ion-input>\n		<ion-item>\n	      <ion-label stacked color="transparent">Chapter Name</ion-label>\n	      <ion-input  type="text" formControlName="chapter_name"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_chapterForm.controls.chapter_name.hasError(\'required\') && _chapterForm.controls.chapter_name.touched">\n        <p ion-text text-wrap>Please Enter Chapter Name</p>\n      </ion-item>\n\n	    <ion-item>\n	      <ion-label stacked color="transparent">Chapter No</ion-label>\n	      <ion-input  type="text" formControlName="chapter_no"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_chapterForm.controls.chapter_no.hasError(\'required\') && _chapterForm.controls.chapter_no.touched">\n        <p ion-text text-wrap>Please Enter Chapter No</p>\n      </ion-item>\n\n	    <ion-item>\n	      <ion-label stacked color="transparent">District No</ion-label>\n	      <ion-input  type="text" formControlName="district_no"></ion-input>\n	    </ion-item>\n	    \n       <ion-item class="login-error" no-lines no-padding *ngIf="_chapterForm.controls.district_no.hasError(\'required\') && _chapterForm.controls.district_no.touched">\n        <p ion-text text-wrap>Please Enter District No</p>\n      </ion-item>\n\n       <ion-item>\n	      <ion-label stacked color="transparent">Chapter Top Line Singer</ion-label>\n	      <ion-input  type="text" formControlName="top_line_signer"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_chapterForm.controls.top_line_signer.hasError(\'required\') && _chapterForm.controls.top_line_signer.touched">\n        <p ion-text text-wrap>Please Enter Chapter Top Line Singer</p>\n      </ion-item>\n\n	    <ion-item>\n	      <ion-label stacked color="transparent">Second Line Singer</ion-label>\n	      <ion-input  type="text" formControlName="second_line_signer"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_chapterForm.controls.second_line_signer.hasError(\'required\') && _chapterForm.controls.second_line_signer.touched">\n        <p ion-text text-wrap>Please Enter Second Line Singer</p>\n      </ion-item>\n	    \n	    <ion-item>\n	      <ion-label stacked color="transparent">Date Joined</ion-label>\n	      <ion-input  type="date" formControlName="date_joined"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_chapterForm.controls.date_joined.hasError(\'required\') && _chapterForm.controls.date_joined.touched">\n        <p ion-text text-wrap>Please Enter Date Joined</p>\n      </ion-item>\n\n	 <ion-item>\n	<ion-label stacked color="transparent">Most High Priest?</ion-label>\n    <ion-select formControlName="most_high_priest">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">King?</ion-label>\n    <ion-select formControlName="king">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">R.A Captain?</ion-label>\n    <ion-select formControlName="ra_captain">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n <ion-item>\n      <ion-label stacked color="transparent">Year</ion-label>\n      <ion-input  type="text" formControlName="year1"></ion-input>\n    </ion-item>\n\n    <ion-item>\n	<ion-label stacked color="transparent">Scribe?</ion-label>\n    <ion-select formControlName="scribe">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n    <ion-item>\n	<ion-label stacked color="transparent">Master 3rd Vef?</ion-label>\n    <ion-select formControlName="master_vef_3">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">District High Priest?</ion-label>\n    <ion-select formControlName="district_high_priest">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">Secretary?</ion-label>\n    <ion-select formControlName="secretary">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">Master 2nd Vef?</ion-label>\n    <ion-select formControlName="master_vef_2">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label stacked color="transparent">Year</ion-label>\n      <ion-input  type="text" formControlName="year2"></ion-input>\n    </ion-item>\n\n    <ion-item>\n	<ion-label stacked color="transparent">Treasurer</ion-label>\n    <ion-select formControlName="treasurer">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Master 1st Vef?</ion-label>\n    <ion-select formControlName="master_vef_1">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">High Priest?</ion-label>\n    <ion-select formControlName="hight_priest">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Capt.Host</ion-label>\n    <ion-select formControlName="capt_host">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">Chaptain?</ion-label>\n    <ion-select formControlName="chaptain">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label stacked color="transparent">Year</ion-label>\n      <ion-input  type="text" formControlName="year3"></ion-input>\n    </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Principal Sojourner?</ion-label>\n    <ion-select formControlName="principal_sojourner">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">Sentinel?</ion-label>\n    <ion-select formControlName="sentinel">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n <button ion-button full  type="submit">Save</button>\n\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"D:\xampp\htdocs\bro_app\src\pages\chapter\chapter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_4__providers_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChapterPage);
    return ChapterPage;
}());

//# sourceMappingURL=chapter.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouncilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commandery_commandery__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CouncilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CouncilPage = (function () {
    function CouncilPage(navCtrl, navParams, _formBuilder, globalvars, commonService, loader, menu, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._formBuilder = _formBuilder;
        this.globalvars = globalvars;
        this.commonService = commonService;
        this.loader = loader;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.user_id = this.globalvars.getUserdata();
        this.commonService.council(this.user_id).then(function (result) {
            _this.editdata = result.data;
            if (_this.editdata != '') {
                _this.council = _this.editdata;
            }
        }, function (err) {
            // console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: 'Something Wrong',
                buttons: ['Ok'],
            });
            alert.present();
            return false;
        });
        setTimeout(function () {
            _this.onFormLoad(_this.council);
        }, 3000);
        this._councilForm = this._formBuilder.group({
            id: [""],
            user_id: [""],
            //council_name
            council_name: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //district_no
            district_no: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //council_no
            council_no: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //top_line_signer
            top_line_signer: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //second_line_signer
            second_line_signer: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //date_joined
            date_joined: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            most_il_master: [""],
            deputy_master: [""],
            steward: [""],
            year1: [""],
            princ_cond_of_work: [""],
            chaptain: [""],
            district_il_master: [""],
            recorder: [""],
            sentinel: [""],
            year2: [""],
            treasurer: [""],
            marshal: [""],
            illustrious_master: [""],
            capt_of_guard: [""],
            year3: [""],
            cond_of_council: [""]
        });
        this.menu = menu;
        this.menu.enable(true, 'myMenu');
    }
    CouncilPage.prototype.onFormLoad = function (form) {
        var loading = this.loader.create({
            content: 'Loading...'
        });
        loading.present();
        this.user_id = this.globalvars.getUserdata();
        this._councilForm = this._formBuilder.group({
            id: [form.id],
            user_id: [this.user_id.id],
            council_name: [form.council_name,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            council_no: [form.council_no,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            district_no: [form.district_no,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            top_line_signer: [form.top_line_signer,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            second_line_signer: [form.second_line_signer,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            date_joined: [form.date_joined,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            most_il_master: [form.most_il_master],
            deputy_master: [form.deputy_master],
            year1: [form.year1],
            princ_cond_of_work: [form.princ_cond_of_work],
            chaptain: [form.chaptain],
            steward: [form.steward],
            recorder: [form.recorder],
            district_il_master: [form.district_il_master],
            sentinel: [form.sentinel],
            treasurer: [form.treasurer],
            year2: [form.year2],
            marshal: [form.marshal],
            illustrious_master: [form.illustrious_master],
            capt_of_guard: [form.capt_of_guard],
            year3: [form.year3],
            cond_of_council: [form.cond_of_council]
        });
        loading.dismiss();
    };
    CouncilPage.prototype._submitCouncil = function () {
        var _this = this;
        var loading = this.loader.create({
            content: 'Loading...'
        });
        if (this._councilForm.valid) {
            loading.present();
            this.commonService.councilData(this._councilForm.value).then(function (result) {
                //console.log(result);
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: result.status.toUpperCase(),
                    message: result.msg,
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                //this.navCtrl.push(CommanderyPage);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__commandery_commandery__["a" /* CommanderyPage */]);
                            }
                        }],
                });
                alert.present();
            }, function (err) {
                console.log(err);
                loading.dismiss();
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    message: 'Something Wrong',
                    buttons: ['Ok'],
                });
                alert.present();
                return false;
            });
        }
    };
    CouncilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CouncilPage');
    };
    CouncilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-council',template:/*ion-inline-start:"D:\xampp\htdocs\bro_app\src\pages\council\council.html"*/'\n	<!--\n  Generated template for the ChapterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>council</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<form [formGroup]="_councilForm"  (submit)="_submitCouncil()" method="post" novalidate [hidden]="formOne">\n    \n    <ion-input  type="hidden" formControlName="user_id"></ion-input>\n		<ion-item>\n	      <ion-label stacked color="transparent">Council Name</ion-label>\n	      <ion-input  type="text" formControlName="council_name"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_councilForm.controls.council_name.hasError(\'required\') && _councilForm.controls.council_name.touched">\n        <p ion-text text-wrap>Please Enter Council Name</p>\n      </ion-item>\n\n	    <ion-item>\n	      <ion-label stacked color="transparent">Council Top Line Singer</ion-label>\n	      <ion-input  type="text" formControlName="top_line_signer"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_councilForm.controls.top_line_signer.hasError(\'required\') && _councilForm.controls.top_line_signer.touched">\n        <p ion-text text-wrap>Please Enter Council Top Line Singer</p>\n      </ion-item>\n\n	    <ion-item>\n	      <ion-label stacked color="transparent">Council No</ion-label>\n	      <ion-input  type="text" formControlName="council_no"></ion-input>\n	    </ion-item>\n	    \n       <ion-item class="login-error" no-lines no-padding *ngIf="_councilForm.controls.council_no.hasError(\'required\') && _councilForm.controls.council_no.touched">\n        <p ion-text text-wrap>Please Enter Council No</p>\n      </ion-item>\n\n       <ion-item>\n	      <ion-label stacked color="transparent">Second Line Singer</ion-label>\n	      <ion-input  type="text" formControlName="second_line_signer"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_councilForm.controls.second_line_signer.hasError(\'required\') && _councilForm.controls.second_line_signer.touched">\n        <p ion-text text-wrap>Please Enter Second Line Singer</p>\n      </ion-item>\n\n	    <ion-item>\n	      <ion-label stacked color="transparent">District No</ion-label>\n	      <ion-input  type="text" formControlName="district_no"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_councilForm.controls.district_no.hasError(\'required\') && _councilForm.controls.district_no.touched">\n        <p ion-text text-wrap>Please Enter District No</p>\n      </ion-item>\n	    \n	    <ion-item>\n	      <ion-label stacked color="transparent">Date Joined</ion-label>\n	      <ion-input  type="date" formControlName="date_joined"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_councilForm.controls.date_joined.hasError(\'required\') && _councilForm.controls.date_joined.touched">\n        <p ion-text text-wrap>Please Enter Date Joined</p>\n      </ion-item>\n\n	 <ion-item>\n	<ion-label stacked color="transparent">Most IL Master?</ion-label>\n    <ion-select formControlName="most_il_master">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Deputy Master?</ion-label>\n    <ion-select formControlName="deputy_master">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Steward?</ion-label>\n    <ion-select formControlName="steward">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n <ion-item>\n      <ion-label stacked color="transparent">Year</ion-label>\n      <ion-input  type="text" formControlName="year1"></ion-input>\n    </ion-item>\n\n    <ion-item>\n	<ion-label stacked color="transparent">Princ. Cond. of Work?</ion-label>\n    <ion-select formControlName="princ_cond_of_work">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n    <ion-item>\n	<ion-label stacked color="transparent">Chaptain?</ion-label>\n    <ion-select formControlName="chaptain">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">District IL Master?</ion-label>\n    <ion-select formControlName="district_il_master">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">Recorder?</ion-label>\n    <ion-select formControlName="recorder">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">Sentinel?</ion-label>\n    <ion-select formControlName="sentinel">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label stacked color="transparent">Year</ion-label>\n      <ion-input  type="text" formControlName="year2"></ion-input>\n    </ion-item>\n\n    <ion-item>\n	<ion-label stacked color="transparent">Treasurer</ion-label>\n    <ion-select formControlName="treasurer">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Marshal?</ion-label>\n    <ion-select formControlName="marshal">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">Illustrious Master?</ion-label>\n    <ion-select formControlName="illustrious_master">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Capt. of the Guard?</ion-label>\n    <ion-select formControlName="capt_of_guard">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label stacked color="transparent">Year</ion-label>\n      <ion-input  type="text" formControlName="year3"></ion-input>\n    </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Cond. of Council?</ion-label>\n    <ion-select formControlName="cond_of_council">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n <button ion-button full  [disabled]="!_councilForm.valid" type="submit">Save</button>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\bro_app\src\pages\council\council.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CouncilPage);
    return CouncilPage;
}());

//# sourceMappingURL=council.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommanderyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CommanderyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommanderyPage = (function () {
    function CommanderyPage(navCtrl, navParams, _formBuilder, globalvars, commonService, loader, menu, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._formBuilder = _formBuilder;
        this.globalvars = globalvars;
        this.commonService = commonService;
        this.loader = loader;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.user_id = this.globalvars.getUserdata();
        this.commonService.commandery(this.user_id).then(function (result) {
            _this.editdata = result.data;
            if (_this.editdata != '') {
                _this.commandery = _this.editdata;
            }
        }, function (err) {
            // console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: 'Something Wrong',
                buttons: ['Ok'],
            });
            alert.present();
            return false;
        });
        setTimeout(function () {
            _this.onFormLoad(_this.commandery);
        }, 3000);
        this._commanderyForm = this._formBuilder.group({
            id: [""],
            user_id: [""],
            //council_name
            comm_name: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //district_no
            district_no: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //council_no
            comm_no: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //top_line_signer
            top_line_signer: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //second_line_signer
            second_line_signer: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            //date_joined
            date_joined: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            master_emi_cmdr: [""],
            generalsmo: [""],
            prebate: [""],
            year1: [""],
            capt_general: [""],
            sword_bearer: [""],
            district_emi_cmdr: [""],
            recorder: [""],
            stand_bearer: [""],
            year2: [""],
            treasurer: [""],
            warden: [""],
            emi_cmdr: [""],
            sr_warden: [""],
            sentinel: [""],
            year3: [""],
            jr_warden: [""]
        });
        this.menu = menu;
        this.menu.enable(true, 'myMenu');
    }
    CommanderyPage.prototype.onFormLoad = function (form) {
        var loading = this.loader.create({
            content: 'Loading...'
        });
        loading.present();
        this.user_id = this.globalvars.getUserdata();
        this._commanderyForm = this._formBuilder.group({
            id: [form.id],
            user_id: [this.user_id.id],
            comm_name: [form.comm_name,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            comm_no: [form.comm_no,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            district_no: [form.district_no,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            top_line_signer: [form.top_line_signer,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            second_line_signer: [form.second_line_signer,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            date_joined: [form.date_joined,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            master_emi_cmdr: [form.master_emi_cmdr],
            generalsmo: [form.generalsmo],
            prebate: [form.prebate],
            year1: [form.year1],
            capt_general: [form.capt_general],
            sword_bearer: [form.sword_bearer],
            district_emi_cmdr: [form.district_emi_cmdr],
            recorder: [form.recorder],
            stand_bearer: [form.stand_bearer],
            treasurer: [form.treasurer],
            emi_cmdr: [form.emi_cmdr],
            year2: [form.year2],
            warden: [form.warden],
            sr_warden: [form.sr_warden],
            sentinel: [form.sentinel],
            year3: [form.year3],
            jr_warden: [form.jr_warden]
        });
        loading.dismiss();
    };
    CommanderyPage.prototype._submitComman = function () {
        var _this = this;
        var loading = this.loader.create({
            content: 'Loading...'
        });
        if (this._commanderyForm.valid) {
            loading.present();
            this.commonService.commData(this._commanderyForm.value).then(function (result) {
                //console.log(result);
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: result.status.toUpperCase(),
                    message: result.msg,
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                //this.navCtrl.push(ProfilePage);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
                            }
                        }],
                });
                alert.present();
            }, function (err) {
                console.log(err);
                loading.dismiss();
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    message: 'Something Wrong',
                    buttons: ['Ok'],
                });
                alert.present();
                return false;
            });
        }
    };
    CommanderyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommanderyPage');
    };
    CommanderyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-commandery',template:/*ion-inline-start:"D:\xampp\htdocs\bro_app\src\pages\commandery\commandery.html"*/'\n	<!--\n  Generated template for the ChapterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Commandery</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<form [formGroup]="_commanderyForm"  (submit)="_submitComman()" method="post" novalidate [hidden]="formOne">\n    \n    <ion-input  type="hidden" formControlName="user_id"></ion-input>\n    <ion-input  type="hidden" formControlName="id"></ion-input>\n\n		<ion-item>\n	      <ion-label stacked color="transparent">Commandery Name</ion-label>\n	      <ion-input  type="text" formControlName="comm_name"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_commanderyForm.controls.comm_name.hasError(\'required\') && _commanderyForm.controls.comm_name.touched">\n        <p ion-text text-wrap>Please Enter Commandery Name</p>\n      </ion-item>\n\n	    <ion-item>\n	      <ion-label stacked color="transparent">Commandery Top Line Singer</ion-label>\n	      <ion-input  type="text" formControlName="top_line_signer"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_commanderyForm.controls.top_line_signer.hasError(\'required\') && _commanderyForm.controls.top_line_signer.touched">\n        <p ion-text text-wrap>Please Enter Commandery Top Line Singer</p>\n      </ion-item>\n\n	    <ion-item>\n	      <ion-label stacked color="transparent">Commandery No</ion-label>\n	      <ion-input  type="text" formControlName="comm_no"></ion-input>\n	    </ion-item>\n	    \n       <ion-item class="login-error" no-lines no-padding *ngIf="_commanderyForm.controls.comm_no.hasError(\'required\') && _commanderyForm.controls.comm_no.touched">\n        <p ion-text text-wrap>Please Enter Commandery No</p>\n      </ion-item>\n\n       <ion-item>\n	      <ion-label stacked color="transparent">Second Line Singer</ion-label>\n	      <ion-input  type="text" formControlName="second_line_signer"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_commanderyForm.controls.second_line_signer.hasError(\'required\') && _commanderyForm.controls.second_line_signer.touched">\n        <p ion-text text-wrap>Please Enter Second Line Singer</p>\n      </ion-item>\n\n	    <ion-item>\n	      <ion-label stacked color="transparent">District No</ion-label>\n	      <ion-input  type="text" formControlName="district_no"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_commanderyForm.controls.district_no.hasError(\'required\') && _commanderyForm.controls.district_no.touched">\n        <p ion-text text-wrap>Please Enter District No</p>\n      </ion-item>\n	    \n	    <ion-item>\n	      <ion-label stacked color="transparent">Date Joined</ion-label>\n	      <ion-input  type="date" formControlName="date_joined"></ion-input>\n	    </ion-item>\n\n       <ion-item class="login-error" no-lines no-padding *ngIf="_commanderyForm.controls.date_joined.hasError(\'required\') && _commanderyForm.controls.date_joined.touched">\n        <p ion-text text-wrap>Please Enter Date Joined</p>\n      </ion-item>\n\n	 <ion-item>\n	<ion-label stacked color="transparent">M. Emin. Cmdr?</ion-label>\n    <ion-select formControlName="master_emi_cmdr">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Generalsmo?</ion-label>\n    <ion-select formControlName="generalsmo">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Prebate?</ion-label>\n    <ion-select formControlName="prebate">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n <ion-item>\n      <ion-label stacked color="transparent">Year</ion-label>\n      <ion-input  type="text" formControlName="year1"></ion-input>\n    </ion-item>\n\n    <ion-item>\n	<ion-label stacked color="transparent">Capt. General?</ion-label>\n    <ion-select formControlName="capt_general">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n    <ion-item>\n	<ion-label stacked color="transparent">Sword Bearer?</ion-label>\n    <ion-select formControlName="sword_bearer">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">Dist. Emin. Cmdr?</ion-label>\n    <ion-select formControlName="district_emi_cmdr">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">Recorder?</ion-label>\n    <ion-select formControlName="recorder">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">Stand Bearer?</ion-label>\n    <ion-select formControlName="stand_bearer">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label stacked color="transparent">Year</ion-label>\n      <ion-input  type="text" formControlName="year2"></ion-input>\n    </ion-item>\n\n    <ion-item>\n	<ion-label stacked color="transparent">Treasurer</ion-label>\n    <ion-select formControlName="treasurer">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Warden?</ion-label>\n    <ion-select formControlName="warden">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n	<ion-label stacked color="transparent">Eminent Cmdr?</ion-label>\n    <ion-select formControlName="emi_cmdr">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Senior Warden?</ion-label>\n    <ion-select formControlName="sr_warden">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label stacked color="transparent">Year</ion-label>\n      <ion-input  type="text" formControlName="year3"></ion-input>\n    </ion-item>\n\n   <ion-item>\n	<ion-label stacked color="transparent">Junior Warden?</ion-label>\n    <ion-select formControlName="jr_warden">\n      <ion-option value="">-None-</ion-option>\n      <ion-option value="Yes">Yes</ion-option>\n      <ion-option value="No">No</ion-option>\n    </ion-select>\n  </ion-item>\n\n <button ion-button full  [disabled]="!_commanderyForm.valid" type="submit">Save</button>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\bro_app\src\pages\commandery\commandery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CommanderyPage);
    return CommanderyPage;
}());

//# sourceMappingURL=commandery.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map