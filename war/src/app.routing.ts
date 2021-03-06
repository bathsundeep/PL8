import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login.component';
import { SignupComponent } from './components/signup.component';
import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component';
import { PantryComponent } from './components/pantry.component';
import { CreateRecipeComponent} from './components/createRecipe.component';
import { RecipesComponent} from './components/recipes.component';
import { RecipeComponent} from './components/recipes.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login', 
        component: LoginComponent
    }, 
    {
        path: 'signup', 
        component: SignupComponent
    }, 
    {
        path: 'home', 
        component: HomeComponent
    },
    {
        path: 'profile', 
        component: ProfileComponent
    },
    {
        path: 'pantry', 
        component: PantryComponent
    },
    {   path: 'createRecipe',
        component: CreateRecipeComponent
    },
    {
        path: 'recipes',
        component: RecipesComponent
    },
    {
        path: 'recipes/:id',
        component: RecipeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });