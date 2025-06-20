package com.ecomerce.sportscenter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomerce.sportscenter.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
