import { CoursesService } from './courses.service';
import { AuthorService } from './author.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', //<courses>
    template: `
    <h2>{{ title2 }}</h2>
    <ul>
        <li *ngFor="let author of authors">
            {{ author }} 
        </li>
    </ul>
    `
})

export class CoursesComponent {
    title = 'List of courses';
    title2 = `3 Authors`;
    courses;
    authors;

    constructor(service: AuthorService) {
        this.authors = service.getAuthors();
    }
}
