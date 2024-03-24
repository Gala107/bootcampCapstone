package com.menu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.menu.bean.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query("select u from User u where u.email = :email and u.password = :password and u.isAdmin = :isAdmin")
	public User getUser(@Param("email")String email, @Param("password")String password, @Param("isAdmin") String isAdmin);
}
