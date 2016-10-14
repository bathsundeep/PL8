/* Create interfaces we use through project and import them when needed */

export interface Model {
    key: {
        kind: string;
        id: number;
    }
} 

export interface User extends Model {
    propertyMap: {
        Username: string;
        Email: string;
        Preferences: string[];
    }

}

export interface Ingredient {
    ingredient: string;
    amount: number;
    unit: string;
}

export interface Recipe extends Model {
    propertyMap: {
        Name: string;
        Description: string;
        Ingredients: Ingredient[];
        Pic: string;
    }
}
export interface RecipeBase extends Model {
    propertyMap: {
        Name: string;
        Description: string;
        Ingredients: string;
        Pic: string;
    }
}

