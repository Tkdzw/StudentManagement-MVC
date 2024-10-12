import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { LecturerComponent } from './lecturer/lecturer.component';

const routes: Routes = [
  {
    path:'course-management',
    component: CourseComponent
  },
  {
    path:'lecturer-management',
    component: LecturerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
