package com.ecomerce.sportscenter.service.impl;



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

}
