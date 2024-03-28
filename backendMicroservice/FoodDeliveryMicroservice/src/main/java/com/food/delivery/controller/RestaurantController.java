package com.food.delivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.food.delivery.entity.Restaurant;
import com.food.delivery.service.RestaurantService;

@RestController
@RequestMapping("restaurant")
@CrossOrigin
public class RestaurantController {
	
	@Autowired
	RestaurantService service;
	
	@GetMapping(value = "getRestaurants", produces = MediaType.APPLICATION_JSON_VALUE)
	List<Restaurant> getAllRestaurants() {
		return service.getAllRestaurants();
	}
	
	@PostMapping(value = "saveRestaurant", consumes = MediaType.APPLICATION_JSON_VALUE)
	void saveRestaurant(@RequestBody Restaurant restaurant) {
		service.saveRestaurant(restaurant);
	}
	
	@GetMapping(value = "deleteRestaurant")
	void deleteRestaurant(int id) {
		service.deleteRestaurant(id);
	}
}
