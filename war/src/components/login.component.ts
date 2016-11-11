import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { PL8Service, UserService } from '../API/api.service';

@Component({
  selector: 'my-login',
  templateUrl: '/templates/login.html',
})

export class LoginComponent implements OnInit {

  constructor(
   private router: Router,
   private PL8Service: PL8Service,
   private UserService: UserService
  ) { }

  

  public username: string;
  public password: string;
  public isLoading: boolean;
  @Input() public errorMessage: string;

  public onSubmit() {
    this.isLoading = true;
    this.PL8Service.login(this.username, this.password)
      .then(User => {
        this.errorMessage = '';
        this.isLoading = false;
        this.UserService.currentUser = User;
        this.router.navigate(['']);
      }, (reason : Response) => {
        this.errorMessage = reason.json()["message"];
        this.isLoading = false;
      });
    return false;
  }
        
   ngOnInit(): void {
       
   }
}
 
