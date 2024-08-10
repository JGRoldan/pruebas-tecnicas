package com.example.java.service;

import com.example.java.model.Book;
import com.example.java.model.Genre;
import com.example.java.repositories.IBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class BookService {

    @Autowired
    private IBookRepository bookRepository;

    public ResponseEntity<List<Book>> getAllBooks(){
        return new ResponseEntity<>(bookRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Optional<Book>> getBookByID(@PathVariable Integer id){
        return new ResponseEntity<>(bookRepository.findById(id), HttpStatus.OK);
    }

    public ResponseEntity<List<Genre>> getGenreByBook(@PathVariable Integer id){
        return new ResponseEntity<>(
                bookRepository
                        .findById(id)
                        .get()
                        .getGenres()
                        ,
                HttpStatus.OK);
    }
}
