package com.chiwa.studentmanagementsystem.Repo;

import com.chiwa.studentmanagementsystem.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student, Integer> {
}
