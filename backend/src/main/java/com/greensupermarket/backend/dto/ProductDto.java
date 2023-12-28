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
    private int stock;
    private String tags;
    private String brand;
    private String description;
    private String mainImage;
    private String otherImages;
//    private Date mfg;
    private String type;
    private String category;
    private double price;
    private double discountPrice;
}
