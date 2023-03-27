package com.challenge.onlineshop.repository;

import org.springframework.data.repository.CrudRepository;

import com.challenge.onlineshop.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

}