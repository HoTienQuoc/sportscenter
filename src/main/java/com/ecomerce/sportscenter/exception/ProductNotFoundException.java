package com.ecomerce.sportscenter.exception;

public class ProductNotFoundException extends RuntimeException{
    public ProductNotFoundException(String message){
        super(message);
    }
    public ProductNotFoundException(String message, Throwable cause){
        super(message,cause);
    }
}
