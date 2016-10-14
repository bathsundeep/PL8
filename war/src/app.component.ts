import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { User } from './API/api.models';
import { PL8Service, UserService } from './API/api.service';

/* This is the app component typescript (.ts) file.  This creates the main App Component, or the root component */

@Component({
  selector: 'my-app', /* selector so other files know what component to call */
  templateUrl: 'templates/app.component.html', /* Template is what is rendered when app is opened */
  providers: [PL8Service]
})
export class AppComponent implements OnInit { 

  private PL8Service: PL8Service;
  @Input() private UserService: UserService;


  public logOut() {
    this.PL8Service.logout()
      .then(obj => {
        window.location.reload();
      });
  }

  ngOnInit(): void {

  }
}
