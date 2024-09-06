package com.example.java.service;

import com.example.java.Response.ApiResponse;
import com.example.java.model.Author;
import com.example.java.model.Book;
import com.example.java.model.Genre;
import com.example.java.model.Publisher;
import com.example.java.repositories.IBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private IBookRepository bookRepository;

    public ResponseEntity<ApiResponse<List<Book>>> getAllBooks(){
        List<Book> books = bookRepository.findAll();
        ApiResponse<List<Book>> response =
                new ApiResponse<>(HttpStatus.OK.value(), "Libros obtenidos con éxito", books);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public ResponseEntity<ApiResponse<Book>> getBookByID(@PathVariable Integer id){
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()){
            Book book = optionalBook.get();
            ApiResponse<Book> response = new ApiResponse<>(HttpStatus.OK.value(), "Libro encontrado con éxito.", book);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        ApiResponse<Book> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Libro no encontrado con id:" + id, null);
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);

    }

    public ResponseEntity<ApiResponse<List<Genre>>> getGenreByBook(@PathVariable Integer id){
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()){
            List<Genre> genresBook = optionalBook.get().getGenres();
            ApiResponse<List<Genre>> response = new ApiResponse<>(HttpStatus.OK.value(), "Libro encontrado con éxito.", genresBook);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        ApiResponse<List<Genre>> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Libro no encontrado con id:" + id, null);
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<ApiResponse<Author>> getAuthorByBook(@PathVariable Integer id){
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()){
            Author author = optionalBook.get().getAuthor_id();

            ApiResponse<Author> response = new ApiResponse<>(HttpStatus.OK.value(), "Autor encontrado con éxito.", author);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        ApiResponse<Author> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Autor no encontrado con id:" + id, null);
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<ApiResponse<Publisher>> getPublisherByBook(@PathVariable Integer id){
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()){
            Publisher publisher = optionalBook.get().getPublisher_id();

            ApiResponse<Publisher> response = new ApiResponse<>(HttpStatus.OK.value(), "Editorial encontrado con éxito.", publisher);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        ApiResponse<Publisher> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Editorial no encontrado con id:" + id, null);
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);

    }

    public ResponseEntity<ApiResponse<Book>> deleteBook(@PathVariable Integer id){
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()){
            Book deletedBook = optionalBook.get();
            bookRepository.deleteById(id);

            ApiResponse<Book> response = new ApiResponse<>(HttpStatus.OK.value(), "Libro borrado exitosamente.", deletedBook);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        ApiResponse<Book> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Libro no encontrado con id:" + id, null);
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<ApiResponse<Book>> createBook(@RequestBody Book book){
        try {
            Book savedBook = bookRepository.save(book);
            ApiResponse<Book> response = new ApiResponse<>(HttpStatus.CREATED.value(), "Libro creado exitosamente.", savedBook);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            ApiResponse<Book> response = new ApiResponse<>(HttpStatus.BAD_REQUEST.value(), "Error al crear el libro.", null);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<ApiResponse<Book>> updateBook(@PathVariable Integer id, @RequestBody Book book){
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            Book bookDetails = optionalBook.get();
            book.setSummary(bookDetails.getSummary());
            book.setPageCount(bookDetails.getPageCount());
            book.setPrice(bookDetails.getPrice());
            book.setPublicationDate(bookDetails.getPublicationDate());
            book.setISBN(bookDetails.getISBN());
            book.setAuthor_id(bookDetails.getAuthor_id());
            book.setPublisher_id(bookDetails.getPublisher_id());
            book.setGenres(bookDetails.getGenres());
            Book updatedBook = bookRepository.save(book);
            ApiResponse<Book> response = new ApiResponse<>(HttpStatus.OK.value(), "Libro actualizado exitosamente.", updatedBook);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            ApiResponse<Book> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Libro no encontrado con id:" + id, null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }
}
