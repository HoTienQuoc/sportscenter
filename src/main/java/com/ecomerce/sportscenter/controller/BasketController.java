package com.ecomerce.sportscenter.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecomerce.sportscenter.entity.Basket;
import com.ecomerce.sportscenter.entity.BasketItem;
import com.ecomerce.sportscenter.response.BasketItemResponse;
import com.ecomerce.sportscenter.response.BasketResponse;

import com.ecomerce.sportscenter.service.BasketService;

@RestController
@RequestMapping("/api/baskets")
public class BasketController {
    private final BasketService basketService;
    public BasketController(BasketService basketService) {
        this.basketService = basketService;
    }

    @GetMapping
    public List<BasketResponse> getAllBaskets(){
        return basketService.getAllBaskets();
    }

    @GetMapping("/{basketId}")
    @PreAuthorize("isAuthenticated()")
    public BasketResponse getBasketById(@PathVariable String basketId){
        return basketService.getBasketById(basketId);
    }

    @DeleteMapping("/{basketId}")
    public void deleteBasketById(@PathVariable String basketId){
        basketService.deleteBasketById(basketId);
    }

    @PostMapping
    public ResponseEntity<BasketResponse> createBasket(@RequestBody BasketResponse basketResponse){
        //Convert this Basket Response to Basket Entity
        Basket basket = convertToBasketEntity(basketResponse);
        //Call the service method to create the Basket
        BasketResponse createdBasket = basketService.createBasket(basket);
        //Return the created basket
        return new ResponseEntity<>(createdBasket, HttpStatus.CREATED);
    }

    private Basket convertToBasketEntity(BasketResponse basketResponse) {
        Basket basket = new Basket();
        basket.setId(basketResponse.getId());
        basket.setItems(mapBasketItemResponsesToEntities(basketResponse.getItems()));
        return basket;
    }

    private List<BasketItem> mapBasketItemResponsesToEntities(List<BasketItemResponse> itemResponses) {
        return itemResponses.stream()
                .map(this::convertToBasketItemEntity)
                .collect(Collectors.toList());
    }

    private BasketItem convertToBasketItemEntity(BasketItemResponse itemResponse) {
        BasketItem basketItem = new BasketItem();
        basketItem.setId(itemResponse.getId());
        basketItem.setName(itemResponse.getName());
        basketItem.setDescription(itemResponse.getDescription());
        basketItem.setPrice(itemResponse.getPrice());
        basketItem.setPictureUrl(itemResponse.getPictureUrl());
        basketItem.setProductBrand(itemResponse.getProductBrand());
        basketItem.setProductType(itemResponse.getProductType());
        basketItem.setQuantity(itemResponse.getQuantity());
        return basketItem;
    }

    
}
