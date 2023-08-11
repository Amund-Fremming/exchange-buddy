package exchange.student.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exchange.student.entity.Userrpost;
import exchange.student.repository.UserpostRepo;

/**
 * 
 * @author Burgerking
 */

@Service
public class UserrpostService {

	private @Autowired UserpostRepo userpostRepo;
	
	/**
	 * finds the userposts that match with the given paramters
	 * 
	 * @param price, term, city
	 * @return list of right posts
	 */
	
	public List <Userrpost> filterByParameters(String term, String city, String country, String minprice, String maxprice) {
		List<Userrpost> allPosts = userpostRepo.findAll();
		List<Userrpost> filtered = allPosts;
			
		
		if (!term.equals("")) {
			filtered = filtered.stream().filter(x -> term.equals(x.getTerm())).toList();
		}
		
		if (!city.equals("")) {
			filtered = filtered.stream().filter(x -> city.equals(x.getCity())).toList();
		}
		
		if (!country.equals("")) {
			filtered = filtered.stream().filter(x -> country.equals(x.getCountry())).toList();
		}
		
		try {
			
			if (!minprice.equals("")) {
				filtered = filtered.stream().filter(x -> Integer.parseInt(x.getMinprice()) >= Integer.parseInt(minprice)).toList();
			}
			
			if (!maxprice.equals("")) {
				filtered = filtered.stream().filter(x -> Integer.parseInt(x.getMaxprice()) <= Integer.parseInt(maxprice)).toList();
			}
			
		} catch(Exception e) {
			System.out.println("Feil pris fra og til");
			e.printStackTrace();
		}
	
		
		
		return filtered;
	}
	
	/**
	 * stores a new userpost to the database
	 * 
	 * @param a userpost object
	 * @return the userpost object
	 * 
	 */
	
	public Userrpost newUserrpost(Userrpost post) {
		
		userpostRepo.save(post);
		
		return post;
	}
	
	
}
