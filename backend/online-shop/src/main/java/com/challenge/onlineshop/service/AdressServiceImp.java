package com.challenge.onlineshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.challenge.onlineshop.model.Adress;
import com.challenge.onlineshop.model.Customer;
import com.challenge.onlineshop.repository.AdressRepository;
import com.challenge.onlineshop.repository.CustomerRepository;

@Service
public class AdressServiceImp implements AdressService {
    @Autowired
    private AdressRepository adressRepository;
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Adress getAdressById(Long id) {
        return adressRepository.findById(id).get();
    }

    @Override
    public void saveAdress(Adress adress, Long customerId) {
        Customer customer = customerRepository.findById(customerId).get();
        adress.setCustomer(customer);
        adressRepository.save(adress);
    }

    @Override
    public void updateAdress(Long id, Adress adress) {
        Adress adressToUpdate = adressRepository.findById(id).get();
        adressToUpdate.setCity(adress.getCity());
        adressToUpdate.setStreet(adress.getStreet());
        adressToUpdate.setZip(adress.getZip());
        adressToUpdate.setHouseNumber(adress.getHouseNumber());
        adressToUpdate.setType(adress.getType());
        adressRepository.save(adressToUpdate);
    }

    @Override
    public void deleteAdress(Long id) {
    adressRepository.deleteById(id);
    }

    @Override
    public List<Adress> getAdresss() {
        List<Adress> adresses = (List<Adress>) adressRepository.findAll();
       return adresses;
    }

    @Override
    public List<Adress> getAdresssByCustomerId(Long id) {
        List<Adress> adresses = adressRepository.findByCustomerId(id);
        return adresses;
    }

}
