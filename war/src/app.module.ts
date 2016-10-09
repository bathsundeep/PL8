import { NgModule }  from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/* Import components we make here.  Include the component file when importing so the app
   module knows where to find the component. Create components like app.component.ts */
import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import {LoginComponent} from './components/login.component';
import { SignupComponent } from './components/signup.component';
import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component'
import { PantryComponent } from './components/pantry.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing],
  declarations: [ AppComponent, LoginComponent, SignupComponent, HomeComponent, ProfileComponent, PantryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
