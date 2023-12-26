package com.greensupermarket.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

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

    @Column(name = "stock")
    private int stock;

    @Column(name = "tags")
    private String tags;

    @Column(name = "brand")
    private String brand;

    @Column(name = "description")
    private String description;

    @Column(name = "mainImage", nullable = true)
    private String mainImage;

    @Column(name = "otherImages", nullable = true)
    private List<String> otherImages;

    @Column(name = "MFG", nullable = true)
    private Date mfg;

    @Column(name = "type")
    private String type;

    @Column(name = "category")
    private String category;
}
