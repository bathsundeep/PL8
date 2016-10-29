// POJO for storing user's preferences
package pl8;

public class UserPreferences {

    String username;
    List<Preference> allPreferences;
    List<Preference> softPreferences;
    List<Preference> hardPreferences;

    public UserPreferences(String username) {
        this.username = username;
        this.allPreferences = new ArrayList<Preference>();
        this.softPreferences = new ArrayList<Preference>();
        this.hardPreferences = new ArrayList<Preference>();
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    


}