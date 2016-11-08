package pl8;

import java.util.ArrayList;
import java.util.List;

public class User {

    private String username;
    private String password;
    private String email;
    private UserPreferences preferences;

    public User(String username, String password, String email) {
        this.username = username;
        /* Encrypt password using PBKDF2 */
		this.password = Password.getHash(password);
        this.email = email;
        this.preferences = new UserPreferences();
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


}