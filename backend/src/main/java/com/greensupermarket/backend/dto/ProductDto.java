package com.greensupermarket.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    private Long id;

    private String productName;

    private String slug;

    private String tag;

    private String brand;

    private String description;

    private String type;

    private int stockLimit;

    private int measurements;

    private double price;

    private double secondPrice;

    private int stock;

    private int unit;

    private String status;

}
