import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';



@Component({
    selector: 'my-pantry',
    templateUrl: '/templates/pantry.html',
})

export class PantryComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit(): void {

    }

}