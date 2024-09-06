package com.example.java.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name="Books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_book;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author_id;

    @ManyToOne
    @JoinColumn(name = "publisher_id")
    private Publisher publisher_id;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(
            name = "book_genres",
            joinColumns = @JoinColumn(name = "book_id", referencedColumnName = "id_book"),
            inverseJoinColumns = @JoinColumn(name = "genre_id", referencedColumnName = "id_genre")
    )
    private List<Genre> genres;
    private String summary;
    private String ISBN;
    private int pageCount;
    private Float price;
    private LocalDate publicationDate;
}
