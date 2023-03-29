package com.challenge.onlineshop.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.challenge.onlineshop.model.Adress;

public interface AdressRepository extends CrudRepository<Adress, Long> {
    List<Adress> findByCustomerId(Long id);
}