package com.ecomerce.sportscenter.service.impl;



import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.ecomerce.sportscenter.entity.Product;
import com.ecomerce.sportscenter.repository.ProductRepository;
import com.ecomerce.sportscenter.response.ProductResponse;
import com.ecomerce.sportscenter.service.ProductService;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Page<ProductResponse> getAllProducts(Pageable pageable) {
        log.info("Fetch all products");
        Page<Product> productPage = productRepository.findAll(pageable);

        Page<ProductResponse> productResponses 
            = productPage.map(this::convertToProductResponse);
        
        log.info("Fetch all products");
        return productResponses;
    }

    private ProductResponse  convertToProductResponse(Product product){
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .pictureUrl(product.getPictureUrl())
                .productType(product.getType().getName())
                .productBrand(product.getBrand().getName())
                .build();
    }

    @Override
    public ProductResponse getProductById(Integer productId) {
        log.info("Fetch product Id: {}", productId);
        Product product = productRepository
                        .findById(productId.longValue())
                        .orElseThrow(() -> new RuntimeException("Product with given id doesn't exist"));
        log.info("Fetch product Id: {}", productId);
        ProductResponse productResponse = convertToProductResponse(product);
        return productResponse;
    }

    @Override
    public List<ProductResponse> searchProductsByName(String keyword) {
        log.info("Searching product(s) by name: {}",keyword);
        //Call custom query method
        List<Product> products = productRepository.searchByName(keyword);

        List<ProductResponse> productResponses = products.stream()
                        .map(this::convertToProductResponse)
                        .collect(Collectors.toList());
        return productResponses;
    }

    @Override
    public List<ProductResponse> searchProductsByBrandTypeAndName(Integer brandId, Integer typeId, String keyword) {
        log.info("Searching product(s) by brandId: {}, typeId: {} and keyword: {}", brandId, typeId, keyword);
        //Call the custom query Method
        List<Product> products = productRepository.searchByBrandTypeAndName(brandId, typeId, keyword);
        //Map
        List<ProductResponse> productResponses = products.stream()
                .map(this::convertToProductResponse)
                .collect(Collectors.toList());
        log.info("Fetched all products");
        return productResponses;
    }

    @Override
    public List<ProductResponse> searchProductsByBrandType(Integer brandId, Integer typeId) {
        log.info("Searching product(s) by brandId: {}, and typeId: {}", brandId, typeId);
        //Call the custom query Method
        List<Product> products = productRepository.searchByBrandAndType(brandId, typeId);
        //Map
        List<ProductResponse> productResponses = products.stream()
                .map(this::convertToProductResponse)
                .collect(Collectors.toList());
        log.info("Fetched all products");
        return productResponses;
    }

    @Override
    public List<ProductResponse> searchProductsByBrand(Integer brandId) {
        log.info("Searching product(s) by brandId: {}", brandId);
        //Call the custom query Method
        List<Product> products = productRepository.searchByBrand(brandId);
        //Map
        List<ProductResponse> productResponses = products.stream()
                .map(this::convertToProductResponse)
                .collect(Collectors.toList());
        log.info("Fetched all products");
        return productResponses;
    }

    @Override
    public List<ProductResponse> searchProductsByType(Integer typeId) {
        log.info("Searching product(s) by typeId: {}", typeId);
        //Call the custom query Method
        List<Product> products = productRepository.searchByType(typeId);
        //Map
        List<ProductResponse> productResponses = products.stream()
                .map(this::convertToProductResponse)
                .collect(Collectors.toList());
        log.info("Fetched all products");
        return productResponses;
    }
    

}
