package com.food.delivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.food.delivery.entity.Dish;
import com.food.delivery.service.MenuService;

@RestController
@RequestMapping("menu")
@CrossOrigin
public class MenuController {
	
	@Autowired
	MenuService service;
	
	@GetMapping(value = "getDishesByRestaurant/{restaurantId}", produces = MediaType.APPLICATION_JSON_VALUE)
	List<Dish> getDishesByRestaurant(@PathVariable(name="restaurantId") int restaurantId) {
		return service.getDishesByRestaurant(restaurantId);
	}
	
	@GetMapping(value = "getDishesByType/{type}", produces = MediaType.APPLICATION_JSON_VALUE)
	List<Dish> getDishesByType(@PathVariable(name="type") String type) {
		return service.getDishesByType(type);
	}
	
	@PostMapping(value = "saveDish", consumes = MediaType.APPLICATION_JSON_VALUE)
	String saveDish(@RequestBody Dish dish) {
		return service.saveDish(dish);
	}
	
	@DeleteMapping(value = "deleteDish/{id}")
	String deleteDish(@PathVariable(name="id") int id) {
		return service.deleteDish(id);
	}
	
	@GetMapping(value = "getAllDishes") 
	List<Dish> getAllDishesSortedByType() {
		return service.getAllDishesSortedByType();
	}
}
