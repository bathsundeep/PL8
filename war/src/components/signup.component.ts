import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'my-signup',
  templateUrl: '/templates/signup.html',
})

export class SignupComponent implements OnInit {
         constructor(
    private router: Router) {}
        
       ngOnInit(): void {
       
       }
}
 
