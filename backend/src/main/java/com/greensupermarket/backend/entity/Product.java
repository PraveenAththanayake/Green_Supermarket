package com.greensupermarket.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

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

    @Column(name = "mainImage")
    private byte mainImage;

    @Column(name = "otherImages")
    private byte otherImages;

    @Column(name = "life")
    private Number life;

    @Column(name = "MFG")
    private Date mfg;

    @Column(name = "type")
    private int type;

    @Column(name = "category")
    private String category;
}
