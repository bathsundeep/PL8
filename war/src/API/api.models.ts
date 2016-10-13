/* Create interfaces we use through project and import them when needed */

export interface Model {
    key: {
        kind: string;
        id: number;
    }
} 

export interface User extends Model {
    Username: string;
    Email: string;
    Preferences: string[];
}

