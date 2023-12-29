package com.greensupermarket.backend.service;

import com.greensupermarket.backend.dto.CheckoutDto;

import java.util.List;

public interface CheckoutService {
    CheckoutDto createCheckout(CheckoutDto checkoutDto);

    CheckoutDto getCheckoutById(Long checkoutId);

    List<CheckoutDto> getAllCheckouts();

    void deleteProduct(Long productId);

}
