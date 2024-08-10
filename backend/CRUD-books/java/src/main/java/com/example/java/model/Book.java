package com.example.java.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@Entity
@Table(name="Books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Author author_id;

    @ManyToOne
    private Publisher publisher_id;

    private String summary;
    private String ISBN;
    private int pageCount;
    private Float price;
    private LocalDate publicationDate;
}
