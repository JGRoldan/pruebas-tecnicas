package com.example.java.controller;

import com.example.java.model.Author;
import com.example.java.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/author")
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @GetMapping
    public ResponseEntity<List<Author>> getAllAuthors(){
        return authorService.getAllAuthors();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Author> getAuthorByID(@PathVariable Integer id){
        return authorService.getAuthorByID(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Author> deleteAuthorByID(@PathVariable Integer id){
        return authorService.deleteAuthorByID(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Author> updateAuthorByID(@PathVariable Integer id, @RequestBody Author author){
        return authorService.updateAuthorByID(id, author);
    }

    @PostMapping
    public ResponseEntity<Author> createAuthor(@RequestBody Author author) {
        return authorService.createAuthor(author);
    }
}
