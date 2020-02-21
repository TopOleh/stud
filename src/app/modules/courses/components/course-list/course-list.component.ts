import { Component, OnInit, ViewChild } from '@angular/core';

import { Course } from 'app/modules/courses/interfaces/course';
// Change on remote DB !!!!
import { MOCK_DATA } from 'assets/mock/db';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[];

  @ViewChild('searchInput', {static: true}) searchInput: HTMLInputElement;

  constructor(private search: SearchPipe) {}

  ngOnInit() {
    this.courses = MOCK_DATA;
  }

  onDelete(courseId: string): void {
    console.log('Delete course id:', courseId);
  }

  findCourses(name: string): void {
    this.courses = name ? this.search.transform(MOCK_DATA, name) : MOCK_DATA;
  }
}
