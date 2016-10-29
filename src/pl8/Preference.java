package pl8;

// POJO to store a single preference
// TODO input sanitizing
class Preference {

    // TODO if time permits, possibly make an enum for units
    private float amount;
    private String units;
    private Ingredient ingredient;

    public Preference(float amount, String units, Ingredient ingredient) {
        this.amount = amount;
        this.units = units;
        this.ingredient = ingredient;
    }

    public float getAmount() {
        return amount;
    }
    public void setAmount(float amount) {
        this.amount = amount;
    }

    public String getUnits() {
        return units;
    }
    public void setUnits(String units) {
        this.units = units;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }
    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }
}