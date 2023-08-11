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

import exchange.student.entity.Roompost;
import exchange.student.entity.RoompostFromFrontend;
import exchange.student.entity.Userr;
import exchange.student.repository.RoompostRepo;
import exchange.student.repository.UserrRepo;
import exchange.student.service.RoompostService;

/**
 * 
 * Provides methods to get all the
 * registered roomposts, based on different
 * criterias
 * 
 * @author haraldnilsen
 *
 */
@RestController
@RequestMapping("/api/roompost")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST},
		allowedHeaders = {"Content-Type", "Authorization"}
		)

public class RoompostController {
	
	@Autowired private RoompostService roompostService;
	@Autowired private RoompostRepo roompostRepo;
	@Autowired private UserrRepo userrRepo;
	
	@GetMapping("all")
	public List <Roompost> getAllRoomposts(){
		return roompostRepo.findAll();
	}
	
	/**
	 * Retrieves a list of roomposts matching given roompost parameters
	 * @param Roompost
	 */
	@PostMapping("filter")
	public List<Roompost> getFilteredRoomposts(@RequestBody Roompost roompost) {
		
		List<Roompost> filter = roompostService.filterByParameters(roompost.getTerm(), roompost.getCity(), 
					roompost.getCountry(), roompost.isActive(), roompost.getRoomates());
		
		
		return filter;
	}
	
	/**
	 * Retrieves a list of existing cities in roompost database
	 * @param 
	 */
	@GetMapping("cities")
	public List<String> getCities() {
		return roompostRepo.findAll().stream().map(rp -> rp.getCity()).distinct().toList();
		
	}
	
	/**
	 * Retrieves a list of existing countries in roompost database
	 * @param
	 */
	@GetMapping("countries")
	public List<String> getCountries() {
		return roompostRepo.findAll().stream().map(rp -> rp.getCountry()).distinct().toList();
	}

	/* ------------------------------------------------------------------------------------ */
	// CREATE ADS/POST FOR USER
	
	/**
	 * Retrieves the room in the database with the given mobile, else returns a empty object
	 * @param mobile
	 */
	@PostMapping("/userroompost")
	public Roompost getRoompostByMobile(@RequestParam String mobile) {
		Userr usr = userrRepo.findByMobile(mobile);
		Roompost rp = roompostRepo.findByMobile(usr);
		
		if(rp == null) {
			Roompost newRP = new Roompost();
			newRP.setAddress("none");
			return newRP;
		}
		
		return roompostRepo.findByMobile(usr);
	}
	
	@PostMapping("/rpostid")
	public Roompost getRoompostById(@RequestParam String rpostid) {
		return roompostRepo.findByRpostid(Integer.parseInt(rpostid));
	}
	
	
	/**
	 * Stores a new roompost in DB getting object from frontend
	 * @param Roompost
	 */
	@PostMapping("newpost")
	public void newRoompost(@RequestBody Roompost roompost) {
		System.err.println("adding roompost");
		roompostRepo.save(roompost);
	}
	
	@PostMapping("/deletePost")
	public void deleteRoomPost(@RequestParam String rpid) {
		System.err.println("deleting roompost");
		
	}
	
	
	/**
	 * Creates a new roompost with object retrieved from frontend
	 * @param Roompost
	 */
	@PostMapping("roompost")
	public Roompost createRoompost(@RequestBody Roompost roompost) {
		return roompostService.newRoompost(roompost);
	}
	
	
}
