import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LecturerDto, updateLecturerDto } from 'src/proxy/interfaces/lecturer-dto';
import { LecturerService } from 'src/proxy/services/lecturer.service';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.scss']
})

export class LecturerComponent {
  lecturers: LecturerDto[] = []

  lecturer: LecturerDto = {} as LecturerDto;

  lecturerUpdate: updateLecturerDto = {} as updateLecturerDto;

  loading: boolean = true

  createModal: boolean = false

  updateModal: boolean = false

  constructor(
    private lecturerService: LecturerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.lecturerService.getAllLecturers()
      .subscribe((data: LecturerDto[]) => {
        this.lecturers = data;
        this.loading = false;
      })
  }

  update() {
    this.lecturerService.updateLecturer(this.lecturerUpdate)
      .subscribe((data: LecturerDto) => {
        this.lecturers = this.lecturers.map((item) => {
          if (item.id === data.id) {
            item = data;
          }
          return item;
        });
        this.updateModal = false;
        this.lecturerUpdate = {} as LecturerDto;

        this.messageService.add(
          {
            severity: 'success',
            summary: 'Success',
            detail: 'Lecturer updated successfully',
            life: 3000
          }
        )
      })
  }
  save() {
    this.lecturerService.createLecturer(this.lecturer)
      .subscribe((data: LecturerDto) => {
        this.lecturers.push(data);
        this.createModal = false;
        this.lecturer = {} as LecturerDto;

        this.messageService.add(
          {
            severity: 'success',
            summary: 'Success',
            detail: 'Lecturer created successfully',
            life: 3000
          }
        )
      })
  }

  viewLecturer(item: any) {
    throw new Error('Method not implemented.');
  }
  deleteLecturer(item: any) {
    this.lecturerService.deleteLecturer(item.id)
      .subscribe((data: any) => {

        this.messageService.add(
          {
            severity: 'success',
            summary: 'Success',
            detail: 'Lecturer deleted successfully',
            life: 3000
          }
        )
      })
  }
  addNew() {
    this.createModal = true;
  }
  updateLecturer(item: any) {
    this.updateModal = true;
    this.lecturerUpdate = item;
  }
  onGlobalFilter() {
    throw new Error('Method not implemented.');
  }
}
