@@ -0,0 +1,69 @@
package pl8;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.api.client.http.HttpStatusCodes;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

// Basically plagiarized from SignUp.java

//TODO create and import API Error code
import pl8.api.JsonServlet;

// IDFK what's going on, I'm just adding stuff I think makes sense

/* This class processes AddRecipe POST requests from <somewhere>. */
@SuppressWarnings("serial")
public class GetRecipes extends JsonServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse resp)
			throws IOException {		
            
        // Not recommended. Should add logging framework. Whatever that means
		System.out.println("Attempting to retrieve recipes");
		
		/* Get parameters */
		String ingredients[] = request.getParameter("Ingredients");
		
		}

		Entity u = RecipeLoader.getRecipeByIngredients(name);
		
		/* Existence check. u will not be null if an existing
		 * Recipe with this name exists.
		 */
		if(u != null)
		{
			jsonForbidden(resp, new APIError(APIErrorCode.RecipeNameTaken, "No recipes matching those ingredients."));
			
			return;
		}
		
		
		HttpSession session = request.getSession();
        // IDK what this does but I'll keep it
		session.setAttribute("Recipe", u.getProperty("Name"));

		session.setMaxInactiveInterval(365*24*60*60);
		
		jsonOk(resp, u);
	}
}