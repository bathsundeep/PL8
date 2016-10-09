import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import {Nutrition} from '../nutrition';
import {NutritionService} from '../nutrition.service';

    

@Component({
  selector: 'my-profile',
  templateUrl: '/templates/profile.html',
  providers: [NutritionService]
})

export class ProfileComponent implements OnInit {
   
    title = 'Your profile';
    nutritions: Nutrition[];

    constructor(private nutrtionServices: NutritionService) {}

    getNutrition(): void {
        this.nutrtionServices.getNutritions().then(nutritions=>this.nutritions=nutritions);
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
 
