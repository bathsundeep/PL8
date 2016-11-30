import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { PL8Service, UserService } from '../API/api.service';

@Component({
  selector: 'my-signup',
  templateUrl: '/templates/signup.html',
})
export class SignupComponent implements OnInit {
    
    constructor(
      public router: Router,
      public PL8Service: PL8Service,
      public UserService: UserService
    ) { }

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
        this.router.navigate(['/home'])
      }, (reason : Response) => {
        this.errorMessage = '';
        this.isLoading = false;
      });
      return false;
    }
       
    ngOnInit(): void {
       
    }
}