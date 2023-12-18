package com.greensupermarket.backend.repository;

import com.greensupermarket.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
