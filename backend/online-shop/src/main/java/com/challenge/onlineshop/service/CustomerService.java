package com.challenge.onlineshop.service;

import java.util.List;

import com.challenge.onlineshop.model.Customer;

public interface CustomerService {
    Customer getCustomerById(Long id);

    void saveCustomer(Customer customer);

    void updateCustomer(Long id, Customer customer);

    void deleteCustomer(Long id);

    List<Customer> getCustomers();
}
