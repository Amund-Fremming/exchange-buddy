package exchange.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import exchange.student.entity.Roompost;
import exchange.student.entity.Userr;

@Repository
public interface RoompostRepo extends JpaRepository<Roompost, Integer> {

	Roompost findByRpostid(int rpostid);
	
	Roompost findByMobile(String mobile);
	
	Roompost findByMobile(Userr mobile);

}
