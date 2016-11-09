import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PL8Service, UserService } from '../API/api.service';
import { Recipe } from '../API/api.models'

@Component({
    selector: 'recipes',
    templateUrl: '/templates/recipes.html'
})
export class RecipeComponent implements OnInit {
    constructor(
        private rotuer: Router
    ) { }
    
    @Input() isLoading: boolean;

    @Input() recipes: Recipe[];


    ngOnInit(): void {
        this.isLoading = true;
    }
}