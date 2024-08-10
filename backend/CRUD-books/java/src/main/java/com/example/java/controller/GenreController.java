package com.example.java.controller;

import com.example.java.model.Author;
import com.example.java.model.Genre;
import com.example.java.service.AuthorService;
import com.example.java.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/genre")
public class GenreController {
    @Autowired
    private GenreService genreService;

    @GetMapping
    public ResponseEntity<List<Genre>> getAllGenres(){
        return genreService.getAllGenres();
    }
}
