package com.chiwa.studentmanagementsystem.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Lecturer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String email;

    @ManyToMany
    @JoinTable(
            name = "lecturer_courses", // Name of the join table
            joinColumns = @JoinColumn(name = "lecturer_id"),  // Foreign key to Lecturer
            inverseJoinColumns = @JoinColumn(name = "course_id")  // Foreign key to Course
    )
    private List<Course> courses;  // List of courses this lecturer teaches
}
