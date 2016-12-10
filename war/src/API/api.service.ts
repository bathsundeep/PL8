import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

/* Import our interfaces */
import { User, Recipe, RecipeBase, Ingredient } from './api.models';

@Injectable()
export class PL8Service {

    constructor(private http: Http) { }

    private val: number = 14;
    

    urlEncode(obj: Object): string {
        let urlSearchParams = new URLSearchParams();
        for (let key in obj) {
            urlSearchParams.append(key, obj[key]);
        }
        return urlSearchParams.toString();
    }

    apiPost(url: string, body: any) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        console.log("hello");
        // Try removing return statement
        return this.http.post(url, this.urlEncode(body), options);
        
    }

    public login(username: string, password: string) {
        console.log("hi");/*
        return this.apiPost('/login', {
            username: username,
            password: password
        })*/
        
        console.log("Adding user:", username);
        sessionStorage.setItem("currentUser", username);
        
    }

    public signup(username: string, email: string, password: string){

        return this.apiPost('/api/auth/signup', {
            username: username,
            password: password,
            email: email
        })
            .toPromise()
            .catch(this.handleError)
            .then(resp => resp.json() as User);
        
        /*
        return this.http.post('/signup', 
            {
                username: username,
                password: password,
                email: email
            }, {headers: headers})
            .toPromise()
            .then(resp => resp.json() as User)
            .catch(this.handleError);
        */
    }

    public logout() {
        return this.http.get("/api/auth/logout")
            .toPromise()
            .then(resp => resp.json() as {});
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    public me() {
        return this.http.get("/api/auth/me")
            .toPromise()
            .catch(this.handleError)
            .then(resp => resp.json() as User);
    }

    public createRecipe(recipe: Recipe) {
        return this.apiPost('/api/auth/createRecipe', {
            name: recipe.propertyMap.Name,
            description: recipe.propertyMap.Description,
            ingredients: JSON.stringify(recipe.propertyMap.Ingredients),
            Pic: recipe.propertyMap.Pic
        })
    }

/*
    private toRecipe(original: RecipeBase) : Recipe {
        return {
            key: original.key,
            propertyMap: {
                Name: original.propertyMap.Name,
                Description: original.propertyMap.Description,
                Ingredients: <Ingredient[]>JSON.parse(original.propertyMap.Ingredients),
                Steps: <String[]>JSON.parse(original.propertyMap.Steps),
                Pic: original.propertyMap.Pic
            }
        };
    }*/

    public recipes() {
        return this.http.get('/getRecipes')
            .toPromise()
            .catch(this.handleError)
            .then(resp => resp.json() as RecipeBase[])
            //.then(recipebases => recipebases.map(this.toRecipe));
    }

}
@Injectable()
export class UserService {

    constructor( @Inject(PL8Service) private PL8Service: PL8Service) {
        //this.refreshUser();
    }
    
    public loadingUser: boolean = false;
    public currentUser: User = null;

    public get isLoggedIn() {
        return this.currentUser != null;
    }

    public refreshUser() {
        this.loadingUser = true;
        this.PL8Service.me()
            .catch(err => {
                this.loadingUser = false;
                this.currentUser = null;

                console.log("user not logged in");
            })
            .then(user => {
                this.loadingUser = false;
                this.currentUser = user;
            });
    }
}

@Injectable()
export class LocalStorageRecipeService {

    constructor(private http: Http) { }

    numRecipes = 0;

    recipes:Array<Recipe> = [];

    public createRecipe(recipe: Recipe) {
        console.log("Create Recipe", JSON.stringify(recipe));
        let id = "recipe:" + this.numRecipes.toString();
        let localData = JSON.parse(localStorage.getItem(id));

        //localData[id] = recipe;
        localStorage.setItem(id, JSON.stringify(recipe));
        this.numRecipes = this.numRecipes + 1;
        this.recipes.push(recipe);
    }

    public get(recipe: Recipe){
        let id = recipe.propertyMap.Name;
	    let data = JSON.parse(localStorage.getItem(id));
  	    if(!data){
  	    	return undefined;
  	    }
	    if(recipe){
    		if(data[id]){
     			return data[id];
  	        } else {
  			    return {};
  		    }
    	}
  	    return data ;
    }

    public repopulate() {
        if (localStorage.length == 0 && this.recipes.length == 0) {
            console.log("Empty everything!!");
            return;
        }
        else if (localStorage.length == 0) {
            for (let i = 0; i < this.numRecipes; i++) {
                let recipe = this.recipes[i];
                console.log("Repopulating recipe localStorage", JSON.stringify(recipe));
                let id = "recipe:" + i.toString();
                let localData = JSON.parse(localStorage.getItem(id));
                localStorage.setItem(id, JSON.stringify(recipe));
            }
        }
        else if (this.recipes.length == 0) {
            for (var j = 0; j < localStorage.length; j++) {
                let id = "recipe:" + j.toString();
                let recipe = JSON.parse(localStorage.getItem(id));
                console.log("Repopulating recipes", JSON.stringify(recipe));
                this.recipes.push(recipe);
                this.numRecipes = this.numRecipes + 1;
            }
        }
    }

    public getAllRecipes() {return this.recipes;}

    //get suggestions based on pantry
    //this function sucks and will be changed
    public getSuggestions(pantry: Array<Ingredient>) {
        /*let all = this.getAllRecipes();
        for (var i = pantry.length; i > 0; i-- ) {
            for (var j = 0; j < this.numRecipes; j++) {
                let count = 0;
                let r = all[j];
                for (var k = 0; k < r.propertyMap.Ingredients.length; k++) {
                    
                }
            }
        }*/

        let matches = [];
        let all = this.getAllRecipes();

        for (var i = 0; i < all.length; i++) {
            let recipe = all[i];
            for (var j = 0; j < recipe.propertyMap.Ingredients.length; j++) {
                for (var k = 0; k < pantry.length; k++) {
                    if (j == k) {
                        matches[i] = matches[i] + 1;
                    }
                }
            }
        }

        let newRecipes = [];
        for (var i = 0; i < matches.length; i++) {
            if (matches[i] > 0) {
                newRecipes.push(all[i]);
            }
        }

        return newRecipes;
    }
}

@Injectable()
export class LocalStoragePantryService {

    constructor(private http: Http) { }

    numItems = 0;
    pantry: Array<Ingredient> = [];

    public addIngredient(ing: Ingredient, index) {
        console.log("Add Ingredient to Pantry", JSON.stringify(ing));
        console.log("Index = ", index);
        let id = ("pantry:" + index).toString();
        let localData = JSON.parse(localStorage.getItem(id));

        //localData[id] = recipe;
        sessionStorage.setItem(id, JSON.stringify(ing));
        this.numItems = this.numItems + 1;
        this.pantry.push(ing);
    }

    public get(recipe: Recipe){
        let id = recipe.propertyMap.Name;
	    let data = JSON.parse(localStorage.getItem(id));
  	    if(!data){
  	    	return undefined;
  	    }
	    if(recipe){
    		if(data[id]){
     			return data[id];
  	        } else {
  			    return {};
  		    }
    	}
  	    return data ;
    }

    public repopulate() {
        if (localStorage.length == 0) {
            for (let i = 0; i < this.numItems; i++) {
                let recipe = this.pantry[i];
                console.log("Repopulating pantry localStorage", JSON.stringify(recipe));
                let id = "pantry:" + i.toString();
                let localData = JSON.parse(localStorage.getItem(id));
                localStorage.setItem(id, JSON.stringify(recipe));
            }
        }
        else if (this.pantry.length == 0) {
            for (var j = 0; j < localStorage.length; j++) {
                let id = "pantry:" + j.toString();
                let recipe = JSON.parse(localStorage.getItem(id));
                console.log("Repopulating pantry", JSON.stringify(recipe));
                this.pantry.push(recipe);
                this.numItems = this.numItems + 1;
            }
        }
    }
}