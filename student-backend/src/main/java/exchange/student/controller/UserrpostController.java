package exchange.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import exchange.student.entity.UserpostSearchEntity;
import exchange.student.entity.Userr;
import exchange.student.entity.Userrpost;
import exchange.student.repository.UserpostRepo;
import exchange.student.repository.UserrRepo;
import exchange.student.service.UserrService;
import exchange.student.service.UserrpostService;


/**
 * 
 * Provides methods to allow
 * the frontend to get the 
 * registered userposts
 * 
 * @author haraldnilsen, dennisosmani, amundfremming
 *
 */
@RestController
@RequestMapping("/api/userpost")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT},
		allowedHeaders = {"Content-Type", "Authorization"}
		)
public class UserrpostController {

	@Autowired private UserrpostService userrpostService;
	@Autowired private UserpostRepo userrpostRepo;
	@Autowired private UserrRepo userRepo;
	
	
	@GetMapping("all")
	public List<Userrpost> getAllUserposts() {
		return userrpostRepo.findAll();
	}
	
	/**
	 * Retrieves a list of userposts matching given userpost parameters
	 * @param userpostsearchentity
	 */
	@PostMapping("filter")
	public List<Userrpost> getFilteredUserrposts(@RequestBody UserpostSearchEntity userrpost) {
		
		List<Userrpost> filter = userrpostService.filterByParameters(userrpost.getTerm(),
				userrpost.getCity(), userrpost.getCountry(), userrpost.getPricefrom(), userrpost.getPriceto());
		
		return filter;
	}
	
	/**
	 * Retrieves a list of existing cities in userpost database
	 * @param 
	 */
	@GetMapping("cities")
	public List<String> getCities() {
		return userrpostRepo.findAll().stream().map(rp -> rp.getCity()).distinct().toList();
		
	}
	
	/**
	 * Retrieves a list of existing countries in userpost database
	 * @param
	 */
	@GetMapping("countries")
	public List<String> getCountries() {
		return userrpostRepo.findAll().stream().map(rp -> rp.getCountry()).distinct().toList();
	}
	
	/**
	 * Retrieves the user in the database with the given mobile
	 * @param mobile
	 */
	@PostMapping("mobile")
	public Userr getUser(@RequestParam String mobile) {
		System.err.println("getting: "+ mobile);
		return userRepo.findByMobile(mobile);
	}
	
	
	/* ------------------------------------------------------------------------------------ */
	// CREATE ADS/POST FOR USER
	
	/**
	 * Stores a new userpost in DB getting object from frontend
	 * @param Userrpost
	 */
	@PostMapping("postuser")
	public Userrpost createUserrpost(@RequestBody Userrpost userrpost) {
		System.err.println("Adding new user post");
		return userrpostService.newUserrpost(userrpost);
	}
	
	/**
	 * Retrieves the user in the database with the given mobile, else returns a empty object
	 * @param mobile
	 */
	@PostMapping("userrpost")
	public Userrpost getUserrpostByMobile(@RequestParam String mobile) {
		
		System.err.println("Mobile: " + mobile);

		Userr usr = userRepo.findByMobile(mobile);
		Userrpost usrPost = userrpostRepo.findByMobile(usr);
		if(usrPost == null) {
			Userrpost newPost = new Userrpost();
			newPost.setCity("none");
			return newPost;
		}
		
		return usrPost;
	}
	
	@PostMapping("upostid")
	public Userrpost getUserrpostById(@RequestParam String id) {
		return userrpostRepo.findByUpostid(Integer.parseInt(id));
	}
	
	/**
	 * Updates a userrpost in the database to the given parameters
	 * @param Userrpost
	 */
	@PutMapping("{upostid}")
	public ResponseEntity<Userrpost> updateUserrPost(@PathVariable int id, @RequestBody Userrpost userrpost){
		Userrpost upost = userrpostRepo.findByUpostid(id);
		
		upost.setActive(userrpost.isActive());
		upost.setBio(userrpost.getBio());
		upost.setCity(userrpost.getCity());
		upost.setCountry(userrpost.getCountry());
		upost.setMinPrice(userrpost.getMinPrice());
		upost.setMaxPrice(userrpost.getMaxPrice());
		upost.setTerm(userrpost.getTerm());
		
		
		userrpostRepo.save(upost);
		
		return ResponseEntity.ok(upost);
	}
}
