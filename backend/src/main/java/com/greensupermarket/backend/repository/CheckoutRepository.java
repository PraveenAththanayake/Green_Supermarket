package com.greensupermarket.backend.repository;

import com.greensupermarket.backend.entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckoutRepository extends JpaRepository<Checkout, Long> {
}
