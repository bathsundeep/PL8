import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login.component';
import { SignupComponent } from './components/signup.component';
import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component';
const appRoutes: Routes = [
    {
        path: 'login', component: LoginComponent
    }, 
    {
        path: 'signup', component: SignupComponent
    }, 
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'profile', component: ProfileComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });