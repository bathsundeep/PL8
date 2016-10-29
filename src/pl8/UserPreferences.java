package pl8;

import com.google.appengine.api.datastore.Entity;

public class UserPreferences {

    // Not yet sure if username should be a field
    String username;
    List<Ingredient> preferences;    

    public UserIngredients(String username) {
        this.username = username;
        this.preferences = new ArrayList<Ingredient>();
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public void addPreference(Ingredient ingredient) {
        preferences.add(Ingredient);
    }

    public void changePreference(Ingredient ingredient) {
        removePreference(i.ingredient);
        addPreference(ingredient);
    }

    public void removePreference(String ingredientName) {
        for (Ingredient i : preferences) {
            if (i.ingredient.equals(ingredientName)) {
                preferences.remove(i);
                return;
            }
        }
        throw new RuntimeException("Ingredient with name " + ingredientName + " does not exist");
    }

    public static boolean isSoftPreference(Ingredient i) {
        return (i.amount > 0);
    }

    // TODO implement this
    public Entity toEntity() {
        return null;
    }

}