package exchange.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import exchange.student.entity.Userr;
import exchange.student.entity.Userrpost;

@Repository
public interface UserpostRepo extends JpaRepository<Userrpost, Integer> {

	Userrpost findByUpostid(int upostid);
	
	Userrpost findByMobile(String mobile);
	
	Userrpost findByMobile(Userr mobile);

}
