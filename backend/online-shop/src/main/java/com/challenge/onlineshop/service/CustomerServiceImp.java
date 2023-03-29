package com.challenge.onlineshop.service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.challenge.onlineshop.exceptions.CustomerNotFoundException;
import com.challenge.onlineshop.exceptions.DuplicateEmailException;
import com.challenge.onlineshop.model.Customer;
import com.challenge.onlineshop.repository.CustomerRepository;

@Service
public class CustomerServiceImp implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;
    // @Autowired
    // private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public Customer getCustomerById(Long id) {
        Optional<Customer> customer = customerRepository.findById(id);
        if (!customer.isPresent()) {
            throw new CustomerNotFoundException(id);
        }
        return customer.get();
    }

    @Override
    public void saveCustomer(Customer customer) {
        if (customerRepository.findByEmail(customer.getEmail()).isPresent()) {
            throw new DuplicateEmailException(customer.getEmail());
        }
        customer.setBirthDate(LocalDate.parse(customer.getBirthDate().toString()));
        customerRepository.save(customer);
    }

    @Override
    public void updateCustomer(Long id, Customer customer) {
        Customer customerToUpdate = customerRepository.findById(id).get();
        customerToUpdate.setFirstName(customer.getFirstName());
        customerToUpdate.setLastName(customer.getLastName());
        customerToUpdate.setEmail(customer.getEmail());
        customerToUpdate.setPassword(customer.getPassword());
        customerToUpdate.setTitle(customer.getTitle());
        customerToUpdate.setBirthDate(LocalDate.parse(customer.getBirthDate().toString()));
        customerToUpdate.setBirthDate(customer.getBirthDate());
        customerRepository.save(customerToUpdate);
    }

    @Override
    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

    @Override
    public List<Customer> getCustomers() {
        List<Customer> customers = (List<Customer>) customerRepository.findAll();
        return customers;
    }

    @Override
    public Customer getCustomerByEmail(String email) {

        Optional<Customer> customer = customerRepository.findByEmail(email);
        if (!customer.isPresent()) {
            throw new CustomerNotFoundException(email);
        }
        return customer.get();
    }

}
