package com.example.java.controller;

import com.example.java.Response.ApiResponse;
import com.example.java.model.Author;
import com.example.java.model.Book;
import com.example.java.model.Genre;
import com.example.java.model.Publisher;
import com.example.java.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@RestController
@RequestMapping("/api/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<Book>>> getAllBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Book>> getBookByID(@PathVariable Integer id){
        return bookService.getBookByID(id);
    }

    @GetMapping("/{id}/genre")
    public ResponseEntity<ApiResponse<List<Genre>>> getGenreByBook(@PathVariable Integer id){
        return bookService.getGenreByBook(id);
    }
    @GetMapping("/{id}/author")
    public ResponseEntity<ApiResponse<Author>> getAuthorByBook(@PathVariable Integer id){
        return bookService.getAuthorByBook(id);
    }

    @GetMapping("/{id}/publisher")
    public ResponseEntity<ApiResponse<Publisher>> getPublisherByBook(@PathVariable Integer id){
        return bookService.getPublisherByBook(id);
    }
    @PostMapping
    public ResponseEntity<ApiResponse<Book>> createBook(@RequestBody Book book) {
        return bookService.createBook(book);
    }
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Book>> updateBook(@PathVariable Integer id, @RequestBody Book book) {
        return bookService.updateBook(id, book);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Book>> deleteBook(@PathVariable Integer id) {
        return bookService.deleteBook(id);
    }
}
