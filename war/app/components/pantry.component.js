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
var api_service_1 = require("../API/api.service");
var PantryComponent = (function () {
    function PantryComponent(router, PL8Service, pantryStorage) {
        this.router = router;
        this.PL8Service = PL8Service;
        this.pantryStorage = pantryStorage;
        this.recipe = {
            key: {
                kind: "Recipe",
                id: -1
            },
            propertyMap: {
                Name: "",
                Description: "",
                Ingredients: [],
                Pic: ""
            }
        };
    }
    PantryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        this.recipe.propertyMap.Ingredients.forEach(function (item, index) {
            _this.pantryStorage.addIngredient(item, index);
        });
        this.isLoading = false;
        return false;
    };
    PantryComponent.prototype.ngOnInit = function () {
        this.addIng();
    };
    PantryComponent.prototype.addIng = function () {
        this.recipe.propertyMap.Ingredients.push({
            ingredient: "",
            amount: 0,
            unit: ""
        });
    };
    return PantryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PantryComponent.prototype, "errorMessage", void 0);
PantryComponent = __decorate([
    core_1.Component({
        selector: 'my-pantry',
        templateUrl: '/templates/pantry.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        api_service_1.PL8Service,
        api_service_1.LocalStoragePantryService])
], PantryComponent);
exports.PantryComponent = PantryComponent;
//# sourceMappingURL=pantry.component.js.map