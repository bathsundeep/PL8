import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import {PL8Service, UserService, LocalStoragePantryService } from '../API/api.service';
import {Recipe, Ingredient } from '../API/api.models';

@Component({
    selector: 'my-pantry',
    templateUrl: '/templates/pantry.html',
})

export class PantryComponent implements OnInit {

    constructor(
        private router: Router,
        private PL8Service: PL8Service,
        private pantryStorage: LocalStoragePantryService
    ) {}

    public isLoading: boolean;
    @Input() public errorMessage: string;

    public recipe: Recipe = {
        key: {
            kind: "Recipe",
            id: -1
        },
        propertyMap: {
            Name: "",
            Description: "",
            Ingredients: [],
            Pic: ""
        }

    };

    public onSubmit() {
        this.isLoading = true;
        
        this.recipe.propertyMap.Ingredients.forEach((item, index) => {
            this.pantryStorage.addIngredient(item, index);
        });
        this.isLoading = false;

        return false;
    }

    ngOnInit(): void {
        this.addIng();
    }

    addIng() {
        this.recipe.propertyMap.Ingredients.push(<Ingredient>{
            ingredient: "",
            amount: 0,
            unit: ""
        });
    }

}