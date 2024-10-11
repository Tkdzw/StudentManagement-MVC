import { CourseDto } from "./course-dto";
import { StudentDto } from "./student-dto";

export interface EnrollmentDto {
    id: number;
    enrollmentDate: string;
    grade: string;
    student: StudentDto;
    course: CourseDto;
}
