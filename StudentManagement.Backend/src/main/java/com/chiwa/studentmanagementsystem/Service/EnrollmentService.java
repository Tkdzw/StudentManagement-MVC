package com.chiwa.studentmanagementsystem.Service;

import com.chiwa.studentmanagementsystem.Model.Enrollment;
import com.chiwa.studentmanagementsystem.Repo.EnrollmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollmentService implements IEnrollmentService {
    
    @Autowired
    private EnrollmentRepo enrollmentRepo;

    @Override
    public Enrollment getEnrollment(int id) {
        return enrollmentRepo.findById(id).get();
    }

    @Override
    public List<Enrollment> getEnrollments() {
        return enrollmentRepo.findAll();
    }

    @Override
    public Enrollment createEnrollment(Enrollment enrollment) {
        enrollmentRepo.save(enrollment);
        return enrollment;
    }

    @Override
    public Enrollment updateEnrollment(Enrollment enrollment) {
        enrollmentRepo.save(enrollment);
        return enrollment;
    }

    @Override
    public String deleteEnrollment(int id) {
        enrollmentRepo.deleteById(id);
        return "Enrollment with id " + id + " deleted";
    }
}
