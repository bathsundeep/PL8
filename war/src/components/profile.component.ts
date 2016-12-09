import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Nutrition } from '../nutrition';
import { NutritionService } from '../nutrition.service';

import { Ingredient } from '../API/api.models'

import { PL8Service, UserService, LocalStorageRecipeService } from '../API/api.service';

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
        private LocalStorageRecipeService: LocalStorageRecipeService,
        private NutritionService: NutritionService
    ) { }
   
    name = sessionStorage.getItem('currentUser');
    title = 'Your profile';
    nutritions: Nutrition[];
    preferences: Array<Ingredient>;

    getNutrition(): void {
        this.NutritionService.getNutritions().then(nutritions=>this.nutritions=nutritions);
    }

    
        
    add(name: string): void {
        //TODO get info from front end to push
        //this.LocalStorageRecipeService.preferences.push(arg);
    }

    ngOnInit(): void {
        this.getNutrition();
    }
}
 
