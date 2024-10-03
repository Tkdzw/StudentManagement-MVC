package com.chiwa.studentmanagementsystem.Repo;

import com.chiwa.studentmanagementsystem.Model.Lecturer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LecturerRepo extends JpaRepository<Lecturer, Integer> {
}
