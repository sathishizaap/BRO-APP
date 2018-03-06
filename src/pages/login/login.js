var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../providers/commonService';
import { GlobalVars } from '../../providers/globalVars';
import { regexPatterns } from '../../validators/regexPatterns';
import { LoadingController, AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
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
                Validators.compose([
                    Validators.required, Validators.pattern(regexPatterns.email)
                ])
            ],
            //Password
            password: ["password",
                Validators.compose([
                    Validators.required,
                    Validators.minLength(6)
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
                //console.log(result);
                loading_1.dismiss();
                if (result.status == "success") {
                    _this.globalvars.setUserdata(JSON.stringify(result.data));
                    _this.navCtrl.setRoot(ProfilePage);
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
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [FormBuilder,
            LoadingController,
            CommonService,
            NavController,
            GlobalVars,
            AlertController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map