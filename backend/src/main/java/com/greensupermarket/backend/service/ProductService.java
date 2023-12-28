package com.greensupermarket.backend.service;

import com.greensupermarket.backend.dto.ProductDto;

import java.util.List;

public interface ProductService {
    ProductDto createProduct(ProductDto productDto);
    ProductDto getProductById(Long productId);
    List<ProductDto> getAllProducts();
    ProductDto updateProduct(Long productId, ProductDto updatedProduct);
    void deleteProduct(Long productId);
}


