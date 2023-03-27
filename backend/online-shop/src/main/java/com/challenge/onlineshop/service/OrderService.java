package com.challenge.onlineshop.service;

import java.util.List;

import com.challenge.onlineshop.model.Order;

public interface OrderService {
    Order getOrderById(Long id);

    void saveOrder(Order order);

    void updateOrder(Long id, Order order);

    void deleteOrder(Long id);

    List<Order> getOrders();
}
