package com.food.delivery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.food.delivery.entity.Order;
import com.food.delivery.service.OrderService;

@RestController
@RequestMapping("order")
@CrossOrigin
public class OrderController {
	
	@Autowired
	private OrderService service;
	
	@PostMapping(value = "saveOrder", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String saveOrderPayment(@RequestBody Order order) {
		return service.saveOrderPayment(order);
	}
}
