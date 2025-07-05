package com.ecomerce.sportscenter.service;

import java.util.List;

import com.ecomerce.sportscenter.entity.Basket;
import com.ecomerce.sportscenter.response.BasketResponse;

public interface BasketService {
    List<BasketResponse> getAllBaskets();
    BasketResponse getBasketById(String basketId);
    void deleteBasketById(String basketId);
    BasketResponse createBasket(Basket basket);
}
