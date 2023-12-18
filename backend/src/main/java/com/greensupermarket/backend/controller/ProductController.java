package com.greensupermarket.backend.controller;

import com.greensupermarket.backend.dto.ProductDto;
import com.greensupermarket.backend.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/products")
public class ProductController {
    private ProductService productService;

    //Build Add product rest api
    @PostMapping
    public ResponseEntity<ProductDto> createEmployee(@RequestBody ProductDto productDto) {
        ProductDto savedProduct = productService.createProduct(productDto);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    //build get product rest api
    @GetMapping("{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable("id") Long productId) {
        ProductDto productDto = productService.getProductById(productId);
        return ResponseEntity.ok(productDto);
    }

    //build get all products rest api
    @GetMapping
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        List<ProductDto> products =  productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    //build update rest api
    @PutMapping("{id}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable("id") Long productId,
                                                    @RequestBody ProductDto updatedProduct){
        ProductDto productDto =  productService.updateProduct(productId, updatedProduct);
        return ResponseEntity.ok(productDto);
    }
}
