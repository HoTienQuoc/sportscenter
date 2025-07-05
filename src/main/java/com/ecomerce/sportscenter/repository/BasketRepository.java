package com.ecomerce.sportscenter.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecomerce.sportscenter.entity.Basket;

@Repository
public interface BasketRepository extends CrudRepository<Basket, String> {
    Basket findByBasketId(String basketId);

    Basket save(Basket basket);

    void deleteById(String basketId);
}
