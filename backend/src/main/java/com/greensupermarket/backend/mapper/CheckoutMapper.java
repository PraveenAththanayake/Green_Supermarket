package com.greensupermarket.backend.mapper;

import com.greensupermarket.backend.dto.CheckoutDto;
import com.greensupermarket.backend.entity.Checkout;

public class CheckoutMapper {
    public static CheckoutDto mapToCheckoutDto(Checkout checkout){
        return new CheckoutDto(
                checkout.getId(),
                checkout.getCompanyName(),
                checkout.getAddress(),
                checkout.getDesc(),
                checkout.getEmail(),
                checkout.getCountry(),
                checkout.getFirstName(),
                checkout.getTown(),
                checkout.getPhone(),
                checkout.getLastName(),
                checkout.getZipcode()
        );
    }

    public static Checkout mapToCheckout(CheckoutDto checkoutDto){
        return new Checkout(
                checkoutDto.getId(),
                checkoutDto.getFirstName(),
                checkoutDto.getLastName(),
                checkoutDto.getCompanyName(),
                checkoutDto.getAddress(),
                checkoutDto.getCountry(),
                checkoutDto.getZipcode(),
                checkoutDto.getTown(),
                checkoutDto.getPhone(),
                checkoutDto.getEmail(),
                checkoutDto.getDesc()
        );
    }
}
