package com.greensupermarket.backend.service.impl;

import com.greensupermarket.backend.dto.CheckoutDto;
import com.greensupermarket.backend.entity.Checkout;
import com.greensupermarket.backend.mapper.CheckoutMapper;
import com.greensupermarket.backend.repository.CheckoutRepository;
import com.greensupermarket.backend.service.CheckoutService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CheckoutImpl implements CheckoutService {
    private CheckoutRepository checkoutRepository;

    @Override
    public CheckoutDto createCheckout(CheckoutDto checkoutDto) {
        Checkout checkout = CheckoutMapper.mapToCheckout(checkoutDto);
        Checkout savedCheckout = checkoutRepository.save(checkout);
        return CheckoutMapper.mapToCheckoutDto(savedCheckout);
    }
//
//    @Override
//    public CheckoutDto getCheckoutById(Long checkoutId) {
//        return null;
//    }
//
//    @Override
//    public List<CheckoutDto> getAllCheckouts() {
//        return null;
//    }
//
//    @Override
//    public CheckoutDto updateCheckout(Long checkoutId, CheckoutDto updateCheckout) {
//        return null;
//    }
}
