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
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String courseName;

    @Column(nullable = false)
    private String courseCode;

    @Column(nullable = false)
    private int creditHours;

    @Column(nullable = true)
    private String instructor;

    @OneToMany(mappedBy = "course") // Refers to the "course" field in Enrollment
    private List<Enrollment> enrollments;  // List of enrollments for this course
    @ManyToMany(mappedBy = "courses")  // Lecturer side owns the relationship
    private List<Lecturer> lecturers;  // List of lecturers teaching this course

}
