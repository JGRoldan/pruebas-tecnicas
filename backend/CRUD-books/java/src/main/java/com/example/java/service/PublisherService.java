package com.example.java.service;

import com.example.java.model.Publisher;
import com.example.java.model.Publisher;
import com.example.java.repositories.IPublisherRepository;
import com.example.java.repositories.IPublisherRepository;
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
public class PublisherService {
    @Autowired
    private IPublisherRepository publisherRepository;
    public ResponseEntity<List<Publisher>> getAllPublishers(){
        return new ResponseEntity<>(publisherRepository.findAll(), HttpStatus.OK);
    }
    public ResponseEntity<Publisher> getPublisherByID(@PathVariable Integer id){
        Optional<Publisher> publisher = publisherRepository.findById(id);
        if(publisher.isEmpty()){
            throw new RuntimeException("Error al encontrar la editorial con ID=" + id);
        }
        return new ResponseEntity<>(publisher.get(), HttpStatus.OK);
    }

    public ResponseEntity<Publisher> deletePublisherByID(@PathVariable Integer id){
        Optional<Publisher> publisher = publisherRepository.findById(id);
        if(publisher.isEmpty()){
            throw new RuntimeException("Error al encontrar la editorial con ID=" + id);
        }
        publisherRepository.deleteById(id);
        return new ResponseEntity<>(publisher.get(), HttpStatus.OK);
    }

    public ResponseEntity<Publisher> updatePublisherByID(@PathVariable Integer id, @RequestBody Publisher publisher) {
        Optional<Publisher> bookPublisher = null;
        try {
            bookPublisher = publisherRepository.findById(id);

            if (bookPublisher.isEmpty()) {
                throw new RuntimeException("Error al encontrar la editorial con ID=" + id);
            }

            Publisher existingPublisher = bookPublisher.get();
            existingPublisher.setName(publisher.getName());

            publisherRepository.save(existingPublisher);
            return new ResponseEntity<>(bookPublisher.get(), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(bookPublisher.get(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Publisher> createPublisher(@RequestBody Publisher publisher) {
        Publisher savedPublisher = publisherRepository.save(publisher);
        return new ResponseEntity<>(savedPublisher, HttpStatus.CREATED);
    }
}
