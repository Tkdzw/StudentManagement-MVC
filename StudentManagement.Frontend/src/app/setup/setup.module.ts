import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { CourseComponent } from './course/course.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    CourseComponent,
    LecturerComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    TableModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    ToastModule
  ]
})
export class SetupModule { }
