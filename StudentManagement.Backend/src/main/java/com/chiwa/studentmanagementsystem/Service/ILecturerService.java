package com.chiwa.studentmanagementsystem.Service;

import com.chiwa.studentmanagementsystem.Model.Lecturer;

import java.util.List;

public interface ILecturerService {
    public Lecturer getLecturer(int id);
    public List<Lecturer> getLecturers();
    public Lecturer createLecturer(Lecturer lecturer);
    public Lecturer updateLecturer(Lecturer lecturer);
    public String deleteLecturer(int id);
}
