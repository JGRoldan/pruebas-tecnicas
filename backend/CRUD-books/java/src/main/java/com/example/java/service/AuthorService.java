package com.example.java.service;

import com.example.java.model.Author;
import com.example.java.repositories.IAuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class AuthorService {

    @Autowired
    private IAuthorRepository authorRepository;

    @GetMapping
    public ResponseEntity<List<Author>> getAllAuthors(){
        return new ResponseEntity<>(authorRepository.findAll(), HttpStatus.OK);
    }
}
