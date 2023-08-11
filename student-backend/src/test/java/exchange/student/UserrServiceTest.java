package exchange.student;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import exchange.student.controller.LoginController;
import exchange.student.entity.Userr;
import exchange.student.repository.UserrRepo;
import exchange.student.service.UserrService;
import exchange.student.util.LoginLogoutUtil;

//Denne funker ikke av en eller annen grunn

@ExtendWith(MockitoExtension.class)
@ExtendWith(SpringExtension.class)
public class UserrServiceTest {
	
	@MockBean
	private UserrRepo repo;
	
	@InjectMocks
	private UserrService service;
	
	
	@Test
	public void getUserFromMobileNr() {
		Userr user2 = new Userr("12345678", "Petter", "Pilgaard", "20.12.1969", "mordiNaken", "Mann", "123", "Vendela");
		service.saveUserr(user2);
		Mockito.when(repo.findByMobile("12345678")).thenReturn(user2);
		
		Userr temp = service.getUserr("12345678");
		assertNotNull(temp);
		assertEquals("Petter", temp.getFname());
	}
	
	@Test
	public void contextLoads() throws Exception {
		assertThat(service).isNotNull();
	}
	
}