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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nutrition_service_1 = require("../nutrition.service");
var api_service_1 = require("../API/api.service");
var ProfileComponent = (function () {
    function ProfileComponent(router, PL8Service, UserService, LocalStorageRecipeService, LocalStoragePantryService, NutritionService) {
        this.router = router;
        this.PL8Service = PL8Service;
        this.UserService = UserService;
        this.LocalStorageRecipeService = LocalStorageRecipeService;
        this.LocalStoragePantryService = LocalStoragePantryService;
        this.NutritionService = NutritionService;
        this.name = sessionStorage.getItem('currentUser');
        this.title = 'Your profile';
    }
    ProfileComponent.prototype.getNutrition = function () {
        var _this = this;
        this.NutritionService.getNutritions().then(function (nutritions) { return _this.nutritions = nutritions; });
    };
    ProfileComponent.prototype.add = function (name) {
        //TODO get info from front end to push
        //this.LocalStorageRecipeService.preferences.push(arg);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.getNutrition();
        this.suggestions = this.LocalStorageRecipeService.getSuggestions(this.LocalStoragePantryService.pantry);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'my-profile',
        templateUrl: '/templates/profile.html',
        providers: [nutrition_service_1.NutritionService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        api_service_1.PL8Service,
        api_service_1.UserService,
        api_service_1.LocalStorageRecipeService,
        api_service_1.LocalStoragePantryService,
        nutrition_service_1.NutritionService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map