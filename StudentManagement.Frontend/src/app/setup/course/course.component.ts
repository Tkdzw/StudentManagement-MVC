import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CourseDto } from 'src/proxy/interfaces/course-dto';
import { CourseService } from 'src/proxy/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  courses: CourseDto[] = []
  course: CourseDto = {} as CourseDto
  courseUpdate: CourseDto = {} as CourseDto
  upadteModal: boolean = false;
  createModal: boolean = false;

  loading: boolean = true;

  constructor(
    private messageService: MessageService,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {

    this.courseService.getAllCourses()
      .subscribe((data: CourseDto[]) => {
        this.courses = data;
        this.loading = false;
      });
  }

  addNew() {
    this.createModal = true
  }

  viewCourse(_t34: any) {
    throw new Error('Method not implemented.');
  }
  deleteCourse(item: any) {
    this.courseService.deleteCourse(item.id)
      .subscribe((res: any) => {
        this.courses.splice(this.courses.indexOf(item), 1);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Course Deleted Successfully',
          life: 3000
        });
      })
  }
  updateCourse(item: any) {
    this.upadteModal = true
    this.courseUpdate = item
  }

  update() {
    this.courseService.updateCourse(this.courseUpdate)
      .subscribe((res: CourseDto) => {
        this.courses.push(res);
        this.upadteModal = false;
        this.courseUpdate = {} as CourseDto;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Course Updated Successfully',
          life: 3000
        });

      });
  }

  save() {
    this.courseService.createCourse(this.course)
      .subscribe((res: CourseDto) => {
        this.courses.push(res);
        this.createModal = false;
        this.course = {} as CourseDto;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Course Saved Successfully',
          life: 3000
        });
      });
  }

  onGlobalFilter() {
    throw new Error('Method not implemented.');
  }
}
