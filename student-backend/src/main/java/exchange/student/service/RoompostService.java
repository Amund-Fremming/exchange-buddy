package exchange.student.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exchange.student.entity.Roompost;
import exchange.student.repository.RoompostRepo;

/**
 * 
 * @author BurgerKing
 *
 */

@Service
public class RoompostService {

	private @Autowired RoompostRepo roompostRepo;
	
	/**
	 * finds the roomposts that match with the given paramters
	 * 
	 * @param minprice, maxprice, term, city
	 * @return list of right posts
	 */
	
	public List <Roompost> findActiveByParameters(String minPrice, String maxPrice,
			String city, String term){
		List <Roompost> allPosts = roompostRepo.findAll();
		List <Roompost> sorted = allPosts.stream()
		.filter(x -> 
		x.getPrice().compareTo(minPrice) >= 0 &&
		x.getPrice().compareTo(maxPrice) <= 0 &&
		x.getCity().equals(city) &&
		x.getTerm().equals(term) &&
		x.isActive())
		.toList();
		
		return sorted;
	}
	
	
	/**
	 * stores a new roompost to the database
	 * 
	 * @param A roompost object
	 * @return list of right posts
	 */
	
	public Roompost newRoompost(Roompost roompost) {
		
		roompostRepo.save(roompost);
		
		return roompost;
		
	}
	
	/**
	 * Filters roomposts by incoming parameters
	 * 
	 * @param Roompost filter parameters
	 * @return list of right posts
	 */
	
	public List<Roompost> filterByParameters(String term, String city, String country, 
							boolean active, String roomates) {
		
		List<Roompost> allPosts = roompostRepo.findAll();
		List<Roompost> filteredPosts = allPosts;
		
		if (!term.equals("")) {
			filteredPosts = filteredPosts.stream().filter(x -> term.equals(x.getTerm())).toList();
		} 
		
		if (!city.equals("")) {
			filteredPosts = filteredPosts.stream().filter(x -> city.equals(x.getCity())).toList();
		}
		
		if (!country.equals("")) {
			filteredPosts = filteredPosts.stream().filter(x -> country.equals(x.getCountry())).toList();
		}
		
		if (!roomates.equals("")) {
			filteredPosts = filteredPosts.stream().filter(x -> roomates.equals(x.getRoomates())).toList();
		}
		
		return filteredPosts;
		
	}
	
}
