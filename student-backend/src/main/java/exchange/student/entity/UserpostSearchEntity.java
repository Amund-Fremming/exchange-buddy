package exchange.student.entity;

/**
 * 
 * Roompost object to package data from frontend easier
 * 
 * @author burgeking
 *
 */

public class UserpostSearchEntity {

	private String term;
	private String city;
	private String country;
	private boolean active;
	private String pricefrom;
	private String priceto;
	
	public UserpostSearchEntity(String term, String city, String country, boolean active, String pricefrom,
			String priceto) {
		super();
		this.term = term;
		this.city = city;
		this.country = country;
		this.active = active;
		this.pricefrom = pricefrom;
		this.priceto = priceto;
	}
	
	public UserpostSearchEntity() {}
	
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
	public String getPricefrom() {
		return pricefrom;
	}
	public void setPricefrom(String pricefrom) {
		this.pricefrom = pricefrom;
	}
	public String getPriceto() {
		return priceto;
	}
	public void setPriceto(String priceto) {
		this.priceto = priceto;
	}
	



}
