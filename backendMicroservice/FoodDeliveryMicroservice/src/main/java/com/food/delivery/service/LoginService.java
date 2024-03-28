package com.food.delivery.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.delivery.entity.Result;
import com.food.delivery.entity.User;
import com.food.delivery.repository.UserRepository;

@Service
public class LoginService {

	@Autowired
	private UserRepository userRepository;

	public String signUp(User user) {
		Optional<User> result = userRepository.findById(user.getEmail());
		if (result.isPresent()) {
			return "Client with this email address already exists.";
		} else {
			userRepository.save(user);
			return "Account is created successfully.";
		}
	}

	public Result signIn(User user) {
		Optional<User> result = userRepository.findById(user.getEmail());

		if (result.isPresent()) {
			User signInUser = result.get();
			if (signInUser.getPassword().equals(user.getPassword()) && signInUser.getIsAdmin().equals(user.getIsAdmin())) {
				return new Result(signInUser, null);
			} else {
				return new Result(null, "Password or Type of User is invalid.");
			}
		} else {
			return new Result(null, "Email address is invalid.");
		}
	}
}
