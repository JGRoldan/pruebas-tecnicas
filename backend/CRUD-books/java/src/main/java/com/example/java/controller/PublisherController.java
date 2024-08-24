package com.example.java.controller;

import com.example.java.Response.ApiResponse;
import com.example.java.model.Publisher;
import com.example.java.service.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/publisher")
public class PublisherController {

    @Autowired
    private PublisherService publisherService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<Publisher>>> getAllPublishers(){
        return publisherService.getAllPublishers();
    }
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Publisher>> getPublisherByID(@PathVariable Integer id){
        return publisherService.getPublisherByID(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Publisher>> deletePublisherByID(@PathVariable Integer id){
        return publisherService.deletePublisherByID(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Publisher>> updatePublisherByID(@PathVariable Integer id, @RequestBody Publisher publisher){
        return publisherService.updatePublisherByID(id, publisher);
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Publisher>> createPublisher(@RequestBody Publisher publisher) {
        return publisherService.createPublisher(publisher);
    }
}
