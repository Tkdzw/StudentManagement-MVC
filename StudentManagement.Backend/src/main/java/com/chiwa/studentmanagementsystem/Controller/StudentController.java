package com.chiwa.studentmanagementsystem.Controller;

import com.chiwa.studentmanagementsystem.Model.Student;
import com.chiwa.studentmanagementsystem.Service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private IStudentService studentService;

    @GetMapping(value = "/student/{id}")
    public Student getStudent(@PathVariable int id) {
        return studentService.getStudent(id);
    }

    @GetMapping(value = "/students")
    public List<Student> getStudents() {
        return studentService.getStudents();
    }

    @PostMapping(value = "/student")
    public Student addStudent(@RequestBody Student student) {
        return studentService.createStudent(student);
    }

    @PutMapping(value = "/student")
    public Student updateStudent(@RequestBody Student student) {
        return studentService.updateStudent(student);
    }

    @DeleteMapping(value = "/student/{id}")
    public String deleteStudent(@PathVariable int id) {
        return studentService.deleteStudent(id);
    }
}
