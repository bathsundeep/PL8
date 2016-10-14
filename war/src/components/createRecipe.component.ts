import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';



@Component({
    selector: 'my-pantry',
    templateUrl: '/templates/createRecipe.html',
})

export class CreateRecipe implements OnInit {

    constructor(private router: Router) {}

    ngOnInit(): void {

    }

}