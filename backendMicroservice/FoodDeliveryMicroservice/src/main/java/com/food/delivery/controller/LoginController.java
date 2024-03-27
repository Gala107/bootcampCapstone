package com.food.delivery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.food.delivery.entity.Result;
import com.food.delivery.entity.User;
import com.food.delivery.service.LoginService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("login")
@CrossOrigin
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
	@PostMapping(value = "signUp", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String signUp(@RequestBody User user) {
		return loginService.signUp(user);
	}
	
	@PostMapping(value = "signIn", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public Result signIn(@RequestBody User user) {
		return loginService.signIn(user);
	}
}
