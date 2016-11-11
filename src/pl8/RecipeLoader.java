@@ -1,97 +0,0 @@
package pl8;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.ArrayList;
import java.util.List;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.FilterPredicate;

public class RecipeLoader {

	// TODO at some point change this to a thing that returns a list of Entity objects
	public static Entity getRecipeByName(String name) {
		/* Init a datastore session to perform the check */
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

		/* Create Filter for Email */
		Filter filter = new FilterPredicate("Name", FilterOperator.EQUAL, name);

		/* Apply Filter to a Query on the Datastore */

		/* Form Query for execution */
		Query query = new Query("Recipe").setFilter(filter);

		/* Run Query on Datastore */
		PreparedQuery pq = datastore.prepare(query);

		//For now, only one entity will be able to have each name :(
		Entity entity = pq.asSingleEntity();

		return entity;
	}

	// Don't think this will work quite right, since an ingredient with 1ounce and 2ounce are not equal
	public static Entity getRecipeByIngredients(Ingredient ingredients[]) {

		/* Validate ingredient list */
		if (ingredients.size() == 0) {
			jsonForbidden(resp, new APIError(APIErrorCode.InvalidPassword, "Must enter at least one ingredient."));
			return null;
		}

		/* Init a datastore session to perform the check */
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

		/* Create Filter for Recipes */
		//Filter uf = new FilterPredicate("Ingredients", FilterOperator.IN, name);
		ArrayList<Filter> ingredientListFilter = [];
		for (String ingredient : ingredients) {
			ingredientListFilter.add(new FilterPredicate("Ingredients", FilterOperator.IN, ingredient))
		}
		
		// Combine individual recipe filters into single filter
		CompositeFilter ingredientsFilter = CompositeFilterOperator.and(ingredientListFilter)

		/* Apply Filter to a Query on the Datastore */

		/* Form Query for execution */
		Query query = new Query("Recipe").setFilter(ingredientsFilter);

		/* Run Query on Datastore */
		PreparedQuery pq = datastore.prepare(query);

		/* REturns list */
		Entity entity = pq.asList();

		return entity;
	}

	public static void deleteAll() {
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

		Query query = new Query("Recipe");

		Iterable<Entity> it = datastore.prepare(query).asIterable();

		List<Key> keys = new ArrayList<Key>();
		for (Entity entity : it) {
			keys.add(entity.getKey());
		}

		datastore.delete(keys);
	}

	public static Entity saveRecipe(Recipe recipe)
			throws NoSuchAlgorithmException, InvalidKeySpecException {

		Entity entity = recipe.toEntity();

		/* Add new Recipe to the datastore */
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		datastore.put(entity);

		return entity;
	}

}