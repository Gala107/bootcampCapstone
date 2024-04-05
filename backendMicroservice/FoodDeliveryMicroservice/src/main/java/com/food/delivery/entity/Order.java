package com.food.delivery.entity;

import java.util.List;

import org.springframework.context.annotation.Scope;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Scope("prototype")
@Table(name = "online_order")
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private float total;
	private boolean isPaid;
	@ManyToOne
	private User user;
	@OneToMany
	private List<OrderItem> items;
	
	public Order() {

	}
	public Order(int id, float total, boolean isPaid, User user, List<OrderItem> items) {

		this.id = id;
		this.total = total;
		this.isPaid = isPaid;
		this.user = user;
		this.items = items;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public float getTotal() {
		return total;
	}
	public void setTotal(float total) {
		this.total = total;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public List<OrderItem> getItems() {
		return items;
	}
	public void setItems(List<OrderItem> items) {
		this.items = items;
	}
	public boolean isPaid() {
		return isPaid;
	}
	public void setPaid(boolean isPaid) {
		this.isPaid = isPaid;
	}
}
