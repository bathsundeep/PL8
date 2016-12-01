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
var RecipesComponent = (function () {
    function RecipesComponent(rotuer, PL8Service, recipeStorage) {
        this.rotuer = rotuer;
        this.PL8Service = PL8Service;
        this.recipeStorage = recipeStorage;
        this.recipes = this.recipeStorage.recipes;
        this.numRecipes = this.numRecipes;
    }
    RecipesComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.recipeStorage.repopulate();
        this.isLoading = false;
    };
    return RecipesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RecipesComponent.prototype, "isLoading", void 0);
RecipesComponent = __decorate([
    core_1.Component({
        selector: 'recipes',
        templateUrl: '/templates/recipes.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        api_service_1.PL8Service,
        api_service_1.LocalStorageRecipeService])
], RecipesComponent);
exports.RecipesComponent = RecipesComponent;
var RecipeComponent = (function () {
    function RecipeComponent(rotuer, PL8Service, recipeStorage) {
        this.rotuer = rotuer;
        this.PL8Service = PL8Service;
        this.recipeStorage = recipeStorage;
    }
    RecipeComponent.prototype.ngOnInit = function () {
    };
    return RecipeComponent;
}());
RecipeComponent = __decorate([
    core_1.Component({
        selector: 'recipe',
        templateUrl: '/templates/recipe.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        api_service_1.PL8Service,
        api_service_1.LocalStorageRecipeService])
], RecipeComponent);
exports.RecipeComponent = RecipeComponent;
//# sourceMappingURL=recipes.component.js.map