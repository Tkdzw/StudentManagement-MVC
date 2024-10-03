package com.chiwa.studentmanagementsystem.Controller;

import com.chiwa.studentmanagementsystem.Model.Enrollment;
import com.chiwa.studentmanagementsystem.Service.IEnrollmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EnrollmentController {
    @Autowired
    private IEnrollmentService enrollmentService;

    @GetMapping(value = "/enrollment")
    public List<Enrollment> getAllEnrollments() {
        return enrollmentService.getEnrollments();
    }

    @PostMapping(value = "/enrollment")
    public Enrollment createEnrollment(@RequestBody Enrollment enrollment) {
        return enrollmentService.createEnrollment(enrollment);
    }

    @GetMapping(value = "/enrollment/{id}")
    public Enrollment getEnrollmentById(@PathVariable int id) {
        return enrollmentService.getEnrollment(id);
    }

    @PutMapping(value = "/enrollment")
    public Enrollment updateEnrollment(@RequestBody Enrollment enrollment) {
        return enrollmentService.updateEnrollment(enrollment);
    }

    @DeleteMapping(value = "/enrollment/{id}")
    public String deleteEnrollment(@PathVariable int id) {
        return enrollmentService.deleteEnrollment(id);
    }
}
