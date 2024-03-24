package com.menu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.menu.bean.User;
import com.menu.service.LoginService;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("login")
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
	@PostMapping(value = "saveUser", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public User saveUser(User user) {
		return loginService.saveUser(user);
	}
	
	@PostMapping(value = "getAdmin", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public User getAdmin(User user) {
		return loginService.getUser(user.getEmail(), user.getPassword(), user.getIsAdmin());
	}
}
