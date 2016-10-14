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
var api_service_1 = require('./API/api.service');
/* This is the app component typescript (.ts) file.  This creates the main App Component, or the root component */
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    /*constructor(
      private PL8Service: PL8Service,
      @Input() private UserService: UserService
    ) { }
  
    public logOut() {
      this.PL8Service.logout()
        .then(obj => {
          window.location.reload();
        });
    }
  */
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.router.navigate(['/home']); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'templates/app.component.html',
            providers: [api_service_1.PL8Service]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map