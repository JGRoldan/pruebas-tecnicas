package com.example.java.service;

import com.example.java.model.Book;
import com.example.java.repositories.IBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private IBookRepository bookRepository;

    public ResponseEntity<List<Book>> getAllBooks(){
        return new ResponseEntity<>(bookRepository.findAll(), HttpStatus.OK);
    }
}
