import { Course } from './../model/course';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

    @Input() courses: Course[] = [];

    readonly displayedColumns: string[] = ['_id', 'name', 'category', 'actions'];

    constructor(private router: Router, private routeActual: ActivatedRoute) {

    }

    onAdd() {
        this.router.navigate(['new'], { relativeTo: this.routeActual });
    }


}
