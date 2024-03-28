package com.food.delivery.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.food.delivery.entity.Dish;

@Repository
public interface DishRepository extends JpaRepository<Dish, Integer>{

	@Query("select d from Dish d where d.restaurant.id = :id order by d.type")
	List<Dish> getDishesByRestaurant(@Param("id") int restaurantId);
	
	@Query("select d from Dish d where d.type = :type order by d.name")
	List<Dish> getDishesByType(@Param("type") String type);
	
	@Query("select d from Dish d order by d.type")
	List<Dish> getAllDishes();
}
