import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { PL8Service, UserService } from '../API/api.service';

@Component({
  selector: 'my-signup',
  templateUrl: '/templates/signup.html',
})

export class SignupComponent implements OnInit {
    
 /*  constructor(
      private router: Router,
      private PL8Service: PL8Service,
      private UserService: UserService) { }

    public username: string;
    public email: string;
    public password: string;
    public isLoading: boolean;
    @Input() public errorMessage: string;

    onSubmit() {
      this.isLoading = true;
      this.PL8Service.signup(this.username, this.email, this.password)
      .then(User => {
        this.isLoading = false;
        this.UserService.currentUser = User;
        this.router.navigate(['/'])
      }, (reason : Response) => {
        this.errorMessage = reason.json()["message"];
        this.isLoading = false;
      });
      return false;
    }
     */   
    ngOnInit(): void {
       
    }
}
 
