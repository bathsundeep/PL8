"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./components/login.component');
var signup_component_1 = require('./components/signup.component');
var home_component_1 = require('./components/home.component');
var profile_component_1 = require('./components/profile.component');
var pantry_component_1 = require('./components/pantry.component');
var createRecipe_component_1 = require('./components/createRecipe.component');
var appRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'pantry',
        component: pantry_component_1.PantryComponent
    },
    { path: 'createRecipe',
        component: createRecipe_component_1.CreateRecipe
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map