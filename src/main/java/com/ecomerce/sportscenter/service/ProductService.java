package com.ecomerce.sportscenter.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ecomerce.sportscenter.response.ProductResponse;

public interface ProductService {
    ProductResponse getProductById(Integer productId);

    Page<ProductResponse> getAllProducts(Pageable pageable);

    List<ProductResponse> searchProductsByName(String keyword);

    List<ProductResponse> searchProductsByBrandTypeAndName(Integer brandId, Integer typeId, String keyword);

    List<ProductResponse> searchProductsByBrandType(Integer brandId, Integer typeId);

    List<ProductResponse> searchProductsByBrand(Integer brandId);

    List<ProductResponse> searchProductsByType(Integer typeId);
}
