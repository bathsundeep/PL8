/*
The ingredient class
Kevin Zhou
*/
import com.google.appengine.api.datastore.Entity;


public class Ingredient {
    String ingredient;
    float quantity;
    String unit;

    public String name;
	public double amount;
	public String unit;
	
	public Ingredient(String name, double amount, String unit) {
		this.name = name;
		this.amount = amount;
		this.unit = unit;
	}

//  3 Argument constructor
//  Example: 4 lbs of chicken
    public Ingredient(float q, String u, String i){
        quantity = q;
        unit = u;
        ingredient = i;
    }

//  2 Argument constructor
//  Example: 2 eggs
    public Ingredient(float q, String i){
        quantity = q;
        ingredient = i;
        unit = null;
    }

//  1 Argument constructor
//  Example: salt
    public Ingredient(String i){
        ingredient = i;
        quantity = 0;
        unit = null;
    }

    public String toString(){
//      1 argument ingredient
        if (quantity == 0){
            return ingredient;
        }
//      2 argument ingredient
        else if (unit == null){
            return Float.toString(quantity) + ingredient;
        }
//      3 argument ingredient
        else{
            return Float.toString(quantity) + unit + "of" + ingredient;
        }
    }

    public Entity toEntity(){
        Entity ingredientity = new Entity("ingredient", ingredient);
        ingredientity.setProperty("quantity", quantity);
        ingredientity.setProperty("unit", unit);
        return ingredientity;
    }
    
}