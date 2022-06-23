package com.example.blogs.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.lang.instrument.ClassDefinition;

@AllArgsConstructor @Data @NoArgsConstructor
@Entity
public class Blogs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   private String title;
   @Column(columnDefinition = "TEXT")
   private String body;
}
