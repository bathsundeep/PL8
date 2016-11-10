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

//TODO create and import API Error code
import pl8.api.JsonServlet;

/* This class processes signup POST requests from signup.html. */
@SuppressWarnings("serial")
public class Signup extends JsonServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse resp)
			throws IOException {		
		System.out.println("Attempting sign up");
		
		/* Get parameters from login attempt */
		String username = request.getParameter("username");
		
		/* Remove white space */
		username = username.replaceAll("\\s+","");
		
		String pw = request.getParameter("password");
		String email = request.getParameter("email");
		
		Entity entity = UserLoader.getUserByUsername(username);
		
		/* Existence check. U will not be null if an existing
		 * User with this username exists.
		 */
		if(entity != null)
		{
			jsonForbidden(resp, new APIError(APIErrorCode.UsernameAlreadyTaken, "Username is taken."));
			
			return;
		}
		
		//Create new user object, save it with userloader
		User user = new User(username, pw, email);
		try {
			entity = UserLoader.saveUser(user);
		} catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
			json(resp, HttpStatusCodes.STATUS_CODE_SERVER_ERROR, new APIError(APIErrorCode.UnhandledException, e.toString()));
			return;
		}
		
		HttpSession session = request.getSession();
		session.setAttribute("User", entity.getProperty("Username"));

		session.setMaxInactiveInterval(365*24*60*60);
		
		jsonOk(resp, entity);
	}
}
