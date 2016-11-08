package pl8;

import java.util.ArrayList;
import java.util.List;

public class User {

    private String username;
    private String password;
    private String email;
    private List<Ingredient> preferences;

    public User(String username, String password, String email) {
        this.username = username;
        /* Encrypt password using PBKDF2 */
		this.password = Password.getHash(password);
        this.email = email;
        this.preferences = new ArrayList<Ingredient>();
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
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

    public void removeAllPreferences() {
        preferences.clear();
    }

    public int preferenceCount() {
        return preferences.size();
    }

    public static boolean isSoftPreference(Ingredient i) {
        return (i.amount > 0);
    }


}