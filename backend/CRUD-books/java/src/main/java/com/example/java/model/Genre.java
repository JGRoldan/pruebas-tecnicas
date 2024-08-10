package com.example.java.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name="Genres")
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_genre;
    private String name;

    @ManyToMany(mappedBy = "genres")
    @JsonIgnore //Si no esta esto, hace un buble infinito con los generos
    private List<Book> books;
}
