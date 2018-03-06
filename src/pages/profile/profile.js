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
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { LoadingController,AlertController } from 'ionic-angular';
import { CommonService } from '../../providers/commonService';
import { FormBuilder } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { GlobalVars } from '../../providers/globalVars';
//import { regexPatterns } from '../../validators/regexPatterns';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(_formBuilder, navCtrl, commonService, alertCtrl, loader, globalvars, navParams) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.globalvars = globalvars;
        this.navParams = navParams;
        this.profile = this.globalvars.getUserdata();
        this.commonService.profile(this.profile).then(function (result) {
            //console.log(result);
            _this.editdata = result.data;
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
            first_name: [""],
            middle_name: [""],
            last_name: [""],
            email: [""],
            phone: [""],
            home_blue_lodge: [""],
            address1: [""],
            address2: [""],
            city: [""],
            state: [""],
            status: [""],
            is_admin: [""],
            zip: [""],
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
            mason: [""],
            dob: [""],
            b_city: [""],
            b_state: [""],
            w_address1: [""],
            w_address2: [""],
            w_city: [""],
            w_state: [""],
            w_zip: [""]
        });
    }
    ProfilePage.prototype.onFormLoad = function (form) {
        this._profileForm = this._formBuilder.group({
            id: [form.info.id],
            first_name: [form.info.first_name],
            middle_name: [form.info.middle_name],
            last_name: [form.info.last_name],
            email: [form.info.email],
            phone: [form.info.phone],
            status: [form.info.status],
            is_admin: [form.info.is_admin],
            home_blue_lodge: [form.info.home_blue_lodge],
            address1: [form.home_address.address1],
            address2: [form.home_address.address2],
            city: [form.home_address.city],
            state: [form.home_address.state],
            zip: [form.home_address.zip],
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
            dob: [form.personal.dob],
            mason: [form.personal.mason],
            b_city: [form.personal.b_city],
            b_state: [form.personal.b_state],
            w_address1: [form.work_address.w_address1],
            w_address2: [form.work_address.w_address2],
            w_city: [form.work_address.w_city],
            w_state: [form.work_address.w_state],
            w_zip: [form.work_address.w_zip]
        });
    };
    //  private _toggleViewPassword(event: MouseEvent) {
    //   event.preventDefault();
    //   console.info("show password");
    //   if (this._passwordInputType === "password") {
    //     this._passwordInputType = "text";
    //     this._passwordIcon = "eye";
    //   } else {
    //     this._passwordIcon = "eye-off";
    //     this._passwordInputType = "password";
    //   };
    // };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype._submitProfile = function () {
        var _this = this;
        var loading = this.loader.create({
            content: 'Loading...'
        });
        if (this._profileForm) {
            loading.present();
            this.commonService.profileData(this._profileForm.value).then(function (result) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: result.status.toUpperCase(),
                    message: result.msg,
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                _this.navCtrl.push(LoginPage);
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
        IonicPage(),
        Component({
            selector: 'page-profile',
            templateUrl: 'profile.html',
        }),
        __metadata("design:paramtypes", [FormBuilder,
            NavController,
            CommonService,
            AlertController,
            LoadingController,
            GlobalVars,
            NavParams])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.js.map