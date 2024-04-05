package com.food.delivery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.delivery.entity.Order;
import com.food.delivery.repository.OrderItemRepository;
import com.food.delivery.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private OrderItemRepository itemRepository;

	public String saveOrderPayment(Order order) {
		try {
			order.getItems().stream().forEach((c) -> itemRepository.save(c));
			orderRepository.save(order);
			return "Thank you for your Order!";
		}catch(Exception e) {
			return "Not able to save an Order at this time: " + e;
		}
	}
}
