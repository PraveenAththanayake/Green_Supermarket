package com.greensupermarket.backend.controller;

import com.greensupermarket.backend.dto.CheckoutDto;
import com.greensupermarket.backend.service.CheckoutService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {
    private final CheckoutService checkoutService;

    @PostMapping
    public ResponseEntity<CheckoutDto> addCheckout(@RequestBody CheckoutDto checkoutDto){
        CheckoutDto savedCheckout = checkoutService.createCheckout(checkoutDto);
        return new ResponseEntity<>(savedCheckout, HttpStatus.CREATED);
    }
}

