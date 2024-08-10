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
    private Long id_book;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author_id;

    @ManyToOne
    @JoinColumn(name = "publisher_id")
    private Publisher publisher_id;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "BookGenres",
            joinColumns = @JoinColumn(name = "id_book"),
            inverseJoinColumns = @JoinColumn(name = "id_genre")
    )
    private List<Genre> genres;
//    @OneToMany(mappedBy = "book")
//    private List<BookGenre> bookGenres;

    private String summary;
    private String ISBN;
    private int pageCount;
    private Float price;
    private LocalDate publicationDate;
}
