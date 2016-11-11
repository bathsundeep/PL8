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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var api_service_1 = require('../API/api.service');
var LoginComponent = (function () {
    function LoginComponent(router, PL8Service, UserService) {
        this.router = router;
        this.PL8Service = PL8Service;
        this.UserService = UserService;
    }
    LoginComponent.prototype.onSubmit = function () {
        this.isLoading = true;
        this.PL8Service.login(this.username, this.password);
        this.isLoading = false;
        this.router.navigate(['']);
        return false;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoginComponent.prototype, "errorMessage", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            templateUrl: '/templates/login.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, api_service_1.PL8Service, api_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map