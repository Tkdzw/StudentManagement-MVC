package com.chiwa.studentmanagementsystem.Controller;

import com.chiwa.studentmanagementsystem.Model.Lecturer;
import com.chiwa.studentmanagementsystem.Service.ILecturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LecturerController {

    @Autowired
    private ILecturerService lecturerService;

    @GetMapping(value = "/lecturer/{id}")
    public Lecturer getLecturer(@PathVariable int id) {
        return lecturerService.getLecturer(id);
    }

    @GetMapping(value = "/lecturers")
    public List<Lecturer> getLecturers() {
        return lecturerService.getLecturers();
    }

    @PostMapping(value = "/lecturer")
    public Lecturer createLecturer(@RequestBody Lecturer lecturer) {
        return lecturerService.createLecturer(lecturer);
    }

    @PutMapping(value = "/lecturer")
    public Lecturer updateLecturer(@RequestBody Lecturer lecturer) {
        return lecturerService.updateLecturer(lecturer);
    }

    @DeleteMapping(value = "/lecturer/{id}")
    public String deleteLecturer(@PathVariable int id) {
        return lecturerService.deleteLecturer(id);
    }
}
