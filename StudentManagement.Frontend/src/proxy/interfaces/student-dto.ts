import { EnrollmentDto } from "./enrollment-dto";

export interface StudentDto {
  id:number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  age: number;
  enrollments: EnrollmentDto[];
   
}
