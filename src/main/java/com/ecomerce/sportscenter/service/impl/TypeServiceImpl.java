package com.ecomerce.sportscenter.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecomerce.sportscenter.entity.Type;
import com.ecomerce.sportscenter.repository.TypeRepository;
import com.ecomerce.sportscenter.response.TypeResponse;
import com.ecomerce.sportscenter.service.TypeService;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class TypeServiceImpl implements TypeService{
    @Autowired
    private TypeRepository typeRepository;

    public TypeServiceImpl(TypeRepository typeRepository) {
        this.typeRepository = typeRepository;
    }

    @Override
    public List<TypeResponse> getAllTypes() {
        log.info("Fetch all types");
        List<Type> typeList = typeRepository.findAll();

        List<TypeResponse> typeResponses 
            = typeList.stream()
            .map(this::convertToTypeResponse)
            .collect(Collectors.toList());

        log.info("Fetch all types");
        return typeResponses;
    }

    private TypeResponse  convertToTypeResponse(Type type){
        return TypeResponse.builder()
                .id(type.getId())
                .name(type.getName())
                .build();
    }

}
