import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';



@Component({
  selector: 'my-home',
  templateUrl: '/templates/home.html',
})

export class HomeComponent implements OnInit {
         constructor(
    private router: Router) {}
        
       ngOnInit(): void {
       
       }
       
}
 
