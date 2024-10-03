package com.chiwa.studentmanagementsystem.Repo;

import com.chiwa.studentmanagementsystem.Model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course, Integer> {
}
