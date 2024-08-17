package com.example.java.service;

import com.example.java.Response.ApiResponse;
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

    public ResponseEntity<ApiResponse<List<Author>>> getAllAuthors(){
        List<Author> authors = authorRepository.findAll();
        ApiResponse<List<Author>> response =
                new ApiResponse<>(HttpStatus.OK.value(),"Autores obtenidos con éxito", authors);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public ResponseEntity<ApiResponse<Author>> getAuthorByID(@PathVariable Integer id){
        Optional<Author> optionalAuthor = authorRepository.findById(id);
        if(optionalAuthor.isPresent()){
            Author author =  optionalAuthor.get();
            ApiResponse<Author> response = new ApiResponse<>(HttpStatus.OK.value(), "Autor encontrado exitosamente con id: " + id, author);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            ApiResponse<Author> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Autor no encontrado con id: " + id, null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<ApiResponse<Author>> deleteAuthorByID(@PathVariable Integer id){
        Optional<Author> author = authorRepository.findById(id);

        if(author.isPresent()){
            Author deletedAuthor =  author.get();
            authorRepository.deleteById(id);

            ApiResponse<Author> response = new ApiResponse<>(HttpStatus.OK.value(), "Autor borrado exitosamente.", deletedAuthor);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            ApiResponse<Author> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Autor no encontrado con id: " + id, null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<ApiResponse<Author>> updateAuthorByID(@PathVariable Integer id, @RequestBody Author author) {
        Optional<Author> auth = null;
        try {
            auth = authorRepository.findById(id);

            if (auth.isEmpty()) {
                ApiResponse<Author> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Autor no encontrado con id: " + id, null);
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }

            Author existingAuthor = auth.get();
            existingAuthor.setFirst_name(author.getFirst_name());
            existingAuthor.setLast_name(author.getLast_name());

            authorRepository.save(existingAuthor);

            ApiResponse<Author> response = new ApiResponse<>(HttpStatus.CREATED.value(), "Autor actualizado exitosamente con id: " + id, existingAuthor);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            ApiResponse<Author> response =
                    new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage() , null);
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<ApiResponse<Author>> createAuthor(@RequestBody Author author) {
        Author savedAuthor = authorRepository.save(author);
        ApiResponse<Author> response =
                new ApiResponse<>(HttpStatus.CREATED.value(), "Autor creado exitosamente.", savedAuthor);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
