package com.ecomerce.sportscenter.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecomerce.sportscenter.entity.Brand;
import com.ecomerce.sportscenter.repository.BrandRepository;
import com.ecomerce.sportscenter.response.BrandResponse;
import com.ecomerce.sportscenter.service.BrandService;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class BrandServiceImpl implements BrandService{
    @Autowired
    private BrandRepository brandRepository;

    public BrandServiceImpl(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }

    @Override
    public List<BrandResponse> getAllBrands() {
        log.info("Fetch all brands");
        List<Brand> brandList = brandRepository.findAll();

        List<BrandResponse> brandResponses 
            = brandList.stream()
            .map(this::convertToBrandResponse)
            .collect(Collectors.toList());
        
        log.info("Fetch all brands");
        return brandResponses;
    }

    private BrandResponse  convertToBrandResponse(Brand brand){
        return BrandResponse.builder()
                .id(brand.getId())
                .name(brand.getName())
                .build();
    }
}
