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
	
	public void saveRestaurant(Restaurant restaurant) {
		repository.save(restaurant);
	}
	
	public void deleteRestaurant(int id) {
		repository.deleteById(id);
	}
}
