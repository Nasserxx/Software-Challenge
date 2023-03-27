package com.challenge.onlineshop.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import com.challenge.onlineshop.model.OrderPosition;

public interface OrderPositionRepository extends CrudRepository<OrderPosition, Long> {
    Optional<List<OrderPosition>> findByOrderId(long orderId);


}