package com.food.delivery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.food.delivery.entity.User;
import com.food.delivery.repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import jakarta.annotation.PostConstruct;

@SpringBootApplication(scanBasePackages = "com.food.delivery")
@EntityScan(basePackages = "com.food.delivery.entity")
@EnableJpaRepositories(basePackages = "com.food.delivery.repository")
@EnableDiscoveryClient
public class FoodDeliveryMicroserviceApplication {

	@Autowired
	UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(FoodDeliveryMicroserviceApplication.class, args);
		System.out.println("Food Delivery Microservice is running on Port 8282");
	}

	@PostConstruct
	public void initMethod() {

		Optional<User> result = userRepository.findById("admin@me.com");
		if (result.isPresent()) {
			System.out.println("Admin account is already set up.");
		} else {
			User user = new User();
			user.setEmail("admin@me.com");
			user.setPassword("123");
			user.setIsAdmin("true");
			user.setFirstName("Admin");
			user.setLastName("Admin");
			userRepository.save(user);
			System.out.println("Admin account has been created sucessfully.");
		}
	}
}
