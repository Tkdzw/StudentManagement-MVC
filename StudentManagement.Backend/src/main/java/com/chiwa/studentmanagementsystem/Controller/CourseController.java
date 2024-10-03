package com.chiwa.studentmanagementsystem.Controller;

import com.chiwa.studentmanagementsystem.Model.Course;
import com.chiwa.studentmanagementsystem.Service.CourseService;
import com.chiwa.studentmanagementsystem.Service.ICourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private ICourseService courseService;

    @GetMapping(value = "/course")
    public List<Course> getAllCourses() {
        return courseService.getCourses();
    }

    @PostMapping(value = "/course")
    public Course createCourse(@RequestBody Course course) {
        return courseService.createCourse(course);
    }

    @GetMapping(value = "/course/{id}")
    public Course getCourseById(@PathVariable int id) {
        return courseService.getCourse(id);
    }

    @PutMapping(value = "/course")
    public Course updateCourse(@RequestBody Course course) {
        return courseService.updateCourse(course);
    }

    @DeleteMapping(value = "/course/{id}")
    public String deleteCourse(@PathVariable int id) {
        return courseService.deleteCourse(id);
    }
}
