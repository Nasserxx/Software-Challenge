package com.challenge.onlineshop.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "adress")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Adress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank(message = "street cannot be blank")
    @Column(name = "street", nullable = false,length = 100)
    private String street;

    @NotBlank(message = "house number cannot be blank")
    @Column(name = "house_number", nullable = false)
    private Integer houseNumber;

    @NotBlank(message = "city cannot be blank")
    @Column(name = "city", nullable = false,length = 100)
    private String city;

    @NotBlank(message = "zip cannot be blank")
    @Column(name = "zip", nullable = false,length = 10)
    private String zip;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private AdressType type;

    @ManyToOne(optional = false)
    @JoinColumn(name = "customer_id", referencedColumnName = "id", nullable = false)
    private Customer customer;
}
