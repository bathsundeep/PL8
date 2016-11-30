import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Nutrition } from '../nutrition';
import { NutritionService } from '../nutrition.service';

import { PL8Service, UserService, LocalStoragePantryService } from '../API/api.service';

@Component({
  selector: 'my-profile',
  templateUrl: '/templates/profile.html',
  providers: [NutritionService]
})

export class ProfileComponent implements OnInit {

    constructor(
        private router: Router,
        private PL8Service: PL8Service,
        private UserService: UserService,
        private nutritionServices: NutritionService
    ) { }
   
    name = sessionStorage.getItem('currentUser');
    title = 'Your profile';
    nutritions: Nutrition[];

    getNutrition(): void {
        this.nutritionServices.getNutritions().then(nutritions=>this.nutritions=nutritions);
    }

    
        
        add(name: string): void {
            //TO DO:
            //Implement a ton of shit
           /* name = name.trim();
            if (!name) {return;}
            this.selectedNutrition = null; */
        }
    ngOnInit(): void {
        this.getNutrition();
    }
}
 
