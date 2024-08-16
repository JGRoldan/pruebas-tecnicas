package com.example.java.controller;

import com.example.java.model.Genre;
import com.example.java.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public ResponseEntity<Genre> getGenreByID(@PathVariable Integer id){
        return genreService.getGenreByID(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Genre> deleteGenreByID(@PathVariable Integer id){
        return genreService.deleteGenreByID(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Genre> updateGenreByID(@PathVariable Integer id, @RequestBody Genre genre){
        return genreService.updateGenreByID(id, genre);
    }

    @PostMapping
    public ResponseEntity<Genre> createGenre(@RequestBody Genre author) {
        return genreService.createGenre(author);
    }
}
