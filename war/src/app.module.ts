import { NgModule }  from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/* Import components we make here.  Include the component file when importing so the app
   module knows where to find the component. Create components like app.component.ts */
import { AppComponent }   from './app.component';
import { PL8Service, UserService} from './API/api.service';

import { routing } from './app.routing';
import { LoginComponent} from './components/login.component';
import { SignupComponent } from './components/signup.component';
import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component';
import { PantryComponent } from './components/pantry.component';
import { CreateRecipeComponent } from './components/createRecipe.component';
import { RecipeComponent } from './components/recipes.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing],
  declarations: [ AppComponent, LoginComponent, SignupComponent, HomeComponent, ProfileComponent, PantryComponent, CreateRecipeComponent, RecipeComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ PL8Service, UserService]
})
export class AppModule { }
