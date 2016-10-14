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
    ArrayList<String> tags;

    public Recipe(String n, ArrayList s, ArrayList i){
        name = n;
        steps = s;
        ingredients = i;
        tags = new ArrayList<String>;
    }

//  Add picture to recipe
    public void addPicture(String url){
        picURL = url; 
    }

//  Add and remove tags from recipe
    public void addTag(String tag){
        tags.add(tag);
    }
    pubilc void removeTag(String tag){
        tags.remove(tag);
    }

//  Retrieve tag list
    public ArrayList getTags(){
        return tags;
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
    public String toString(){
        return "Ingredients:\n" + listIngredients() + "Steps:" + listSteps();
    }
}