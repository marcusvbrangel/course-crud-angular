import { CourseResolver } from './guards/course.resolver';
import { CourseFormComponent } from './course-form/course-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';

const routes: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'new', component: CourseFormComponent, resolve: { courseResolver: CourseResolver } },
    { path: 'edit/:id', component: CourseFormComponent, resolve: { courseResolver: CourseResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
