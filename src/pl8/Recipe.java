package pl8;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.google.appengine.api.datastore.Entity;

// POJO representing a recipe
public class Recipe{
    private String name;
    private String picURL;
    private List<String> steps;
    private List<Ingredient> ingredients;
    private List<String> tags;
    // Unique ID for each recipe. This way multiple recipes can have the same name
    final private String id;

//  Create recipe
    public Recipe(String n, List<String> s, List<Ingredient> i){
        name = n;
        steps = s;
        ingredients = i;
        tags = new ArrayList<String>();
        id = UUID.randomUUID().toString();
    }

    //  Create empty recipe
    // Should it even be possible to create a recipe without a name or steps or ingredients?
    pubic Recipe(){
        this("Empty Recipe", new ArrayList<String>(), new ArrayList<Ingredient>());
    }

//  Add picture to recipe
    public void setPicture(String url){
        if (isValidPictureURL(url)) {
            picURL = url;
        }
    }
//  Retrieve picture for recipe
    public String getPicture(){
        return picURL;
    }

//  Add and remove tags from recipe
    public void addTag(String tag){
        if (!tags.contains(tag)) {
            tags.add(tag);
        }
    }
    public void removeTag(String tag){
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
    @Override
    public String toString(){
        return "Ingredients:\n" + listIngredients() + "Steps:" + listSteps();
    }

//  Retrieve individual components of the recipe
    public String getName(){
        return name;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }
    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }
    public List<String> getSteps() {
        return steps;
    }
    public void setSteps(List<String> steps) {
        this.steps = steps;
    }
    public List<String> getTags() {
        return tags;
    }

    public String getId() {
        return id;
    }

    // TODO implement this
    private static boolean isValidPictureURL(String url) {
        return true;
    }

    @Override
    public String toString() {
        String ret = "Recipe with the following ingredients:\n";
        for (Ingredient i : ingredients) {
            ret += i.toString();
        }
        ret += "\nthe following steps:\n";
        for (String s : steps) {
            ret += s;
        }
        ret += "\nAnd the following tags:\n";
        for (String t : tags) {
            ret += t;
        }
        return ret;
    }

    public Entity toEntity() {
        Entity entity = new Entity("Recipe", id);
        entity.setProperty("Name", name)
		entity.setProperty("PictureURL", picURL);
		entity.setProperty("Steps", steps);
		entity.setProperty("Ingredients", ingredients);
        entity.setProperty("Tags", tags);
        return entity;
    }

}