package com.example.java.service;

import com.example.java.Response.ApiResponse;
import com.example.java.model.Genre;
import com.example.java.repositories.IGenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class GenreService {
    @Autowired
    private IGenreRepository genreRepository;

    public ResponseEntity<ApiResponse<List<Genre>>> getAllGenres(){
        List<Genre> genres = genreRepository.findAll();
        ApiResponse<List<Genre>> response =
                new ApiResponse<>(HttpStatus.OK.value(), "Generos obtenidos con éxito", genres);

        return new ResponseEntity<>(response, HttpStatus.OK);

    }
    public ResponseEntity<ApiResponse<Genre>> getGenreByID(@PathVariable Integer id){
        Optional<Genre> optionalGenre = genreRepository.findById(id);
        if(optionalGenre.isPresent()){
            Genre genre = optionalGenre.get();
            ApiResponse<Genre> response = new ApiResponse<>(HttpStatus.OK.value(), "Genero encontrado con éxito.", genre);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        ApiResponse<Genre> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Genero no encontrado con id:" + id, null);
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<ApiResponse<Genre>> deleteGenreByID(@PathVariable Integer id){
        Optional<Genre> optionalGenre = genreRepository.findById(id);
        if(optionalGenre.isPresent()){
            Genre deletedGenre = optionalGenre.get();
            genreRepository.deleteById(id);

            ApiResponse<Genre> response = new ApiResponse<>(HttpStatus.OK.value(), "Genero borrado exitosamente.", deletedGenre);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        ApiResponse<Genre> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Genero no encontrado con id:" + id, null);
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<ApiResponse<Genre>> updateGenreByID(@PathVariable Integer id, @RequestBody Genre genre) {
        Optional<Genre> bookGenre = null;
        try {
            bookGenre = genreRepository.findById(id);

            if (bookGenre.isEmpty()) {
                ApiResponse<Genre> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Genero no encontrado con id:" + id, null);
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }

            Genre existingGenre = bookGenre.get();
            existingGenre.setName(genre.getName());
            genreRepository.save(existingGenre);

            ApiResponse<Genre> response = new ApiResponse<>(HttpStatus.OK.value(), "Genero actualizado exitosamente.", existingGenre);
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            ApiResponse<Genre> response =
                    new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage() , null);
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<ApiResponse<Genre>> createGenre(@RequestBody Genre genre) {
        Genre savedGenre = genreRepository.save(genre);
        ApiResponse<Genre> response = new ApiResponse<>(HttpStatus.CREATED.value(), "Genero creado exitosamente.", savedGenre);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
