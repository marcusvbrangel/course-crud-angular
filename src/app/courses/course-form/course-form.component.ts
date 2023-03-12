import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

    formGroupCourse: FormGroup;

    horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(
        private formBuilder: FormBuilder,
        private service: CoursesService,
        private snackBar: MatSnackBar
    ) {

        this.formGroupCourse = this.formBuilder.group({
            name: [null],
            category: [null]
        });

    }

    ngOnInit(): void {

    }

    onSubmit() {
        this.service.save(this.formGroupCourse.value)
            .subscribe(success => console.log(success), error => this.onError());
    }

    onCancel() {
        console.log('onCancel');
    }

    private onSuccess() {

    }

    private onError() {
        this.openSnackBar('Error trying save course')
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, 'X', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }


}
