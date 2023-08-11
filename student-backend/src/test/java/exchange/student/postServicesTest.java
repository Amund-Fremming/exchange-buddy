package exchange.student;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import exchange.student.entity.Roompost;
import exchange.student.entity.Userrpost;
import exchange.student.repository.RoompostRepo;
import exchange.student.repository.UserpostRepo;
import exchange.student.service.RoompostService;
import exchange.student.service.UserrpostService;

public class postServicesTest {
	
	private @Autowired RoompostService roompostService;
	private @Autowired UserrpostService userrpostService;
	private @Autowired UserpostRepo userpostRepo;
	private @Autowired RoompostRepo roompostRepo;
	
//	Userrpost en = new Userrpost("v2022", "Bergen", "Norge", true, "Leter etter rolig campingvogn", 5000, 7000);
//	Userrpost to = new Userrpost("h2022", "Bergen", "Norge", true, "Leter etter rolig kammerat", 4000, 7000);
//	Userrpost tre = new Userrpost("v2022", "Bergen", "Norge", true, "Leter etter tjomi med bra sofaløsning", 5000, 7000);
	
//	Roompost enr = new Roompost("v2022", "Bergen", "Norge", true, 2, "hei trenger en kammerat inn", true, false, 5000);
//	Roompost tor = new Roompost("h2022", "Bergen", "Norge", true, 2, "hei trenger en kammerat inn", false, false, 7002);

//	@BeforeEach
//	public void addData() {
//		userpostRepo.save(en);
//		userpostRepo.save(to);
//		userpostRepo.save(tre);
//		
//		roompostRepo.save(enr);
//		roompostRepo.save(tor);
//	}
//	
//	@AfterEach
//	public void removeData() {
//		userpostRepo.delete(en);
//		userpostRepo.delete(to);
//		userpostRepo.delete(tre);
//		
//		roompostRepo.delete(enr);
//		roompostRepo.delete(tor);
//	}
//	
//	@Test
//	public void testFindRoomByParam () {
//		List<Roompost> test = roompostService.findActiveByParameters(5000, 7000, "Bergen", "v2022");
//		
//		assertTrue(test.contains(enr));
//		assertFalse(test.contains(tor));
		
		
		
//	}
	
	@Test
	public void testFindUserByParam () {
		
	}
	@Test
	public void testNewRoom () {
		
	}
	@Test
	public void testNewUser() {
		
	}
	
}
