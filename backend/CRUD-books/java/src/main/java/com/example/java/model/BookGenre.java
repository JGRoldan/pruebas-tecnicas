package com.example.java.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name="BookGenres")
public class BookGenre {

    @EmbeddedId
    private BookGenreId id;

    @ManyToOne
    @JoinColumn(name = "id_book", insertable = false, updatable = false)
    private Book book;

    @ManyToOne
    @JoinColumn(name = "id_genre", insertable = false, updatable = false)
    private Genre genre;
}
