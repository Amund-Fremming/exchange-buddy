package exchange.student.util;

import org.springframework.web.bind.annotation.PostMapping;

import exchange.student.entity.Userr;

public class RegexUtil {
	
	private static final String USERNAME_VALIDATOR = "[0-9]{8}$";
	private static final String FNAME_VALIDATOR = "^[a-zA-Z ]*$";
	private static final String LNAME_VALIDATOR = "^[a-zA-Z ]*$";
	private static final String FDATE_VALIDATOR = "^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$";
//	private static final String PROFILEPIC_VALIDATOR = "^[a-zA-Z0-9\\.]+$";
	private static final String SEX_VALIDATOR = "^[a-zA-Z]*$";
	private static final String PASSWORD_VALIDATOR = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$";
	
	
	/**
	 * Regex validating parameters when user tries to register
	 * @param Userr
	 */
	public static boolean validateUser(Userr userr) {
		
		if (userr.getMobile().matches(USERNAME_VALIDATOR) &&
			userr.getFname().matches(FNAME_VALIDATOR) &&
			userr.getLname().matches(LNAME_VALIDATOR) &&
			userr.getFdate().matches(FDATE_VALIDATOR) && 
//			userr.getProfilepic().matches(PROFILEPIC_VALIDATOR) &&
			userr.getSex().matches(SEX_VALIDATOR) &&
			userr.getPassword().matches(PASSWORD_VALIDATOR)) {
			
			return true;
		}
		
		return false;
	}
}
