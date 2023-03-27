package com.challenge.onlineshop.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.challenge.onlineshop.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
    Optional<Customer> findByEmail(String email);

    Optional<Customer> findById(Long id);

}