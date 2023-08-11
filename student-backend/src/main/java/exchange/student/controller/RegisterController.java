package exchange.student.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import exchange.student.entity.Userr;
import exchange.student.service.UserrService;
import exchange.student.util.RegexUtil;


/**
 * 
 * Provides methods for registering 
 * new students to the database.
 * 
 * @author haraldnilsen, dennisosmani, amundfremming
 *
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST},
		allowedHeaders = {"Content-Type", "Authorization"}
		)

public class RegisterController {
	
	@Autowired UserrService userService;
	
	private String response = "";
	
	@GetMapping("response") 
	public String responseMessage() {
		
		return response;
	}

	/**
	 * Registers a new user if database doesnt contain a user with same ID
	 * @param userr
	 */
	
	@PostMapping("user")
	public /*ResponseEntity<Userr>*/ void postStudent(@RequestBody Userr user) {
		
		Userr duplicateUser = userService.getUserr(user.getMobile());
		
		if (duplicateUser != null) {
			// User is not in database
			response = "User already exists!";
			return;
		}
		
		boolean valid = RegexUtil.validateUser(user);
		
		if(valid) {
			userService.RegisterUserr(user);
			response = "Valid";
		} else {
			response = "Invalid input";
		}
		
	}
	
}
