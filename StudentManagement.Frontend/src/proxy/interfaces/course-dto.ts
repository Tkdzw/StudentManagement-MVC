import { EnrollmentDto } from "./enrollment-dto";
import { LecturerDto } from "./lecturer-dto";

export interface CourseDto {
    id: number;
    courseName: string;
    courseCode: string;
    creditHours: number;
    instructor: string;
    enrollments: EnrollmentDto[];
    lecturers: LecturerDto[];
}