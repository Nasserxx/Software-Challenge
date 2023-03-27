package com.challenge.onlineshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challenge.onlineshop.model.Adress;
import com.challenge.onlineshop.repository.AdressRepository;

@Service
public class AdressServiceImp implements AdressService {
    @Autowired
    private AdressRepository adressRepository;

    @Override
    public Adress getAdressById(Long id) {
        return adressRepository.findById(id).get();
    }

    @Override
    public void saveAdress(Adress adress) {
 
    }

    @Override
    public void updateAdress(Long id, Adress adress) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateAdress'");
    }

    @Override
    public void deleteAdress(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAdress'");
    }

    @Override
    public List<Adress> getAdresss() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAdresss'");
    }

}
