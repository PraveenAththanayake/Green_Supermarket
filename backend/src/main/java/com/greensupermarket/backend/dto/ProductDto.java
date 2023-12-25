package com.greensupermarket.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

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
    private byte mainImage;
    private byte otherImages;
    private Number life;
    private Date mfg;
    private int type;
    private String category;
}
