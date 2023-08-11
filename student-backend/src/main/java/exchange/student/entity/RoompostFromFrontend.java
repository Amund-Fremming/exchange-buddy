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
 * Roompost object to package data from frontend easier
 * 
 * @author burgeking
 *
 */

@Entity
@Table(name = "roompost")
public class RoompostFromFrontend {

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int rpostid;
	
	private String term;
	private String address;
	private String city;
	private String country;
	private boolean active;
	private String roomates;
	private String bio;
	private boolean wifi;
	private boolean appliances;
	private String price;
	private String kvm;
	private String picture;
	

	public RoompostFromFrontend(String address, String term, String city, String country, boolean active, String roomates, String bio,
			boolean wifi, boolean appliances, String price, String kvm, String picture) {
		super();
		this.address = address;
		this.term = term;
		this.city = city;
		this.country = country;
		this.active = active;
		this.roomates = roomates;
		this.bio = bio;
		this.wifi = wifi;
		this.appliances = appliances;
		this.price = price;
		this.kvm = kvm;
		this.picture = picture;
	}



	public RoompostFromFrontend() {
		super();
	}



	public int getRpostid() {
		return rpostid;
	}

	public void setRpostid(int rpostid) {
		this.rpostid = rpostid;
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

	public String getRoomates() {
		return roomates;
	}

	public void setRoomates(String roomates) {
		this.roomates = roomates;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public boolean isWifi() {
		return wifi;
	}

	public void setWifi(boolean wifi) {
		this.wifi = wifi;
	}

	public boolean isAppliances() {
		return appliances;
	}

	public void setAppliances(boolean appliances) {
		this.appliances = appliances;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}
	
	public String getKvm() {
		return kvm;
	}
	
	public void setKvm(String kvm) {
		this.kvm = kvm;
	}
	
	public String getPicture() {
		return picture;
	}
	
	public void setPicture(String picture) {
		this.picture = picture;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
}
