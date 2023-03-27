package com.challenge.onlineshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challenge.onlineshop.model.OrderPosition;
import com.challenge.onlineshop.repository.OrderPositionRepository;

@Service
public class OrderPositionServiceImp implements OrderPositionService {
    @Autowired
    private OrderPositionRepository orderPositionRepository;

    @Override
    public OrderPosition getOrderPositionById(Long id) {
        return orderPositionRepository.findById(id).get();
    }

    @Override
    public void saveOrderPosition(OrderPosition orderPosition) {
 
    }

    @Override
    public void updateOrderPosition(Long id, OrderPosition orderPosition) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateOrderPosition'");
    }

    @Override
    public void deleteOrderPosition(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteOrderPosition'");
    }

    @Override
    public List<OrderPosition> getOrderPositions() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getOrderPositions'");
    }

}
