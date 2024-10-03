package com.chiwa.studentmanagementsystem.Repo;

import com.chiwa.studentmanagementsystem.Model.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnrollmentRepo extends JpaRepository<Enrollment, Integer> {
}
