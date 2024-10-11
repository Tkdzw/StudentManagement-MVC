import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StudentDto } from 'src/proxy/interfaces/student-dto';
import { StudentsService } from 'src/proxy/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  students: StudentDto[] = []

  student: StudentDto = {} as StudentDto;

  studentUpdate: StudentDto = {} as StudentDto;

  loading: boolean = true;

  createModal: boolean = false;

  upadteModal: boolean = false;

  constructor(
    private studentsService: StudentsService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.studentsService.getAllStudents()
      .subscribe({
        next: (data: StudentDto[]) => {
          this.students = data;
          this.loading = false;
        },
        error: (err: any) => {
          console.log(err);
          this.loading = false;
        }
      })
  }

  addNew() {
    this.createModal = true;
  }

  updateStudent(student: StudentDto) {
    this.studentUpdate = student;
    this.upadteModal = true;
  }

  viewStudent(student: StudentDto){

  }

  deleteStudent(student: StudentDto){

  }

  save() {
    this.studentsService.createStudent(this.student)
      .subscribe((res: StudentDto) => {
        this.students.push(res);

        this.createModal = false;
        this.student = {} as StudentDto;

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Students Saved Successfully',
          life: 3000
        });
      });
  }

  update() {
    try {
      this.studentsService.updateStudent(this.studentUpdate)
        .subscribe((res: StudentDto) => {
          this.students.push(res);

          this.upadteModal = false;
          this.studentUpdate = {} as StudentDto;

          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Students Updated Successfully',
            life: 3000
          });
        });

    } catch (error) {
      throw error;
    }
  }

  clear() {
    throw new Error('Method not implemented.');
  }
  onGlobalFilter() {
    throw new Error('Method not implemented.');
  }

}
