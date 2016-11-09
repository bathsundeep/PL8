"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PL8Service = (function () {
    function PL8Service(http) {
        this.http = http;
        this.val = 14;
    }
    PL8Service.prototype.urlEncode = function (obj) {
        var urlSearchParams = new http_1.URLSearchParams();
        for (var key in obj) {
            urlSearchParams.append(key, obj[key]);
        }
        return urlSearchParams.toString();
    };
    PL8Service.prototype.apiPost = function (url, body) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, this.urlEncode(body), options);
    };
    PL8Service.prototype.login = function (username, password) {
        return this.apiPost('/login', {
            username: username,
            password: password
        })
            .toPromise()
            .catch(this.handleError)
            .then(function (resp) { return resp.json(); });
    };
    PL8Service.prototype.signup = function (username, email, password) {
        return this.apiPost('/signup', {
            username: username,
            password: password,
            email: email
        })
            .toPromise()
            .catch(this.handleError)
            .then(function (resp) { return resp.json(); });
    };
    PL8Service.prototype.logout = function () {
        return this.http.get("/api/auth/logout")
            .toPromise()
            .then(function (resp) { return resp.json(); });
    };
    PL8Service.prototype.handleError = function (error) {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PL8Service.prototype.me = function () {
        return this.http.get("/api/auth/me")
            .toPromise()
            .catch(this.handleError)
            .then(function (resp) { return resp.json(); });
    };
    PL8Service.prototype.createRecipe = function (recipe) {
        var _this = this;
        return this.apiPost('/api/auth/createRecipe', {
            name: recipe.propertyMap.Name,
            description: recipe.propertyMap.Description,
            ingredients: JSON.stringify(recipe.propertyMap.Ingredients),
            Pic: recipe.propertyMap.Pic
        })
            .toPromise()
            .catch(this.handleError)
            .then(function (resp) { return resp.json(); })
            .then(function (db) { return _this.toRecipe(db); });
    };
    PL8Service.prototype.toRecipe = function (original) {
        return {
            key: original.key,
            propertyMap: {
                Name: original.propertyMap.Name,
                Description: original.propertyMap.Description,
                Ingredients: JSON.parse(original.propertyMap.Ingredients),
                Pic: original.propertyMap.Pic
            }
        };
    };
    PL8Service.prototype.recipes = function () {
        var _this = this;
        return this.http.get('/getRecipes')
            .toPromise()
            .catch(this.handleError)
            .then(function (resp) { return resp.json(); })
            .then(function (recipebases) { return recipebases.map(_this.toRecipe); });
    };
    PL8Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PL8Service);
    return PL8Service;
}());
exports.PL8Service = PL8Service;
var UserService = (function () {
    function UserService(PL8Service) {
        this.PL8Service = PL8Service;
        this.loadingUser = false;
        this.currentUser = null;
        this.refreshUser();
    }
    Object.defineProperty(UserService.prototype, "isLoggedIn", {
        get: function () {
            return this.currentUser != null;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.refreshUser = function () {
        var _this = this;
        this.loadingUser = true;
        this.PL8Service.me()
            .catch(function (err) {
            _this.loadingUser = false;
            _this.currentUser = null;
            console.log("user not logged in");
        })
            .then(function (user) {
            _this.loadingUser = false;
            _this.currentUser = user;
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject({ PL8Service: PL8Service })), 
        __metadata('design:paramtypes', [PL8Service])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=api.service.js.map