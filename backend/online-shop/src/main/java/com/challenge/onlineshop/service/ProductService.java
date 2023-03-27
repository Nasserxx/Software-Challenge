package com.challenge.onlineshop.service;

import java.util.List;

import com.challenge.onlineshop.model.Product;

public interface ProductService {
    Product getProductById(Long id);

    void saveProduct(Product product);

    void updateProduct(Long id, Product product);

    void deleteProduct(Long id);

    List<Product> getProducts();
}
