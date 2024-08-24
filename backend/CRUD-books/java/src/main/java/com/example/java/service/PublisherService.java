package com.example.java.service;

import com.example.java.Response.ApiResponse;
import com.example.java.model.Publisher;
import com.example.java.repositories.IPublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class PublisherService {
    @Autowired
    private IPublisherRepository publisherRepository;
    public ResponseEntity<ApiResponse<List<Publisher>>> getAllPublishers(){
        List<Publisher> publishers = publisherRepository.findAll();
        ApiResponse<List<Publisher>> response =
                new ApiResponse<>(HttpStatus.OK.value(), "Editoriales obtenidas con éxito", publishers);
        return new ResponseEntity<>(response, HttpStatus.OK);

    }
    public ResponseEntity<ApiResponse<Publisher>> getPublisherByID(@PathVariable Integer id){
        Optional<Publisher> optionalPublisher = publisherRepository.findById(id);

        if(optionalPublisher.isPresent()){
            Publisher publisher = optionalPublisher.get();
            ApiResponse<Publisher> response = new ApiResponse<>(HttpStatus.OK.value(), "Editorial encontrada exitosamente.", publisher);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        ApiResponse<Publisher> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Editorial no encontrado con id: " + id, null);
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<ApiResponse<Publisher>> deletePublisherByID(@PathVariable Integer id){
        Optional<Publisher> optionalPublisher = publisherRepository.findById(id);

        if(optionalPublisher.isPresent()){
            Publisher publisher = optionalPublisher.get();
            publisherRepository.deleteById(id);

            ApiResponse<Publisher> response = new ApiResponse<>(HttpStatus.OK.value(), "Editorial borrada exitosamente.", publisher);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        ApiResponse<Publisher> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Editorial no encontrado con id: " + id, null);
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<ApiResponse<Publisher>> updatePublisherByID(@PathVariable Integer id, @RequestBody Publisher publisher) {
        Optional<Publisher> bookPublisher = null;
        try {
            bookPublisher = publisherRepository.findById(id);

            if (bookPublisher.isEmpty()) {
                ApiResponse<Publisher> response = new ApiResponse<>(HttpStatus.NOT_FOUND.value(), "Editorial no encontrado con id: " + id, null);
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }

            Publisher existingPublisher = bookPublisher.get();
            existingPublisher.setName(publisher.getName());

            publisherRepository.save(existingPublisher);

            ApiResponse<Publisher> response = new ApiResponse<>(HttpStatus.OK.value(), "Editorial actualizada exitosamente.", publisher);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            ApiResponse<Publisher> response =
                    new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage() , null);
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<ApiResponse<Publisher>> createPublisher(@RequestBody Publisher publisher) {
        Publisher savedPublisher = publisherRepository.save(publisher);
        ApiResponse<Publisher> response =
                new ApiResponse<>(HttpStatus.CREATED.value(), "Editorial creada exitosamente.", savedPublisher);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
