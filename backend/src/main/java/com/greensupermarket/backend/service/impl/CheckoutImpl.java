package com.greensupermarket.backend.service.impl;

import com.greensupermarket.backend.dto.CheckoutDto;
import com.greensupermarket.backend.dto.ProductDto;
import com.greensupermarket.backend.entity.Checkout;
import com.greensupermarket.backend.entity.Product;
import com.greensupermarket.backend.exception.ResourceNotFoundException;
import com.greensupermarket.backend.mapper.CheckoutMapper;
import com.greensupermarket.backend.mapper.ProductMapper;
import com.greensupermarket.backend.repository.CheckoutRepository;
import com.greensupermarket.backend.service.CheckoutService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public CheckoutDto getCheckoutById(Long checkoutId) {
        Checkout checkout =  checkoutRepository.findById(checkoutId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Checkout is not exist with the given id: " + checkoutId));
        return CheckoutMapper.mapToCheckoutDto(checkout);
    }

    @Override
    public List<CheckoutDto> getAllCheckouts() {
        List<Checkout> checkouts = checkoutRepository.findAll();
        return checkouts.stream().map(CheckoutMapper::mapToCheckoutDto).collect(Collectors.toList());
    }

    @Override
    public void deleteProduct(Long checkoutId) {
        checkoutRepository.findById(checkoutId)
                .orElseThrow(() -> new ResourceNotFoundException("Checkout not found with id: " + checkoutId));
        checkoutRepository.deleteById(checkoutId);
    }
}
