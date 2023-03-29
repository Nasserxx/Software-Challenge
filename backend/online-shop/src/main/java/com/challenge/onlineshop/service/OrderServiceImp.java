package com.challenge.onlineshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challenge.onlineshop.model.Order;
import com.challenge.onlineshop.repository.OrderRepository;

@Service
public class OrderServiceImp implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order getOrderById(Long id) {
        return orderRepository.findById(id).get();
    }

    @Override
    public void saveOrder(Order order) {
        orderRepository.save(order);
    }

    @Override
    public void updateOrder(Long id, Order order) {
        
        Order orderToUpdate = orderRepository.findById(id).get();
        orderToUpdate.setCustomer(order.getCustomer());
        orderToUpdate.setOrderDate(order.getOrderDate());
        orderRepository.save(orderToUpdate);
    }

    @Override
    public void deleteOrder(Long id) {
    orderRepository.deleteById(id);
    }

    @Override
    public List<Order> getOrders() {
        return (List<Order>) orderRepository.findAll();
    }

}
