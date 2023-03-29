package com.challenge.onlineshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challenge.onlineshop.model.Product;
import com.challenge.onlineshop.repository.ProductRepository;

@Service
public class ProductServiceImp implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).get();
    }

    @Override
    public void saveProduct(Product product) {
        productRepository.save(product);

    }

    @Override
    public void updateProduct(Long id, Product product) {
        Product productToUpdate = productRepository.findById(id).get();
        productToUpdate.setName(product.getName());
        productToUpdate.setNumber(product.getNumber());
        productToUpdate.setPrice(product.getPrice());
        productRepository.save(productToUpdate);
    }

    @Override
    public void deleteProduct(Long id) {
    productRepository.deleteById(id);
    }

    @Override
    public List<Product> getProducts() {
        List<Product> products = (List<Product>) productRepository.findAll();
       return products;
    }

}
