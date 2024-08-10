package com.example.java.controller;

import com.example.java.model.Publisher;
import com.example.java.service.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/publisher")
public class PublisherController {

    @Autowired
    private PublisherService publisherService;

    @GetMapping
    public ResponseEntity<List<Publisher>> getAllPublishers(){
        return publisherService.getAllPublishers();
    }
}
