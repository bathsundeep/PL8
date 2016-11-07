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




}