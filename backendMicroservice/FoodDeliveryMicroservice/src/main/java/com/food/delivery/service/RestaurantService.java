package com.food.delivery.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.delivery.entity.Restaurant;
import com.food.delivery.repository.RestaurantRepository;

@Service
public class RestaurantService {

	@Autowired
	private RestaurantRepository repository;

	public List<Restaurant> getAllRestaurants() {
		return repository.findAll();
	}

	public String saveRestaurant(Restaurant restaurant) {
		try {
			repository.save(restaurant);
			return "";
		} catch (Error e) {
			return "Not able to add a Restaurant at this time. Error: " + e;
		}
	}

	public String deleteRestaurant(int id) {
		try {
			repository.deleteById(id);
			return "";
		} catch (Error e) {
			return "Not able to delete a Restaurant at this time. Error: " + e;
		}
	}
}
