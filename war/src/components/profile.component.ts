import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'my-profile',
  templateUrl: '/templates/profile.html',
})

export class ProfileComponent implements OnInit {
         constructor(
    private router: Router) {}
        
        add(name: string): void {
            //TO DO:
            //Implement a ton of shit
           /* name = name.trim();
            if (!name) {return;}
            this.selectedNutrition = null; */
        }
       ngOnInit(): void {
       
       }
}
 
