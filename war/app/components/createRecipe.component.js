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
var CreateRecipeComponent = (function () {
    function CreateRecipeComponent(router, PL8Service, recipeStorage) {
        this.router = router;
        this.PL8Service = PL8Service;
        this.recipeStorage = recipeStorage;
        this.recipe = {
            key: {
                kind: "Recipe",
                id: -1
            },
            propertyMap: {
                Name: "",
                Description: "",
                Ingredients: [],
                Steps: [],
                Pic: ""
            }
        };
    }
    CreateRecipeComponent.prototype.onSubmit = function () {
        this.isLoading = true;
        this.recipeStorage.createRecipe(this.recipe);
        this.router.navigate(['/home']);
        return false;
    };
    CreateRecipeComponent.prototype.ngOnInit = function () {
        this.addIng();
        this.addStep();
    };
    CreateRecipeComponent.prototype.addIng = function () {
        this.recipe.propertyMap.Ingredients.push({
            ingredient: "",
            amount: 0,
            unit: ""
        });
    };
    CreateRecipeComponent.prototype.addStep = function () {
        if (this.recipe.propertyMap.Steps.length > 0) {
            var inputValue = document.getElementById("info").value;
            console.log("Step = ", inputValue);
            this.recipe.propertyMap.Steps.push(inputValue);
        }
        else {
            this.recipe.propertyMap.Steps.push("");
        }
    };
    return CreateRecipeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CreateRecipeComponent.prototype, "errorMessage", void 0);
CreateRecipeComponent = __decorate([
    core_1.Component({
        selector: 'my-createRecipe',
        templateUrl: '/templates/createRecipe.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        api_service_1.PL8Service,
        api_service_1.LocalStorageRecipeService])
], CreateRecipeComponent);
exports.CreateRecipeComponent = CreateRecipeComponent;
//# sourceMappingURL=createRecipe.component.js.map