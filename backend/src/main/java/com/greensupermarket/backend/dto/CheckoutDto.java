package com.greensupermarket.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class CheckoutDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String address;
    private String companyName;
    private String country;
    private String zipcode;
    private String town;
    private String phone;
    private String email;
    private String desc;
}
