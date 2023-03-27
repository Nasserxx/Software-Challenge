package com.challenge.onlineshop.exceptions;

public class ProductNotFoundException extends RuntimeException {

    public ProductNotFoundException(Long productId) {
        super("The Product with id: " + productId + " does not exist!");
    }

}
