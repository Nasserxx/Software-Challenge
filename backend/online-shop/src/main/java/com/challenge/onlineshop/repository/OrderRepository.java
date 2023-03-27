package com.challenge.onlineshop.repository;

import org.springframework.data.repository.CrudRepository;

import com.challenge.onlineshop.model.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {

}