package pl8;

import com.google.appengine.api.datastore.Entity;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.FilterPredicate;

public class UserPreferencesLoader {
	
	// This may or may not work
    public static Entity getUserPreferences(String username) {

        /* Init a datastore session to perform the check */
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

		/* Create Filter for Username */
		Filter uf = new FilterPredicate("Username", FilterOperator.EQUAL, username);

		/* Apply Filter to a Query on the Datastore */
		Query query = null;
		Entity entity = null;

		/* Form Query for execution */
		query = new Query("User").setFilter(uf);

		/* Run Query on Datastore */
		PreparedQuery pq = datastore.prepare(query);

		/* There should only be one result since usernames are unique */
		entity = pq.asSingleEntity();

		return entity;
    }

	public static Entity saveUserPreferences(UserPreferences up)
			throws NoSuchAlgorithmException, InvalidKeySpecException {
		
		Entity entity = up.toEntity();

		/* Add new User to the datastore */
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		datastore.put(entity);

		return entity;
	}

}