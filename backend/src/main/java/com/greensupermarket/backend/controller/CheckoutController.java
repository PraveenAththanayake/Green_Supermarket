package com.greensupermarket.backend.controller;

import com.greensupermarket.backend.dto.CheckoutDto;
import com.greensupermarket.backend.service.CheckoutService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {
    private final CheckoutService checkoutService;

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PostMapping
    public ResponseEntity<CheckoutDto> addCheckout(@RequestBody CheckoutDto checkoutDto){
        CheckoutDto savedCheckout = checkoutService.createCheckout(checkoutDto);
        return new ResponseEntity<>(savedCheckout, HttpStatus.CREATED);
    }

    //build get checkout rest api
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("{id}")
    public ResponseEntity<CheckoutDto> getCheckoutById(@PathVariable("id") Long Id) {
        CheckoutDto productDto = checkoutService.getCheckoutById(Id);
        return ResponseEntity.ok(productDto);
    }

    //build get all checkouts rest api
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<CheckoutDto>> getAllCheckouts() {
        List<CheckoutDto> checkouts = checkoutService.getAllCheckouts();
        return ResponseEntity.ok(checkouts);
    }

    //build delete product rest api
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCheckoutById(@PathVariable("id") Long checkoutId) {
        checkoutService.deleteProduct(checkoutId);
        return ResponseEntity.ok("Checkout Deleted successfully!");
    }
}

