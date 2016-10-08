import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login.component';
import { SignupComponent } from './components/signup.component';
import { HomeComponent } from './components/home.component';

const appRoutes: Routes = [
    {
        path: 'login', component: LoginComponent
    }, 
    {
        path: 'signup', component: SignupComponent
    }, 
    {
        path: 'home', component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });