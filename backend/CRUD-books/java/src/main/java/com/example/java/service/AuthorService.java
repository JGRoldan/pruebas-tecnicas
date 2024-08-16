package com.example.java.service;

import com.example.java.model.Author;
import com.example.java.repositories.IAuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {

    @Autowired
    private IAuthorRepository authorRepository;

    public ResponseEntity<List<Author>> getAllAuthors(){
        return new ResponseEntity<>(authorRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Author> getAuthorByID(@PathVariable Integer id){
        Optional<Author> author = authorRepository.findById(id);
        if(author.isEmpty()){
            throw new RuntimeException("Error al encontrar el autor con ID=" + id);
        }
        return new ResponseEntity<>(author.get(), HttpStatus.OK);
    }

    public ResponseEntity<Author> deleteAuthorByID(@PathVariable Integer id){
        Optional<Author> author = authorRepository.findById(id);
        if(author.isEmpty()){
            throw new RuntimeException("Error al encontrar el autor con ID=" + id);
        }
        authorRepository.deleteById(id);
        return new ResponseEntity<>(author.get(), HttpStatus.OK);
    }

    public ResponseEntity<Author> updateAuthorByID(@PathVariable Integer id, @RequestBody Author author) {
        Optional<Author> auth = null;
        try {
            auth = authorRepository.findById(id);

            if (auth.isEmpty()) {
                throw new RuntimeException("Error al encontrar el autor con ID=" + id);
            }

            Author existingAuthor = auth.get();
            existingAuthor.setFirst_name(author.getFirst_name());
            existingAuthor.setLast_name(author.getLast_name());

            authorRepository.save(existingAuthor);
            return new ResponseEntity<>(auth.get(), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(auth.get(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Author> createAuthor(@RequestBody Author author) {
        Author savedAuthor = authorRepository.save(author);
        return new ResponseEntity<>(savedAuthor, HttpStatus.CREATED);
    }
}
