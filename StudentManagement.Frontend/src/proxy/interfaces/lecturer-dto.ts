import { CourseDto } from "./course-dto";

export interface LecturerDto {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    courses: CourseDto[];

}
