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
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
/* Import components we make here.  Include the component file when importing so the app
   module knows where to find the component. Create components like app.component.ts */
var app_component_1 = require('./app.component');
var api_service_1 = require('./API/api.service');
var app_routing_1 = require('./app.routing');
var login_component_1 = require('./components/login.component');
var signup_component_1 = require('./components/signup.component');
var home_component_1 = require('./components/home.component');
var profile_component_1 = require('./components/profile.component');
var pantry_component_1 = require('./components/pantry.component');
var createRecipe_component_1 = require('./components/createRecipe.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, signup_component_1.SignupComponent, home_component_1.HomeComponent, profile_component_1.ProfileComponent, pantry_component_1.PantryComponent, createRecipe_component_1.CreateRecipe],
            bootstrap: [app_component_1.AppComponent],
            providers: [api_service_1.PL8Service, api_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map