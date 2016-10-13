/*
The recipe class
Kevin Zhou
*/
import java.util.ArrayList;
import java.util.List;

public class Recipe{
    String name;
    Stirng picURL;
//  Arraylist of strings to store the instructions
    ArrayList<String> steps;
//  ArrayList of Ingredient objects
    ArrayList<Ingredient> ingredients;

    public Recipe(String n, ArrayList s, ArrayList i){
        name = n;
        steps = s;
        ingredients = i;
    }

    public static void addPicture(String url){
        picURL = url; 
    }

    private String listIngredients(){
        StringBuilder sb = new StringBuilder();
        for (Ingredient i : ingredients){
            sb.append("\t");
            sb.append(i.toString());
            sb.append("\n");
        }
        return sb.toString();
    }

    private String listSteps(){
        StringBuilder sb = new StringBuilder();
        for (String s : steps){
            sb.append("\n");
            sb.append(s)
        }
    }
    public String toString(){
        return "Ingredients:\n" + listIngredients() + "Steps:" + listSteps();
    }
}