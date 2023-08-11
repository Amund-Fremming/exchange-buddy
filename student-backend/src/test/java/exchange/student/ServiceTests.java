package exchange.student;

import org.junit.jupiter.api.BeforeEach;
import exchange.student.entity.Userr;
import exchange.student.service.UserrService;

/**
 * 
 * @author Dennis Osmani
 *
 */

public class ServiceTests {

	// TEST DATA
	private UserrService uservice = new UserrService();
	private Userr user1;
	private Userr user2;
	
	
	
	@BeforeEach()
	public void setup() {
				
////		user1 = uservice.RegisterUserr("12345678", "Petter", "Pilgaard", "20.12.1969", "mordiNaken", "Mann", "Vendela");
//		user2 = new Userr("12345678", "Petter", "Pilgaard", "20.12.1969", "mordiNaken", "Mann", "123", "Vendela");
//		uservice.saveUserr(user2);
		
	}
	
	
	/**
	 * Test if the users mobile is in the database
	 */
	
//	@Test
//	public void findUserrByMobile() {
//		System.out.println("Test av userr fra databasen");
//		
//		Userr usrrCheck = uservice.getUserr("12345678");	
//		System.out.println(usrrCheck.getMobile() + " " + usrrCheck.getFname() + "kukker");
//		
//		assertTrue(user2.equals(uservice.getUserr(user2.getMobile())));
//	}
	
}
