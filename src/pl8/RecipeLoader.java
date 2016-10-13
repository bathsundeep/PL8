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

// Basically plagiarized from UserLoader.java

public class RecipeLoader {
	public static Entity getRecipeByName(String name) {
		/* Init a datastore session to perform the check */
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

		/* Create Filter for Email */
		Filter uf = new FilterPredicate("Name", FilterOperator.EQUAL, name);

		/* Apply Filter to a Query on the Datastore */
		Query q = null;
		Entity u = null;

		/* Form Query for execution */
		q = new Query("Recipe").setFilter(uf);

		/* Run Query on Datastore */
		PreparedQuery pq = datastore.prepare(q);

		/* There should only be one result since emails are unique */
		u = pq.asSingleEntity();

		return u;
	}

	public static void deleteAll() {
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

		Query q = new Query("Recipe");

		Iterable<Entity> it = datastore.prepare(q).asIterable();

		List<Key> keys = new ArrayList<Key>();
		for (Entity entity : it) {
			keys.add(entity.getKey());
		}

		datastore.delete(keys);
	}

	public static Entity saveRecipe(String name, String ingredients[], String steps)
			throws NoSuchAlgorithmException, InvalidKeySpecException {

		/* Set Entity properties */
		Entity u = new Entity("Recipe");
		u.setProperty("Name", name);
		u.setProperty("Ingredients", ingredients);
		u.setProperty("Steps", steps);

		/* Add new User to the datastore */
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		datastore.put(u);

		return u;
	}
}