import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppAngularMaterialModule } from '../shared/app-angular-material/app-angular-material.module';
import { CategoryPipe } from '../shared/pipes/category.pipe';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

@NgModule({
    declarations: [
        CoursesComponent,
        CourseFormComponent,
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        AppAngularMaterialModule,
        CategoryPipe,
        ReactiveFormsModule
    ]
})

export class CoursesModule { }
