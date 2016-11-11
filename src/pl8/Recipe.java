package pl8;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.google.appengine.api.datastore.Entity;

// POJO representing a recipe
public class Recipe{
    private String name;
    private String description;
    private String picURL;
    private List<String> steps;
    private List<Ingredient> ingredients;
    private List<String> tags;
    // Unique ID for each recipe.
    // Unfortunately recipes with multiple names have not been implemented :(
    final private String id;

//  Create recipe
    public Recipe(String name, String description, List<String> steps, List<Ingredient> ingredients){
        this.name = name;
        this.description = description;
        this.steps = steps;
        this.ingredients = ingredients;
        tags = new ArrayList<String>();
        id = UUID.randomUUID().toString();
    }

    //  Create empty recipe
    // Should it even be possible to create a recipe without a name or steps or ingredients?
    pubic Recipe(){
        this("Empty Recipe", "Blank Description", new ArrayList<String>(), new ArrayList<Ingredient>());
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public String getDescription() {
        return description;
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
        String ret = "Recipe with the following name: " + name;
        ret += "\nthe following description: " + description;
        ret = "the following ingredients:\n";
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
        Gson g = new Gson();
		entity.setProperty("Steps", g.toJson(steps));
		entity.setProperty("Ingredients", g.toJson(ingredients));
        entity.setProperty("Tags", g.toJson(tags));
        return entity;
    }

}