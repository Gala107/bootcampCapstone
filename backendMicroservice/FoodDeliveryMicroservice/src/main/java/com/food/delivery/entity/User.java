package com.food.delivery.entity;

import org.springframework.context.annotation.Scope;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
@Scope("prototype")
public class User {
	
	@Id
	private String email;
	private String password;
	
	private String firstName;
	private String lastName;
	private String phone;
	private String isAdmin;
	
	public User() {

	}
	public User(String email, String password, String isAdmin) {
		this.email = email;
		this.password = password;
		this.isAdmin = isAdmin;
	}
	public User(String firstName, String lastName, String phone, String email, String password,
			String isAdmin) {
		
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.isAdmin = isAdmin;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getIsAdmin() {
		return isAdmin;
	}
	public void setIsAdmin(String isAdmin) {
		this.isAdmin = isAdmin;
	}
}
