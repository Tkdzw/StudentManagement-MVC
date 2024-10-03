package com.chiwa.studentmanagementsystem.Service;

import com.chiwa.studentmanagementsystem.Model.Lecturer;
import com.chiwa.studentmanagementsystem.Repo.LecturerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LecturerService implements ILecturerService {

    @Autowired
    public LecturerRepo lecturerRepo;

    @Override
    public Lecturer getLecturer(int id) {
        return lecturerRepo.findById(id).get();
    }

    @Override
    public List<Lecturer> getLecturers() {
        return lecturerRepo.findAll();
    }

    @Override
    public Lecturer createLecturer(Lecturer lecturer) {
        lecturerRepo.save(lecturer);
        return lecturer;
    }

    @Override
    public Lecturer updateLecturer(Lecturer lecturer) {
        lecturerRepo.save(lecturer);
        return lecturer;
    }

    @Override
    public String deleteLecturer(int id) {
        lecturerRepo.deleteById(id);
        return "Lecturer with id " + id + " deleted";
    }
}
