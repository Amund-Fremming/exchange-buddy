package exchange.student.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import exchange.student.entity.Userr;
import exchange.student.service.UserrService;
import exchange.student.util.PasswordHashAndSalt;


/**
 * 
 * Provides methods for updating and
 * fetching data from the
 * user-database
 * 
 * @author haraldnilsen, dennisosmani, amundfremming
 *
 */
@RestController
@RequestMapping("/api/user")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT},
		allowedHeaders = {"Content-Type", "Authorization"}
		)
public class UserrController {

	@Autowired private UserrService userService;
	
	/**
	 * Retrieves the user in the database with the given mobile
	 * @param mobile
	 */
	@PostMapping("/profile")
	public Userr getUserProfile(@RequestParam String mobile) {
		return userService.getUserr(mobile);
	}
	
	/**
	 * Updates the user in the database with the given params from frontend object
	 * @param mobile
	 */
	@PutMapping("{mobile}")
	public ResponseEntity <Userr> updateUser(@PathVariable String mobile, @RequestBody Userr userDetails) {
		Userr updatedUser = userService.getUserr(mobile);
		
		updatedUser.setFdate(userDetails.getFdate());
		updatedUser.setFname(userDetails.getFname());
		updatedUser.setLname(userDetails.getLname());
		String nySalt = PasswordHashAndSalt.genererTilfeldigSalt();
		String nyPass = PasswordHashAndSalt.hashMedSalt(userDetails.getPassword(), nySalt);
		updatedUser.setPassword(nyPass);
		updatedUser.setSalt(nySalt);
		updatedUser.setProfilepic(updatedUser.getProfilepic());
		updatedUser.setSex(userDetails.getSex());
		
		userService.saveUserr(updatedUser);
		
		return ResponseEntity.ok(updatedUser);
		
	}
	
}
