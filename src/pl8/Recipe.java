/*
The recipe class
Kevin Zhou
*/
import java.util.ArrayList;
import java.util.List;

public class Recipe{
    String name;
    String picURL;
//  Arraylist of strings to store the instructions
    ArrayList<String> steps;
//  ArrayList of Ingredient objects
    ArrayList<Ingredient> ingredients;
    ArrayList<String> tags;

//  Create recipe
    public Recipe(String n, ArrayList s, ArrayList i){
        name = n;
        steps = s;
        ingredients = i;
        tags = new ArrayList<String>;
    }
//  Create empty recipe
    pubic Recipe(){
        name = "";
        steps = new ArrayList<String>(0);
        ingredients = new ArrayList<Ingredient>(0);
        tags = new ArrayList<String>(0);
    }

//  Add picture to recipe
    public void setPicture(String url){
        picURL = url; 
    }
//  Retrieve picture for recipe
    public String getPicture(){
        return picURL;
    }

//  Add and remove tags from recipe
    public void addTag(String tag){
        tags.add(tag);
    }
    pubilc void removeTag(String tag){
        tags.remove(tag);
    }

    private String listIngredients(){
        if (ingredients.size() == 0)
            return "\tNo ingredients\n"
        StringBuilder sb = new StringBuilder();
        for (Ingredient i : ingredients){
            sb.append("\t");
            sb.append(i.toString());
            sb.append("\n");
        }
        return sb.toString();
    }

    private String listSteps(){
        if (steps.size() == 0)
            return "\nNo steps";
        StringBuilder sb = new StringBuilder();
        for (String s : steps){
            sb.append("\n");
            sb.append(s)
        }
    }

//  Print entire recipe
    public String toString(){
        return "Ingredients:\n" + listIngredients() + "Steps:" + listSteps();
    }

//  Retrieve individual components of the recipe
    public String getName(){
        return name;
    }
    public String[] getIngredients(){
        String[] ingredientList = new String[ingredients.size()];
        for (int i = 0; i < ingredients.size(); i++){
            ingredientList[i] = ingredients.get(i).toString();
        }
        return ingredientList;
    }
    public String[] getSteps(){
        String[] stepList = new String[steps.size()];
        for (int i = 0; i < steps.size(); i++){
            stepList[i] = steps.get(i);
        }
        return stepList;
    }
    public String[] getTags(){
        String[] tagList = new String[tags.size()];
        for (int i = 0; i < tags.size(); i++){
            tagList[i] = tags.get(i);
        }
        return tagList;
    }

}