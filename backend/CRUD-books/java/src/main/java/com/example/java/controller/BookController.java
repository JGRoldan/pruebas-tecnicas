package com.example.java.controller;

import com.example.java.model.Book;
import com.example.java.model.Genre;
import com.example.java.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@RestController
@RequestMapping("/api/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Book>> getBookByID(@PathVariable Integer id){
        return bookService.getBookByID(id);
    }

    @GetMapping("/{id}/genre")
    public ResponseEntity<List<Genre>> getGenreByBook(@PathVariable Integer id){
        return bookService.getGenreByBook(id);
    }
}
