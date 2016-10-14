import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import {PL8Service, UserService } from '../API/api.service';
import { Recipe } from '../API/api.models';

@Component({
  selector: 'my-home',
  templateUrl: '/templates/home.html',
})

export class HomeComponent implements OnInit {
         constructor(
        private router: Router,
        private Pl8Service: PL8Service) {
    }

    @Input()
    isLoading: boolean;

    @Input()
    recipes: Recipe[];


    allRecipes: Recipe[];
    searchResults: Recipe[];

    ngOnInit(): void {
        this.isLoading = true;

        this.Pl8Service.recipes()
            .then(recipes => {
                this.allRecipes = this.recipes = recipes;
                this.isLoading = false;
            });
    }

    showAll() {
        this.recipes = this.allRecipes;
        return false;
    }

}