package com.chiwa.studentmanagementsystem.Service;

import com.chiwa.studentmanagementsystem.Model.Course;
import com.chiwa.studentmanagementsystem.Repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService implements ICourseService {

    @Autowired
    private CourseRepo courseRepo;

    @Override
    public Course getCourse(int id) {
        return courseRepo.findById(id).orElse(null);
    }

    @Override
    public List<Course> getCourses() {
        return courseRepo.findAll();
    }

    @Override
    public Course createCourse(Course course) {
        return courseRepo.save(course);
    }

    @Override
    public Course updateCourse(Course course) {
        return courseRepo.save(course);
    }

    @Override
    public String deleteCourse(int id) {
        courseRepo.deleteById(id);
        return "Course deleted";
    }
}
