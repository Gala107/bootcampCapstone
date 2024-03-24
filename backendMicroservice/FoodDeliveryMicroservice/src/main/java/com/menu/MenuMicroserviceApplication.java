package com.menu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.menu.bean.User;
import com.menu.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import jakarta.annotation.PostConstruct;

@SpringBootApplication(scanBasePackages = "com.menu")
@EntityScan(basePackages = "com.menu.bean")
@EnableJpaRepositories(basePackages = "com.menu.repository")
@EnableDiscoveryClient
public class MenuMicroserviceApplication {

	@Autowired
	UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(MenuMicroserviceApplication.class, args);
		System.out.println("Menu Microservice is running on Port 8282");
	}

	@PostConstruct
	public void initMethod() {
		
		User admin = userRepository.getUser("admin@me.com", "123", "true");
		if (admin != null) {
			System.err.println("Admin account is already set up.");
		} else {
			userRepository.save(new User("admin@me.com", "123", "true"));
			System.err.println("Admin account has been created sucessfully.");
		}
	}
}
