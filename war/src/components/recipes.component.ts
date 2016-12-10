import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PL8Service, UserService, LocalStorageRecipeService } from '../API/api.service';
import { Recipe, Ingredient } from '../API/api.models'

@Component({
    selector: 'recipes',
    templateUrl: '/templates/recipes.html'
})
export class RecipesComponent implements OnInit {
    constructor(
        private rotuer: Router,
        private PL8Service: PL8Service,
        private recipeStorage: LocalStorageRecipeService
    ) { }
    
    @Input() isLoading: boolean;

    recipes: Array<Recipe> = this.recipeStorage.recipes;
    numRecipes: number = this.recipeStorage.numRecipes;

    ngOnInit(): void {
        this.isLoading = true;
        this.recipeStorage.repopulate();
        this.isLoading = false;
    }
}

@Component({
    selector: 'recipe',
    templateUrl: '/templates/recipe.html'
})
export class RecipeComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private PL8Service: PL8Service,
        private recipeStorage: LocalStorageRecipeService
    ) { }

    recipes: Array<Recipe> = this.recipeStorage.getAllRecipes();
    numRecipes: number = this.recipeStorage.numRecipes;

    id: number;

    recipe: Recipe;

    ngOnInit(): void {
        // Get current url in form of 'recipes/x' where x = index in this.recipeStorage.recipes
        var url = this.router.url;
        
        // split to get 'x' only and store in this.id
        var split = url.split('/');

        this.id = Number(split[2]);
        
        this.recipe = this.recipes[this.id];
        console.log(JSON.stringify(this.recipe));
    }
}