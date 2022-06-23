package com.example.blogs.repostory;


import com.example.blogs.model.Blogs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blogs,Long> {
}
