package pl8;

import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Blob;

import java.util.List;
import java.util.ArrayList;

// This class should no longer be needed. UserPreferences is now part of the User class
public class UserPreferences {

    // Not yet sure if username should be a field
    //String username;
    private List<Ingredient> preferences;    

    /*public UserIngredients(String username) {
        this.username = username;
        this.preferences = new ArrayList<Ingredient>();
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }*/

    public UserPreferences() {
        this.preferences = new ArrayList<Ingredient>();
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

    public int count() {
        return preferences.size();
    }

    public static boolean isSoftPreference(Ingredient i) {
        return (i.amount > 0);
    }

    // This should not be used.
    /*public Entity toEntity() {
        Entity entity = new Entity("username", username);
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(bos);
        oos.writeObject(preferences);
        byte[] bytes = bos.toByteArray();
        Blob blob = new Blob(bytes);
        entity.setProperty("list", blob);
        return entity;
    }*/

    public Blob preferencesListToBlob() {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(bos);
        oos.writeObject(preferences);
        byte[] bytes = bos.toByteArray();
        Blob blob = new Blob(bytes);
        return blob;
    }

}