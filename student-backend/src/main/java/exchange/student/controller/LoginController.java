package exchange.student.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import exchange.student.entity.Userr;
import exchange.student.service.UserrService;
import exchange.student.util.LoginLogoutUtil;

/**
 * 
 * @author haraldnilsen
 *
 * Provides methods for giving a user access to
 * exchange-buddy's services
 *
 */

@RestController
@RequestMapping("/api")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST},
		allowedHeaders = {"Content-Type", "Authorization"}
		)
public class LoginController {

	@Autowired
	UserrService userService;
	
	private String response = "";
	
	@GetMapping("response2")
	public String response2() {
		return response;
	}
	
	/**
	 * If userinput is valid - send accept-response
	 * @param userr
	 */
	@PostMapping("login")
	public void loginUser(@RequestBody Userr userr) {
		System.err.println("Login request received");
		Userr user = userService.getUserr(userr.getMobile());
		
		if(LoginLogoutUtil.isUserValid(user, userr.getMobile(), userr.getPassword())) {
			
			response = "Valid";
			
		} else {
			
			response = "Invalid username and/or password";
			
	    }
	}
	
	
	
	
}
