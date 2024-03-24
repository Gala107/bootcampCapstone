package com.menu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.menu.bean.Dish;

@Repository
public interface DishRepository extends JpaRepository<Dish, Integer>{

}
