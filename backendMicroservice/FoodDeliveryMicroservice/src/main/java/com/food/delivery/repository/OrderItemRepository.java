package com.food.delivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food.delivery.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {

}
