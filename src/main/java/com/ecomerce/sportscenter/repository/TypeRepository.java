package com.ecomerce.sportscenter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomerce.sportscenter.entity.Type;

@Repository
public interface TypeRepository extends JpaRepository<Type, Long> {

}
