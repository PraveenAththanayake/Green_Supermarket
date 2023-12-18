package com.greensupermarket.backend.mapper;

import com.greensupermarket.backend.dto.ProductDto;
import com.greensupermarket.backend.entity.Product;

public class ProductMapper {
    public static ProductDto mapToProductDto(Product product){
        return new ProductDto(
                product.getId(),
                product.getProductName(),
                product.getSlug(),
                product.getTag(),
                product.getBrand(),
                product.getDescription(),
                product.getType(),
                product.getStockLimit(),
                product.getMeasurements(),
                product.getPrice(),
                product.getSecondPrice(),
                product.getStock(),
                product.getUnit(),
                product.getStatus()
        );
    }
    public static Product mapToProduct(ProductDto productDto){
        return new Product (
                productDto.getId(),
                productDto.getProductName(),
                productDto.getSlug(),
                productDto.getTag(),
                productDto.getBrand(),
                productDto.getDescription(),
                productDto.getType(),
                productDto.getStockLimit(),
                productDto.getMeasurements(),
                productDto.getPrice(),
                productDto.getSecondPrice(),
                productDto.getStock(),
                productDto.getUnit(),
                productDto.getStatus()
        );
    }
}
