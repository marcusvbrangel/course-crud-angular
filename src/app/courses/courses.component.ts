import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

    courses$: Observable<Course[]>;

    displayedColumns: string[];

    // coursesService: CoursesService;

    constructor(
        private coursesService: CoursesService,
        public dialog: MatDialog,
        private router: Router,
        private routeActual: ActivatedRoute
    ) {

        // this.coursesService = new CourssesService();

        this.courses$ = this.coursesService.list()
            .pipe(
                catchError(error => {
                    this.onError('Erro ao tentar carregar Cursos...');
                    console.log(error);
                    return of([])
                })
            );

        this.displayedColumns = ['_id', 'name', 'category', 'actions'];

    }

    onError(errorMsg: string) {
        this.dialog.open(ErrorDialogComponent, {
            data: errorMsg
        });
    }

    ngOnInit() {
        // this.courses = this.coursesService.list();
    }

    onAdd() {
        this.router.navigate(['courses/new']);
    }


}
