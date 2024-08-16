package com.example.java.service;

import com.example.java.model.Genre;
import com.example.java.repositories.IGenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class GenreService {
    @Autowired
    private IGenreRepository genreRepository;

    public ResponseEntity<List<Genre>> getAllGenres(){
        return new ResponseEntity<>(genreRepository.findAll(), HttpStatus.OK);
    }
    public ResponseEntity<Genre> getGenreByID(@PathVariable Integer id){
        Optional<Genre> genre = genreRepository.findById(id);
        if(genre.isEmpty()){
            throw new RuntimeException("Error al encontrar el genero con ID=" + id);
        }
        return new ResponseEntity<>(genre.get(), HttpStatus.OK);
    }

    public ResponseEntity<Genre> deleteGenreByID(@PathVariable Integer id){
        Optional<Genre> genre = genreRepository.findById(id);
        if(genre.isEmpty()){
            throw new RuntimeException("Error al encontrar el genero con ID=" + id);
        }
        genreRepository.deleteById(id);
        return new ResponseEntity<>(genre.get(), HttpStatus.OK);
    }

    public ResponseEntity<Genre> updateGenreByID(@PathVariable Integer id, @RequestBody Genre genre) {
        Optional<Genre> bookGenre = null;
        try {
            bookGenre = genreRepository.findById(id);

            if (bookGenre.isEmpty()) {
                throw new RuntimeException("Error al encontrar el genero con ID=" + id);
            }

            Genre existingGenre = bookGenre.get();
            existingGenre.setName(genre.getName());

            genreRepository.save(existingGenre);
            return new ResponseEntity<>(bookGenre.get(), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(bookGenre.get(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Genre> createGenre(@RequestBody Genre genre) {
        Genre savedGenre = genreRepository.save(genre);
        return new ResponseEntity<>(savedGenre, HttpStatus.CREATED);
    }
}
