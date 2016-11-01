import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import {PL8Service, UserService } from '../API/api.service';
import {Recipe, Ingredient } from '../API/api.models';

@Component({
    selector: 'my-createRecipe',
    templateUrl: '/templates/createRecipe.html',
})





export class CreateRecipeComponent implements OnInit {

    constructor(private router: Router,
                private PL8Service: PL8Service//,
                /*private UserService: UserService*/) {}

    public name: string;
    public description: string;
    public isLoading: boolean;

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
        this.recipe.propertyMap.Ingredients.map(i => {
        });
        this.PL8Service.createRecipe(this.recipe)
            .then(recipe => {
                this.isLoading = false;
                this.router.navigate(['/recipe', recipe.key.id]);
            }, (reason: Response) => {
                this.isLoading = false;
            });
            setTimeout(() => this.router.navigate(['/home']));
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
