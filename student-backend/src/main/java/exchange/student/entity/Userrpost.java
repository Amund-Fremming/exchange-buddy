package exchange.student.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * 
 * UserrPost
 * 
 * @author burgeking
 */

@Entity
@Table(name="userrpost")
public class Userrpost {

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int upostid;
	
	private String term;
	private String city;
	private String country;
	private boolean active;
	private String bio;
	private String minprice;
	private String maxprice;
	private String img;
	private String namee; 
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="mobile", referencedColumnName = "mobile")
	private Userr mobile;
	

	public Userrpost(String term, String city, String country, boolean active, String bio, String minprice,
			String maxprice, String img, String namee) {
		super();
		this.term = term;
		this.city = city;
		this.country = country;
		this.active = active;
		this.bio = bio;
		this.minprice = minprice;
		this.maxprice = maxprice;
		this.img = img;
		this.namee = namee;
	}
	
	

	public String getMinprice() {
		return minprice;
	}



	public void setMinprice(String minprice) {
		this.minprice = minprice;
	}



	public String getMaxprice() {
		return maxprice;
	}



	public void setMaxprice(String maxprice) {
		this.maxprice = maxprice;
	}



	public String getNamee() {
		return namee;
	}



	public void setNamee(String namee) {
		this.namee = namee;
	}



	public String getImg() {
		return img;
	}




	public void setImg(String img) {
		this.img = img;
	}




	public Userrpost() {}



	public int getUpostid() {
		return upostid;
	}

	public void setUpostid(int upostid) {
		this.upostid = upostid;
	}

	public String getTerm() {
		return term;
	}

	public void setTerm(String term) {
		this.term = term;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public Userr getMobile() {
		return mobile;
	}

	public void setMobile(Userr mobile) {
		this.mobile = mobile;
	}


	public String getMinPrice() {
		return minprice;
	}

	public void setMinPrice(String minprice) {
		this.minprice = minprice;
	}

	public String getMaxPrice() {
		return maxprice;
	}

	public void setMaxPrice(String maxprice) {
		this.maxprice = maxprice;
	}
	
	
	
}
