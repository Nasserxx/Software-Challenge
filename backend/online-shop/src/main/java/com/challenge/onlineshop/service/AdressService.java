package com.challenge.onlineshop.service;

import java.util.List;

import com.challenge.onlineshop.model.Adress;

public interface AdressService {
    Adress getAdressById(Long id);

    void saveAdress(Adress adress, Long customerId);

    void updateAdress(Long id, Adress adress);

    void deleteAdress(Long id);

    List<Adress> getAdresss();
    List<Adress> getAdresssByCustomerId(Long id);
}
