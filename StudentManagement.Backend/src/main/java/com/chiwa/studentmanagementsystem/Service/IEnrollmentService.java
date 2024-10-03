package com.chiwa.studentmanagementsystem.Service;

import com.chiwa.studentmanagementsystem.Model.Enrollment;

import java.util.List;

public interface IEnrollmentService {
    public Enrollment getEnrollment(int id);
    public List<Enrollment> getEnrollments();
    public Enrollment createEnrollment(Enrollment enrollment);
    public Enrollment updateEnrollment(Enrollment enrollment);
    public String deleteEnrollment(int id);

}
