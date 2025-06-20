package com.ecomerce.sportscenter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomerce.sportscenter.entity.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {

}
