package pl8;

import java.util.ArrayList;
import java.util.List;

public class User {

    private final String username;
    private String password;
    private String email;
    private List<Ingredient> preferences;
    private List<Ingredient> pantry;

    public User(String username, String password, String email) {
        this.username = username;
        /* Encrypt password using PBKDF2 */
		this.password = Password.getHash(password);
        this.email = email;
        this.preferences = new ArrayList<Ingredient>();
        this.pantry = new ArrayList<Ingredient>();
    }

    public String getUsername() {
        return username;
    }
    
    public String getPasswordHash() {
        return password;
    }
    public void setPassword(String password) {
        this.password = Password.getHash(password);
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public void addPreference(Ingredient ingredient) {
        preferences.add(ingredient);
    }

    public void changePreference(Ingredient ingredient) {
        removePreference(ingredient.ingredient);
        addPreference(ingredient);
    }

    public void removePreference(String ingredientName) {
        for (Ingredient i : preferences) {
            if (i.ingredient.equals(ingredientName)) {
                preferences.remove(i);
                return;
            }
        }
        // TODO handle this exception better
        throw new RuntimeException("Ingredient with name " + ingredientName + " does not exist");
    }

    public void removeAllPreferences() {
        preferences.clear();
    }

    public int preferenceCount() {
        return preferences.size();
    }

    public void addToPantry(Ingredient ingredient) {
        pantry.add(ingredient);
    }

    public void changePantryItemQuantity(Ingredient ingredient) {
        removePantryItem(ingredient.name);
        if (ingredient.amount <= 0) {
            pantry.add(ingredient);
        }
    }

    public void removePantryItem(String ingredientName) {
        for (Ingredient i : pantry) {
            if (i.ingredient.equals(ingredientName)) {
                preferences.remove(i);
                return;
            }
        }
        // TODO handle this exception better
        throw new RuntimeException("Ingredient with name " + ingredientName + " does not exist");
    }

    public static boolean isSoftPreference(Ingredient i) {
        return (i.amount > 0);
    }

    public Entity toEntity() {
        Entity entity = new Entity("User", username);
		entity.setProperty("Password", password);
		entity.setProperty("Email", email);
        Gson g = new Gson();
		entity.setProperty("Preferences", g.toJson(preferences));
        entity.setProperty("Pantry", g.toJson(pantry));

		return entity;
    }


}