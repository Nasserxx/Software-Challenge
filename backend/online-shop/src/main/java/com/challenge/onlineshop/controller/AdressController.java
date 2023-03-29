package com.challenge.onlineshop.controller;

import com.challenge.onlineshop.model.Adress;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.challenge.onlineshop.service.AdressService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/adress")
@CrossOrigin(origins = "*")
public class AdressController {

    @Autowired
    private AdressService adressService;

    @GetMapping("all")
    public ResponseEntity<List<Adress>> getAdresss() {
        List<Adress> adresss = adressService.getAdresss();
        return new ResponseEntity<>(adresss, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Adress> getAdress(@PathVariable Long id) {
        Adress adress = adressService.getAdressById(id);
        return new ResponseEntity<>(adress, HttpStatus.OK);
    }

    @PostMapping("{customerId}")
    public ResponseEntity<HttpStatus> createAdress(@Valid @RequestBody Adress adress, @PathVariable Long customerId) {
        adressService.saveAdress(adress, customerId);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<Adress> updateAdress(@PathVariable Long id, @Valid @RequestBody Adress adress) {
        adressService.updateAdress(id, adress);
        return new ResponseEntity<Adress>(adressService.getAdressById(id), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteAdress(@PathVariable Long id) {
        adressService.deleteAdress(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("customer/{id}")
    public ResponseEntity<List<Adress>> getAdresssByCustomerId(@PathVariable Long id) {
        List<Adress> adresss = adressService.getAdresssByCustomerId(id);
        return new ResponseEntity<>(adresss, HttpStatus.OK);
    }

}
