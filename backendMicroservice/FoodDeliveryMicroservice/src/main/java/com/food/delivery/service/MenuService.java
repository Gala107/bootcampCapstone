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

	public String saveDish(Dish dish) {
		try {
			repository.save(dish);
			return "";
		} catch (Error e) {
			return "Not able to save a Dish at this time. Error: " + e;
		}
	}

	public String deleteDish(int id) {
		try {
			repository.deleteById(id);
			return "";
		} catch (Error e) {
			return "Not able to delete a Dish at this time. Error: " + e;
		}
	}

	public List<Dish> getAllDishesSortedByType() {
		return repository.getAllDishes();
	}
}