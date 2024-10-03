package com.chiwa.studentmanagementsystem.Service;

import com.chiwa.studentmanagementsystem.Model.Student;
import com.chiwa.studentmanagementsystem.Repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService implements IStudentService {

    @Autowired
    private StudentRepo studentRepo;

    @Override
    public Student getStudent(int id) {
        return studentRepo.findById(id).get();
    }

    @Override
    public List<Student> getStudents() {
        return studentRepo.findAll();
    }

    @Override
    public Student createStudent(Student student) {
        studentRepo.save(student);
        return student;
    }

    @Override
    public Student updateStudent(Student student) {
        //Student currentStudent = studentRepo.findById(student.getId()).get();
        studentRepo.save(student);
        return student;
    }

    @Override
    public String deleteStudent(int id) {
        studentRepo.deleteById(id);
        return "Student Has Been Deleted";
    }
}
