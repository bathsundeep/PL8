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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
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
        console.log("hello");
        // Try removing return statement
        return this.http.post(url, this.urlEncode(body), options);
    };
    PL8Service.prototype.login = function (username, password, done) {
        console.log("hi");
        return this.apiPost('/login', {
            username: username,
            password: password
        });
        /*console.log("Adding user:", username);
        sessionStorage.setItem("currentUser", username);
        */
    };
    PL8Service.prototype.signup = function (username, email, password) {
        return this.apiPost('/api/auth/signup', {
            username: username,
            password: password,
            email: email
        })
            .toPromise()
            .catch(this.handleError)
            .then(function (resp) { return resp.json(); });
        /*
        return this.http.post('/signup',
            {
                username: username,
                password: password,
                email: email
            }, {headers: headers})
            .toPromise()
            .then(resp => resp.json() as User)
            .catch(this.handleError);
        */
    };
    PL8Service.prototype.logout = function () {
        return this.http.get("/api/auth/logout")
            .toPromise()
            .then(function (resp) { return resp.json(); });
    };
    PL8Service.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PL8Service.prototype.me = function () {
        return this.http.get("/api/auth/me")
            .toPromise()
            .catch(this.handleError)
            .then(function (resp) { return resp.json(); });
    };
    PL8Service.prototype.createRecipe = function (recipe) {
        return this.apiPost('/api/auth/createRecipe', {
            name: recipe.propertyMap.Name,
            description: recipe.propertyMap.Description,
            ingredients: JSON.stringify(recipe.propertyMap.Ingredients),
            Pic: recipe.propertyMap.Pic
        });
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
    return PL8Service;
}());
PL8Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PL8Service);
exports.PL8Service = PL8Service;
var UserService = (function () {
    function UserService(PL8Service) {
        this.PL8Service = PL8Service;
        this.loadingUser = false;
        this.currentUser = null;
        //this.refreshUser();
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
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(PL8Service)),
    __metadata("design:paramtypes", [PL8Service])
], UserService);
exports.UserService = UserService;
var LocalStorageRecipeService = (function () {
    function LocalStorageRecipeService(http) {
        this.http = http;
        this.numRecipes = 0;
        this.recipes = [];
    }
    LocalStorageRecipeService.prototype.createRecipe = function (recipe) {
        console.log("Create Recipe", JSON.stringify(recipe));
        var id = "recipe:" + this.numRecipes.toString();
        var localData = JSON.parse(localStorage.getItem(id));
        //localData[id] = recipe;
        localStorage.setItem(id, JSON.stringify(recipe));
        this.numRecipes = this.numRecipes + 1;
        this.recipes.push(recipe);
    };
    LocalStorageRecipeService.prototype.get = function (recipe) {
        var id = recipe.propertyMap.Name;
        var data = JSON.parse(localStorage.getItem(id));
        if (!data) {
            return undefined;
        }
        if (recipe) {
            if (data[id]) {
                return data[id];
            }
            else {
                return {};
            }
        }
        return data;
    };
    LocalStorageRecipeService.prototype.allRecipes = function () {
        return this.recipes;
    };
    return LocalStorageRecipeService;
}());
LocalStorageRecipeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LocalStorageRecipeService);
exports.LocalStorageRecipeService = LocalStorageRecipeService;
var LocalStoragePantryService = (function () {
    function LocalStoragePantryService(http) {
        this.http = http;
    }
    LocalStoragePantryService.prototype.addIngredient = function (ing, index) {
        console.log("Add Ingredient to Pantry", JSON.stringify(ing));
        console.log("Index = ", index);
        var id = ("pantry:" + index).toString();
        var localData = JSON.parse(localStorage.getItem(id));
        //localData[id] = recipe;
        sessionStorage.setItem(id, JSON.stringify(ing));
    };
    LocalStoragePantryService.prototype.get = function (recipe) {
        var id = recipe.propertyMap.Name;
        var data = JSON.parse(localStorage.getItem(id));
        if (!data) {
            return undefined;
        }
        if (recipe) {
            if (data[id]) {
                return data[id];
            }
            else {
                return {};
            }
        }
        return data;
    };
    return LocalStoragePantryService;
}());
LocalStoragePantryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LocalStoragePantryService);
exports.LocalStoragePantryService = LocalStoragePantryService;
//# sourceMappingURL=api.service.js.map