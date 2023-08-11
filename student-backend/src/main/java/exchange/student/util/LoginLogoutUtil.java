package exchange.student.util;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;

import exchange.student.entity.Userr;
import exchange.student.service.UserrService;

public class LoginLogoutUtil {

	/**
	 * @author Dennis Osmani
	 * 
	 * makes sure the username is the user wants to use to login in is valid
	 */
	
	public static final String MAX_8_DIGIT = "^[0-9]{8}$";

	/**
	 * Check incoming mobile for match of regexp for mobile
	 * @param mobile
	 */
    public static boolean isValidMobile(String mobile) {
    	return mobile != null && mobile.matches(MAX_8_DIGIT);
    }
    
    /**
	 * Invalidates the current session, stopping access to logged in functions
	 * @param HttpSession
	 */
    public static void loggUtBruker(HttpSession session) {
		session.invalidate();
	}
    
    /**
	 * Checks if current session is a valid session, telling if someone is logged in or not
	 * @param HttpSession
	 */
    public static boolean erBrukerInnlogget(HttpSession session) {
		return session != null;
	}
    
    /**
	 * Checks if given parameters is valid, and if user exists, deciding if login is available or not
	 * @param Userr, mobile, password
	 */
    public static boolean isUserValid(Userr userDB, String mobile, String password) {
    	
    	if(userDB == null)
    		return false;
    	
    	if(!isValidMobile(mobile) || !userDB.getMobile().matches(mobile) || !PasswordHashAndSalt.validerMedSalt(password, userDB.getSalt(), userDB.getPassword())) {
    		return false;
    	}
    		
    	return true;
    	
    }
    
}
