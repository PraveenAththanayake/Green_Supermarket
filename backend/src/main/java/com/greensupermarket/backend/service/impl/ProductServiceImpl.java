package com.greensupermarket.backend.service.impl;

import com.greensupermarket.backend.dto.ProductDto;
import com.greensupermarket.backend.entity.Product;
import com.greensupermarket.backend.exception.ResourceNotFoundException;
import com.greensupermarket.backend.mapper.ProductMapper;
import com.greensupermarket.backend.repository.ProductRepository;
import com.greensupermarket.backend.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;
    @Override
    public ProductDto createProduct(ProductDto productDto) {
        Product product = ProductMapper.mapToProduct(productDto);
        Product savedProduct = productRepository.save(product);
        return ProductMapper.mapToProductDto(savedProduct);
    }

    @Override
    public ProductDto getProductById(Long productId) {
        Product product =  productRepository.findById(productId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Product is not exist with the given id: " + productId));
        return ProductMapper.mapToProductDto(product);
    }

    @Override
    public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map(ProductMapper::mapToProductDto).collect(Collectors.toList());
    }

    @Override
    public ProductDto updateProduct(Long productId, ProductDto updatedProduct) {
        Product product = productRepository.findById(productId).orElseThrow(
                () -> new ResourceNotFoundException("Product is not exist with given id: " + productId)
        );
        product.setId(updatedProduct.getId());
        product.setProductName(updatedProduct.getProductName());
        product.setSlug(updatedProduct.getSlug());
        product.setTag(updatedProduct.getTag());
        product.setBrand(updatedProduct.getBrand());
        product.setDescription(updatedProduct.getDescription());
        product.setType(updatedProduct.getType());
        product.setStock(updatedProduct.getStockLimit());
        product.setMeasurements(updatedProduct.getMeasurements());
        product.setPrice(updatedProduct.getPrice());
        product.setSecondPrice(updatedProduct.getSecondPrice());
        product.setStock(updatedProduct.getStock());
        product.setUnit(updatedProduct.getUnit());
        product.setStatus(updatedProduct.getStatus());

        Product updatedProductObj =  productRepository.save(product);

        return ProductMapper.mapToProductDto(updatedProductObj);
    }

    @Override
    public void deleteProduct(Long productId) {
        productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + productId));
        productRepository.deleteById(productId);
    }
}
