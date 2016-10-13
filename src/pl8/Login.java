package pl8;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.api.client.http.HttpStatusCodes;
import com.google.appengine.api.datastore.Entity;

import pl8.api.APIError;
import pl8.api.APIError.APIErrorCode;
import pl8.api.JsonServlet;
/**
 * This class processes login POST requests from the login page.
 */
@SuppressWarnings("serial")
public class Login extends JsonServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse resp)
			throws IOException {		
		/* Get parameters from login attempt */
		String user = request.getParameter("username");
		
		/* Remove white space */		
		user = user.replaceAll("\\s+","");
		String pw = request.getParameter("password");
		
		Entity u = UserLoader.getUserByUsername(user);
		
		if(u == null)
		{
			jsonForbidden(resp, new APIError(APIErrorCode.CombinationNotFound, "User & Password Combination not found."));
		}
		else
		{
			/* Now test the Password for this User entity */
			try 
			{
				if(Password.validate(pw, (String)u.getProperty("Password")))
				{
                    /* Password is valid, format request back to client with login succeed */
					HttpSession session = request.getSession();
					session.setAttribute("User", u.getProperty("Username"));

					session.setMaxInactiveInterval(365*24*60*60);
					
					jsonOk(resp, u);
				}
				else
				{
					jsonForbidden(resp, new APIError(APIErrorCode.CombinationNotFound, "User & Password Combination not found."));
				}
			} 
			catch (NoSuchAlgorithmException | InvalidKeySpecException e) 
			{
				e.printStackTrace();
				json(resp, HttpStatusCodes.STATUS_CODE_SERVER_ERROR, new APIError(APIErrorCode.UnhandledException, e.toString()));
			}
		}

	}
	public void doGet(HttpServletRequest request, HttpServletResponse resp)
			throws IOException {
		resp.sendRedirect("/login.html");
	}
}
