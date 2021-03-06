package pl8;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.api.client.http.HttpStatusCodes;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.labs.repackaged.org.json.JSONArray;
import com.google.appengine.labs.repackaged.org.json.JSONException;
import com.google.appengine.labs.repackaged.org.json.JSONObject;
import com.google.gson.Gson;

import pl8.api.JsonServlet;
import pl8.api.APIError;
import pl8.api.APIError.APIErrorCode;

// Parameters: boolean usePreferences, string username, string query, and more?
@SuppressWarnings("serial")
public class SearchRequest extends JsonServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse resp)
			throws IOException {
		/*String recipeName = request.getParameter("name");
		recipeName = recipeName.trim();
		
		
		String description = request.getParameter("description");
		List<Ingredient> ingredients = new ArrayList<Ingredient>();
		String ingredientJson = request.getParameter("ingredients");
		JSONObject obj = null;
		JSONArray arr = null;
		try {
			arr = new JSONArray(ingredientJson);
		}
		catch (JSONException e) {
			//JSON parsing error
			System.out.println(e.getMessage());
		}
		for (int i = 0; i < arr.length(); i++) {
			Ingredient ing; 
			try {
				obj = arr.getJSONObject(i);
				ing = new Ingredient(obj.getString("name").trim(), obj.getDouble("amount"), obj.getString("unit"));
				if (ing.amount <= 0.0 || ing.name.equals("")) {
					jsonServerError(resp, new APIError(APIErrorCode.InvalidIngredient, "Something was wrong with an ingredient."));
					return;
				}
				ingredients.add(ing);
			}
			catch (JSONException e) {
				continue;
			}	
			
		}
	
		if (recipeName.isEmpty() == true || ingredients.size() == 0) {
			jsonServerError(resp, new APIError(APIErrorCode.InvalidName, "Recipe name was blank."));
			return;
		}
		catch (Exception e) {
			//Parse error
		}
		ArrayList<String> steps = new ArrayList<String>();
		steps.add("steps");
		steps.add("go");
		steps.add("here");
		Recipe recipe = new Recipe(recipeName, description, ingredients, steps);
		Entity entity = recipe.toEntity();
		try {
			entity = RecipeLoader.saveRecipe(recipe);
		} catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
			json(resp, HttpStatusCodes.STATUS_CODE_SERVER_ERROR, new APIError(APIErrorCode.UnhandledException, e.toString()));
			return;
		}
		
		jsonOk(resp, entity);*/
	}
	
}