package com.challenge.onlineshop.service;

import java.util.List;

import com.challenge.onlineshop.model.OrderPosition;

public interface OrderPositionService {
    OrderPosition getOrderPositionById(Long id);

    void saveOrderPosition(OrderPosition orderPosition);

    void updateOrderPosition(Long id, OrderPosition orderPosition);

    void deleteOrderPosition(Long id);

    List<OrderPosition> getOrderPositions();
}
