package com.ecomerce.sportscenter.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ecomerce.sportscenter.entity.Basket;
import com.ecomerce.sportscenter.entity.BasketItem;
import com.ecomerce.sportscenter.repository.BasketRepository;
import com.ecomerce.sportscenter.response.BasketItemResponse;
import com.ecomerce.sportscenter.response.BasketResponse;
import com.ecomerce.sportscenter.service.BasketService;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class BasketServiceImpl implements BasketService{
    private final BasketRepository basketRepository;

    public BasketServiceImpl(BasketRepository basketRepository) {
        this.basketRepository = basketRepository;
    }

    @Override
    public List<BasketResponse> getAllBaskets() {
        log.info("Fetching all Baskets");
        List<Basket> basketList = (List<Basket>) basketRepository.findAll();
        //now we will use stream operator to map with response
        List<BasketResponse> basketResponses = basketList.stream()
                .map(this::convertToBasketResponse)
                .collect(Collectors.toList());
        log.info("Fetched all Baskets");
        return basketResponses;
    }

    @Override
    public BasketResponse getBasketById(String basketId) {
        log.info("Fetching Basket by Id: {}", basketId);
        Optional<Basket> basketOptional = basketRepository.findById(basketId);
        if(basketOptional.isPresent()){
            Basket basket = basketOptional.get();
            log.info("Fetched Basket by Id: {}", basketId);
            return convertToBasketResponse(basket);
        }else{
            log.info("Basket not found by Id: {}", basketId);
            return null;
        }
    }

    @Override
    public void deleteBasketById(String basketId) {
        log.info("Deleting Basket by Id: {}", basketId);
        basketRepository.deleteById(basketId);
        log.info("Deleted Basket by Id: {}", basketId);
    }

    @Override
    public BasketResponse createBasket(Basket basket) {
        log.info("Creating Basket");
        Basket savedBasket = basketRepository.save(basket);
        log.info("Basket created by Id : {}", savedBasket.getId());
        return convertToBasketResponse(savedBasket);
    }

    private BasketResponse convertToBasketResponse(Basket basket) {
        if(basket == null){
            return null;
        }
        List<BasketItemResponse> itemResponses = basket.getItems().stream()
                .map(this::convertToBasketItemResponse)
                .collect(Collectors.toList());
        return BasketResponse.builder()
                .id(basket.getId())
                .items(itemResponses)
                .build();
    }

    private BasketItemResponse convertToBasketItemResponse(BasketItem basketItem) {
        return BasketItemResponse.builder()
                .id(basketItem.getId())
                .name(basketItem.getName())
                .description(basketItem.getDescription())
                .price(basketItem.getPrice())
                .pictureUrl(basketItem.getPictureUrl())
                .productBrand(basketItem.getProductBrand())
                .productType(basketItem.getProductType())
                .quantity(basketItem.getQuantity())
                .build();
    }

  
}