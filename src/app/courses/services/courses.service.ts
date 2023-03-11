import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    // private readonly API = '/assets/courses.json';

    private readonly API = 'api/v1/courses';

    constructor(private httpClient: HttpClient) { }

    list() {

        return this.httpClient.get<Course[]>(this.API)
            .pipe(
                first(),  // Note: Use this method because the call isn't a stream... just the first result is necessary...
                delay(1000),  // Note: one second delay...
                tap(courses => console.log(courses))
            );

    }

}
