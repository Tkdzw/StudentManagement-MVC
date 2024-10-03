package com.chiwa.studentmanagementsystem.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor  // Generates default constructor
@AllArgsConstructor // Generates constructor with all fields
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private int age;

    @OneToMany(mappedBy = "student") // Refers to the "student" field in Enrollment
    private List<Enrollment> enrollments;  // List of enrollments for this student
}
