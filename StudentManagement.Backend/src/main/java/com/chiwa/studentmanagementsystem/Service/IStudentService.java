package com.chiwa.studentmanagementsystem.Service;

import com.chiwa.studentmanagementsystem.Model.Student;

import java.util.List;

public interface IStudentService {
    public Student getStudent(int id);
    public List<Student> getStudents();
    public Student createStudent(Student student);
    public Student updateStudent(Student student);
    public String deleteStudent(int id);
}
