package com.example.java.service;

import com.example.java.model.Genre;
import com.example.java.model.Publisher;
import com.example.java.repositories.IGenreRepository;
import com.example.java.repositories.IPublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class PublisherService {
    @Autowired
    private IPublisherRepository publisherRepository;

    @GetMapping
    public ResponseEntity<List<Publisher>> getAllPublishers(){
        return new ResponseEntity<>(publisherRepository.findAll(), HttpStatus.OK);
    }
}
