// POJO for storing user's preferences
package pl8;

public class UserPreferences {

    // Not yet sure if username should be a field
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

    public void addPreference(float amount, String units, Ingredient ingredient) {
        addPreference(new Preference(amount, units, ingredient));  
    }
    public void addPreference(Preference preference) {
        allPreferences.add(preference);
        if (preference.isSoft()) {
            softPreferences.add(preference);
        } else {
            hardPreferences.add(preference);
        }
    }

    public List<Preference> getSoftPreferences() {
        return softPreferences;
    }
    
    public List<Preference> getHardPreferences() {
        return hardPreferences;
    }


}