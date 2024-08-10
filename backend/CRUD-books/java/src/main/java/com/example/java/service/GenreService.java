package com.example.java.service;

import com.example.java.model.Author;
import com.example.java.model.Genre;
import com.example.java.repositories.IAuthorRepository;
import com.example.java.repositories.IGenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class GenreService {
    @Autowired
    private IGenreRepository genreRepository;

    @GetMapping
    public ResponseEntity<List<Genre>> getAllGenres(){
        return new ResponseEntity<>(genreRepository.findAll(), HttpStatus.OK);
    }
}
