package com.food.delivery.entity;

public class Result {
	
	private String message;
	private User user;
	
	public Result(User user, String message) {

		this.message = message;
		this.user = user;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
}
