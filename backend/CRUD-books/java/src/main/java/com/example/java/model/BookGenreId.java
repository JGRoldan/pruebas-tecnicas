package com.example.java.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class BookGenreId implements Serializable {
    @Column(name = "id_book")
    private Long bookId;

    @Column(name = "id_genre")
    private Long genreId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BookGenreId that = (BookGenreId) o;

        if (!bookId.equals(that.bookId)) return false;
        return genreId.equals(that.genreId);
    }

    @Override
    public int hashCode() {
        int result = bookId.hashCode();
        result = 31 * result + genreId.hashCode();
        return result;
    }
}
