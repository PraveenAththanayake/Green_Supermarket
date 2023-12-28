package com.greensupermarket.backend.mapper;

import com.greensupermarket.backend.dto.ProductDto;
import com.greensupermarket.backend.entity.Product;

public class ProductMapper {
    public static ProductDto mapToProductDto(Product product) {
        return new ProductDto(
                product.getId(),
                product.getProductName(),
                product.getStock(),
                product.getTags(),
                product.getBrand(),
                product.getDescription(),
                product.getMainImage(),
                product.getOtherImages(),
//                product.getMfg(),
                product.getType(),
                product.getCategory(),
                product.getPrice(),
                product.getDiscountPrice()
        );
    }

    public static Product mapToProduct(ProductDto productDto) {
        return new Product(
                productDto.getId(),
                productDto.getProductName(),
                productDto.getStock(),
                productDto.getTags(),
                productDto.getBrand(),
                productDto.getDescription(),
                 productDto.getMainImage(),
                 productDto.getOtherImages(),
//                 productDto.getMfg(),
                productDto.getType(),
                productDto.getCategory(),
                productDto.getPrice(),
                productDto.getDiscountPrice()
        );
    }
}
