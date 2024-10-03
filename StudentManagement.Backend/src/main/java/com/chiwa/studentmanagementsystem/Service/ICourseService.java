package com.chiwa.studentmanagementsystem.Service;

import com.chiwa.studentmanagementsystem.Model.Course;

import java.util.List;

public interface ICourseService {
    public Course getCourse(int id);
    public List<Course> getCourses();
    public Course createCourse(Course course);
    public Course updateCourse(Course course);
    public String deleteCourse(int id);
}
