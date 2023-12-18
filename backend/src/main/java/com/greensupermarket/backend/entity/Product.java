package com.greensupermarket.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "slug", nullable = false, unique = true)
    private String slug;

    @Column(name = "tag")
    private String tag;

    @Column(name = "brand")
    private String brand;

    @Column(name = "description")
    private String description;

    @Column(name = "type")
    private String type;

    @Column(name = "stockLimit")
    private int stockLimit;

    @Column(name = "measurements")
    private int measurements;

    @Column(name = "price")
    private double price;

    @Column(name = "second_price")
    private double secondPrice;

    @Column(name = "stock")
    private int stock;

    @Column(name = "unit")
    private int unit;

    @Column(name = "status")
    private String status;
}
