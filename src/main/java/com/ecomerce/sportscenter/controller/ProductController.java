package com.ecomerce.sportscenter.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecomerce.sportscenter.response.BrandResponse;
import com.ecomerce.sportscenter.response.ProductResponse;
import com.ecomerce.sportscenter.response.TypeResponse;
import com.ecomerce.sportscenter.service.BrandService;
import com.ecomerce.sportscenter.service.ProductService;
import com.ecomerce.sportscenter.service.TypeService;


@RestController
@RequestMapping("/api/products")
public class ProductController {
    private ProductService productService;
    private BrandService brandService;
    private TypeService typeService;


    public ProductController(ProductService productService, BrandService brandService, TypeService typeService) {
        this.productService = productService;
        this.brandService = brandService;
        this.typeService = typeService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductResponse> getProductById(@PathVariable("id") Integer productId) {
        ProductResponse productResponse = productService.getProductById(productId);
        return new ResponseEntity<>(productResponse, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<Page<ProductResponse>> getProducts(
        @PageableDefault(size=10) Pageable pageable,
        @RequestParam(name="keyword", required = false) String keyword,
        @RequestParam(name="sort", defaultValue = "name") String sort,
        @RequestParam(name="oder", defaultValue = "asc" ) String order
    ) {
        Page<ProductResponse> productResponsePage;

        if(keyword!=null && !keyword.isEmpty()){
            List<ProductResponse> productResponses = productService.searchProductsByName(keyword);
            productResponsePage = new PageImpl<>(productResponses,pageable,productResponses.size());
        }
        else{
            //if no search criteria, then retrieve based on sorting options
            Sort.Direction direction = "asc".equalsIgnoreCase(order) ? Sort.Direction.ASC : Sort.Direction.DESC;
            Sort sorting = Sort.by(direction,sort);
            productResponsePage = productService.getAllProducts(
                PageRequest.of(
                    Pageable.unpaged().getPageNumber(), pageable.getPageSize(), sorting
                )
            );
        }

        return new ResponseEntity<>(productResponsePage, HttpStatus.OK);
        // Page<ProductResponse> productResponsePage = productService.getAllProducts(pageable);
        // return new ResponseEntity<>(productResponsePage, HttpStatus.OK);
    }

    @GetMapping("/brands")
    public ResponseEntity<List<BrandResponse>> getBrands() {
        List<BrandResponse> brandResponse = brandService.getAllBrands();
        return new ResponseEntity<>(brandResponse, HttpStatus.OK);
    }

    @GetMapping("/types")
    public ResponseEntity<List<TypeResponse>> getTypes() {
        List<TypeResponse> typeResponse = typeService.getAllTypes();
        return new ResponseEntity<>(typeResponse, HttpStatus.OK);
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<ProductResponse>> searchProducts(@RequestParam("keyword") String keyword) {
        List<ProductResponse> productResponses = productService.searchProductsByName(keyword);
        return new ResponseEntity<>(productResponses, HttpStatus.OK);
    }
    
}
