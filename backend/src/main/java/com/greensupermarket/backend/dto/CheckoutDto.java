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
    private Long Id;
    private String firstName;
    private String lastName;
    private String address;
    private String companyName;
    private String country;
    private int zipcode;
    private String town;
    private String phone;
    private String email;
    private String desc;
}
