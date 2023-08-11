package exchange.student.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import exchange.student.entity.Userr;
import exchange.student.repository.UserrRepo;
import exchange.student.util.PasswordHashAndSalt;


/**
 * 
 * @author Dennis Osmani
 *
 */


@Service
public class UserrService {

	
	private @Autowired UserrRepo urepo;
	
	/**
	 * Register a user and generate password with salt and hashing
	 * @param user
	 * @return
	 */
		
	public Userr RegisterUserr(Userr user) {
		
		String salt = PasswordHashAndSalt.genererTilfeldigSalt();
		String password = PasswordHashAndSalt.hashMedSalt(user.getPassword(), salt);
		
		user.setPassword(password);
		user.setSalt(salt);
		
		urepo.save(user);
		
		return user;
	}
	
	/**
	 * Find the user in the database by using the Primary Key
	 * @param mobile
	 * @return
	 */
	public Userr getUserr(String mobile) {
		return urepo.findByMobile(mobile);
	}
	
	/**
	 * saves user with user object to DB
	 * @param Userr
	 */
	public void saveUserr(Userr user) {
		urepo.save(user);
	}
	
	/**
	 * saves image with to DB
	 * @param Multipartfile
	 */
	public void saveImage(MultipartFile imagefile) throws Exception {
		
		byte[] bytes = imagefile.getBytes();
		Path path = Paths.get(imagefile.getOriginalFilename());
		Files.write(path, bytes);
	}
	
}
