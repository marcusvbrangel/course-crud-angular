import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppAngularMaterialModule } from '../shared/app-angular-material/app-angular-material.module';
import { CategoryPipe } from '../shared/pipes/category.pipe';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
    declarations: [
        CoursesComponent,
        CourseFormComponent,
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        AppAngularMaterialModule,
        CategoryPipe
    ]
})

export class CoursesModule { }
