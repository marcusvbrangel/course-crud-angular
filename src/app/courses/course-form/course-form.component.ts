import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

    formGroupCourse = this.formBuilder.group({
        _id: [''],
        name: [''],
        category: ['']
    });

    horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(
        private formBuilder: NonNullableFormBuilder,
        private service: CoursesService,
        private snackBar: MatSnackBar,
        private location: Location,
        private route: ActivatedRoute
    ) { };

    ngOnInit(): void {

        const course: Course = this.route.snapshot.data['courseResolver'];

        this.formGroupCourse.setValue({
            _id: course._id,
            name: course.name,
            category: course.category
        });

    }

    onSubmit() {
        this.service.save(this.formGroupCourse.value)
            .subscribe(success => this.onSuccess(), error => this.onError());
    }

    onCancel() {
        this.location.back();
    }

    private onSuccess() {
        this.openSnackBar('Course saved with success!!!');
        this.onCancel();
    }

    private onError() {
        this.openSnackBar('Error trying save course!!!');
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, 'X', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }


}
