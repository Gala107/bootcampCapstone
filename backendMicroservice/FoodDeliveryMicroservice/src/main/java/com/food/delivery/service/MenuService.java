package com.food.delivery.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.delivery.entity.Dish;
import com.food.delivery.repository.DishRepository;

@Service
public class MenuService {
	
	@Autowired
	private DishRepository repository;
	
	public List<Dish> getDishesByRestaurant(int restaurantId) {
		return repository.getDishesByRestaurant(restaurantId);
	}
	
	public List<Dish> getDishesByType(String type) {
		return repository.getDishesByType(type);
	}
	
	public void saveDish(Dish dish) {
		repository.save(dish);
	}
	
	public void deleteDish(int id) {
		repository.deleteById(id);
	}
	
	public List<Dish> getAllDishesSortedByType() {
		return repository.getAllDishes();
	}
}