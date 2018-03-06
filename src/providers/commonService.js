var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import {SERVER_URL} from './config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
var apiUrl = 'http://localhost/bro/Webservice/';
var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
    }
    CommonService.prototype.login = function (data) {
        var headers = new Headers();
        var options = new RequestOptions({ headers: headers });
        return this.http.put(apiUrl + 'users/login', data, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.profile = function (data) {
        //console.log(data);
        return this.http.get(apiUrl + "users/profile?id=" + data.id + "&role=" + data.role_id).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.profileData = function (form) {
        var data = form;
        console.log(data);
        var headers = new Headers();
        var options = new RequestOptions({ headers: headers });
        return this.http.put(apiUrl + 'users/profile_update', data, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], CommonService);
    return CommonService;
}());
export { CommonService };
//# sourceMappingURL=commonService.js.map