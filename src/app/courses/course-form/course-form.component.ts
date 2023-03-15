import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { CoursesService } from './../services/courses.service';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

    formGroupCourse = this.formBuilder.group({
        name: [''],
        category: ['']
    });

    horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(
        private formBuilder: NonNullableFormBuilder,
        private service: CoursesService,
        private snackBar: MatSnackBar,
        private location: Location
    ) { };

    ngOnInit(): void {

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
