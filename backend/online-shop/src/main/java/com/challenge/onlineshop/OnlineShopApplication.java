package com.challenge.onlineshop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.challenge.onlineshop.model.Product;
import com.challenge.onlineshop.repository.ProductRepository;

@SpringBootApplication
public class OnlineShopApplication implements CommandLineRunner {

	@Autowired
	ProductRepository productRepository;

	public static void main(String[] args) {
		SpringApplication.run(OnlineShopApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Product[] products = new Product[] {
			new Product(1L, "123-456-789", "Product 1", 10.99),
			new Product(2L, "123-456-790", "Product 2", 20.99),
			new Product(3L, "123-456-791", "Product 3", 30.99),
			new Product(4L, "123-456-792", "Product 4", 40.99),
			new Product(5L, "123-456-793", "Product 5", 50.99),
			new Product(6L, "123-456-794", "Product 6", 60.99),
			new Product(7L, "123-456-795", "Product 7", 70.99),
			new Product(8L, "123-456-796", "Product 8", 80.99),
			new Product(9L, "123-456-797", "Product 9", 90.99)
	};

	try {
		for (Product product : products) {

			productRepository.save(product);
		}
	} catch (Exception e) {
		// TODO: handle exception
	}


	}

	// @Bean
	// public BCryptPasswordEncoder bCryptPasswordEncoder() {
	// 	return new BCryptPasswordEncoder();
	// }
}
