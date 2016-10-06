import { NgModule }  from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/* Import components we make here.  Include the component file when importing so the app
   module knows where to find the component. Create components like app.component.ts */
import { AppComponent }   from './app.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
