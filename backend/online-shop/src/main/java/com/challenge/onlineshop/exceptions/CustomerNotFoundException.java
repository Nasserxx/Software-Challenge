package com.challenge.onlineshop.exceptions;

public class CustomerNotFoundException extends RuntimeException {

    public CustomerNotFoundException(String email) {
        super("The Product with email: " + email + " does not exist!");
    }

    public CustomerNotFoundException(Long id) {
        super("The Customer with id: " + id + " does not exist!");
    }

}
