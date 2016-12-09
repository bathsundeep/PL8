import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { User, Recipe} from './API/api.models';
import { PL8Service, UserService, LocalStorageRecipeService, LocalStoragePantryService } from './API/api.service';

/* This is the app component typescript (.ts) file.  This creates the main App Component, or the root component */

@Component({
  selector: 'my-app', /* selector so other files know what component to call */
  templateUrl: 'templates/app.html', /* Template is what is rendered when app is opened */
  providers: [PL8Service, LocalStorageRecipeService, LocalStoragePantryService]
})
export class AppComponent implements OnInit { 

  constructor(
    private PL8Service: PL8Service,
    private storageService: LocalStorageRecipeService,
    private pantryService: LocalStoragePantryService,
    private router: Router,
    @Input() private UserService: UserService
  ) {
    
  }
  
  isLoggedIn: boolean;

  public logOut() {
    this.PL8Service.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
    
  }

  ngOnInit() {
    if (sessionStorage.getItem("currentUser") != null) {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  }
}
