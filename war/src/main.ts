/* This initializes the platform the app runs in, then uses the platform to bootstrap our AppModule.  
   This file shouldn't have to change.  */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
