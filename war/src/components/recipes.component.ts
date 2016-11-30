import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PL8Service, UserService, LocalStorageRecipeService } from '../API/api.service';
import { Recipe, Ingredient } from '../API/api.models'

@Component({
    selector: 'recipes',
    templateUrl: '/templates/recipes.html'
})
export class RecipeComponent implements OnInit {
    constructor(
        private rotuer: Router,
        private PL8Service: PL8Service,
        private recipeStorage: LocalStorageRecipeService
    ) { }
    
    @Input() isLoading: boolean;

    ngOnInit(): void {
        this.isLoading = true;
    }
}